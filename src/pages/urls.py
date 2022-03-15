from django.urls import path

from pages import views

urlpatterns = [
    path('', views.about_me, name='about'),
    path('skills/', views.skills, name='skills'),
    path('experience/', views.experience, name='experience'),
    path('portfolio/', views.portfolio, name='portfolio'),
    path('contacts/', views.contacts, name='contacts'),
]
