# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import admin
from .models import *

admin.site.register(Category)
admin.site.register(Client)
admin.site.register(Project)
admin.site.register(Member)
admin.site.register(Section)
admin.site.register(Service)


