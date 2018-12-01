# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from .models import *


def index_view(request):
    projects = Project.objects.filter(show=True)
    # team = Member.objects.all()
    clients = Client.objects.all()
    services = Service.objects.all()
    case_studies = CaseStudy.objects.all()
    # if services.count() % 4 == 0:
    #     d4 = True
    # elif services.count() % 3 == 0:
    #     d3 = True
    context = {
        "projects":projects,
        # "team":team,
        "clients":clients,
        "case_studies":case_studies,
        "services":services,
    }
    return render(request,"aztech/index.html",context)


def about_view(request):
    projects = Project.objects.all()
    context = {
        "projects":projects,
    }
    return render(request,"aztech/page/about.html",context)


# def project_list_view(request):
#     projects = Project.objects.all().order_by('show')
#     context = {
#         "projects":projects,
#     }
#     return render(request,"aztech/page/project.html",context)


# def gallery_view(request):
#     projects = Project.objects.all()
#     context = {
#         "projects":projects,
#     }
#     return render(request,"aztech/page/project.html",context)

def need_us_view(request):
    # projects = Project.objects.all()
    # context = {
    #     "projects":projects,
    # }
    return render(request,"aztech/page/why.html",{})


def career_openings(request):
    careers = Career.objects.all()
    context = {
        "careers":careers,
    }
    return render(request, "aztech/page/career.html", context)

def case_studies(request):
    case_studies = CaseStudy.objects.all()
    context = {
        "case_studies":case_studies,
    }
    return render(request, "aztech/page/case_study.html", context)