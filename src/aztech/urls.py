from django.conf.urls import url
from .views import *

urlpatterns = [
    url(r'^$', index_view, name='index'),

]
