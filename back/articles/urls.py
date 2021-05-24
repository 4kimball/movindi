from django.urls import path
from . import views

urlpatterns = [
    path('movies/', views.movie_list),
    path('movies/<str:keyword>/', views.movie_keyword),
    path('community/<str:type>/', views.community_list_create),
    path('community/detail/<int:article_pk>/', views.article_detail),
    path('community/article/<int:article_pk>/', views.article_update_delete),
    path('community/article/<int:review_pk>/comments/', views.review_comment_create),
    path('community/article/comments/<int:comment_pk>/', views.review_comment_delete),
    path('movies/<int:movie_pk>/comments/', views.movie_comment_create),
    path('movies/comments/<int:comment_pk>/', views.movie_comment_delete),
    path('actors/', views.actor_list),
    path('search/<keyword>/', views.search),
    path('actors/like/<int:actor_pk>/', views.like_actor),
]
