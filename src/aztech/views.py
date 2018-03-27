# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from .models import *

def index_view(request):
    projects = Project.objects.all()
    team = Member.objects.all()
    clients = Client.objects.all()
    context = {
        "projects":projects,
        "team":team,
        "clients":clients,
    }
    return render(request,"aztech/index.html",context)