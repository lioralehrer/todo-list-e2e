from django.conf.urls import url
from . import views
from django.contrib.auth import login, logout

urlpatterns = [
    url(r'^$', views.get_tasks, name='get_tasks'),
    url(r'^create$', views.create_new_task, name='create_task'),
    url(r'^delete$', views.delete_task, name='delete_task'),
    url(r'^login$', login, name='login'),
    url(r'^logout$', logout, name='logout')
]