from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.signup),
    path('user/<str:username>/', views.getByUsername)
]
