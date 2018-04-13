from django.conf.urls import url
from .views import *

urlpatterns = [
    url(r'^$', index_view, name='index'),
    url(r'^projects$', project_list_view, name='projects'),
    url(r'^about$', about_view, name='about'),
    url(r'^gallery$', gallery_view, name='gallery'),
    url(r'^why-need-us$', need_us_view, name='why'),
    # url(r'^projects$', _view, name='index'),
    # url(r'^$', index_view, name='index'),

]
