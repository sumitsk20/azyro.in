# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from ckeditor.fields import RichTextField
from django.urls import reverse

from .utils import upload_location
from django.db.models.signals import pre_save
from django.utils.text import slugify
from ckeditor_uploader.image import pillow_backend as backend
from .constants import CONST_PROJECT_STATUS


class BaseClass(models.Model):
    name = models.CharField ( max_length=250 )
    created = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated = models.DateTimeField(auto_now=True, auto_now_add=False)

    class Meta(object):
        abstract = True

    def __str__(self):
        return self.name


class Client(models.Model):
    name = models.CharField ( max_length=250, null=True, blank=True)
    created = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated = models.DateTimeField(auto_now=True, auto_now_add=False)
    logo = models.ImageField(upload_to=upload_location, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    mobile = models.CharField(max_length=12, blank=True, null=True)

    class Meta:
        verbose_name = "Client"
        verbose_name_plural = "Clients"

    def __str__(self):
        return self.name


class Category(BaseClass):
    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"


class Project(BaseClass):
    slug = models.SlugField(unique=True,null=True,editable=False)
    status = models.CharField(choices=CONST_PROJECT_STATUS, max_length=25, default=CONST_PROJECT_STATUS[0])
    image = models.ImageField(upload_to=upload_location,blank=True,null=True)
    content = RichTextField(blank=True,null=True)
    site = models.CharField(max_length=200, blank=True, null=True)
    client = models.CharField(max_length=200, blank=True, null=True)
    location = models.CharField(max_length=200, blank=True, null=True)
    start_date = models.DateTimeField(blank=True, null=True)
    end_date = models.DateTimeField(blank=True, null=True)
    show = models.BooleanField('Show on Landing Page', default=False)


    class Meta:
        verbose_name = "Project"
        verbose_name_plural = "Projects"


def pre_save_project_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        Model = instance.__class__
        new_id=None
        try:
            new_id = Model.objects.order_by("id").last().id
            if new_id:
                new_id += 1
            else:
                pass
        except:
            new_id=1
        instance.slug = '%s-%s'%(slugify(instance.name),new_id)

pre_save.connect(pre_save_project_receiver, sender=Project)


class Member(BaseClass):
    role = models.CharField(max_length=50, help_text='Your Job profile in company.')
    experience = models.PositiveIntegerField(blank=True, null=True)
    image = models.ImageField(upload_to=upload_location, blank=True,null=True)
    bio = RichTextField(blank=True,null=True)
    email = models.EmailField(blank=True,null=True)
    lp = models.URLField('LinkedIn URL',blank=True,null=True)

    class Meta:
        verbose_name = "Member"
        verbose_name_plural = "Members"

    def clean(self):
        self.name = self.name


class Section(BaseClass):
    tagline = models.CharField(max_length=160,help_text='Not more than 160 Character.', blank=True,null=True)
    image = models.ImageField(upload_to=upload_location, blank=True,null=True)
    content = RichTextField(blank=True,null=True)

    class Meta:
        verbose_name = "Section"
        verbose_name_plural = "Sections"


class Service(BaseClass):
    image = models.ImageField(upload_to=upload_location, blank=True,null=True)
    content = RichTextField(blank=True,null=True)
    category = models.ForeignKey(Category, blank=True, null=True)
    icon = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        verbose_name = "Service"
        verbose_name_plural = "Services"


class Career(BaseClass):
    job_name = models.CharField(max_length=300, blank=True, null=True)
    position = models.CharField(max_length=300, blank=True, null=True)
    qualification = models.CharField(max_length=300, blank=True, null=True)
    job_type = models.CharField(max_length=500, blank=True, null=True, help_text='Job Type: Part-Time, Full-Time,'
                                                                                 'Work from Home, Freelance, etc.'
                                                                                 ' You can give comma separated list.')
    location = models.CharField(max_length=256, blank=True, null=True)
    no_of_position = models.CharField(max_length=256, blank=True, null=True)
    experience = models.CharField(max_length=300, blank=True, null=True)
    job_description = models.TextField(blank=True, null=True)
    skill_required = models.TextField(max_length=500, blank=True, null=True)
    remuneration = models.TextField(max_length=256, blank=True, null=True)

    class Meta:
        verbose_name = "Career"
        verbose_name_plural = "Careers"




class CaseStudy(BaseClass):
    name = models.CharField(max_length=300, blank=True, null=True)
    image = models.ImageField(upload_to=upload_location, blank=True,null=True)

    class Meta:
        verbose_name = "Case Study"
        verbose_name_plural = "Case Studies"

    def __str__(self):
        return self.name if self.name else str(self.id)

