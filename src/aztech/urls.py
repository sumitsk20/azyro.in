from django.conf.urls import url
from .views import *

urlpatterns = [
    url(r'^$', index_view, name='index'),
    url(r'^projects$', index_view, name='projects'),
    # url(r'^projects$', _view, name='index'),
    # url(r'^$', index_view, name='index'),

]
