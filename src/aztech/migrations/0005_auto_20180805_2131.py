# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-08-05 21:31
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('aztech', '0004_auto_20180412_2144'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='category',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='aztech.Category'),
        ),
        migrations.AddField(
            model_name='service',
            name='icon',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
