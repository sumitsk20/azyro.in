from django.conf.urls import url
from .views import *

urlpatterns = [
    url(r'^$', index_view, name='index'),
    # url(r'^services', project_list_view, name='services'),
    url(r'^about$', about_view, name='about'),
    # url(r'^gallery$', gallery_view, name='gallery'),
    url(r'^why-need-us$', need_us_view, name='why'),
    url(r'^career-openings$', career_openings, name='career'),
    # url(r'^case-studies', case_studies, name='case-studies'),
    # url(r'^projects$', _view, name='index'),
    # url(r'^$', index_view, name='index'),

]
