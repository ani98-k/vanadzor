from django.urls import path

from . import views

app_name = "places"

urlpatterns = [
    path('', views.index, name='index'),
    # path('events/like/', views.like_event, name='like_event'),
    # path("events/<int:id>/", views.details, name="details"),
]