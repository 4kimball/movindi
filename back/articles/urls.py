from django.urls import path
from . import views

urlpatterns = [
    path('movies/', views.movie_list),
    path('movies/<str:keyword>/', views.movie_keyword),
    path('community/<str:type>/', views.community_list),
    path('community/detail/<int:article_pk>/', views.article_detail),
    path('community/review/<int:review_pk>/comments/', views.review_comment_create),
    path('movies/<int:movie_pk>/comments/', views.movie_comment_create)
]
