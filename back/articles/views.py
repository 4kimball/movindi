from django.shortcuts import get_list_or_404, get_object_or_404

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Review, ReviewComment, Movie, MovieComment, Actor
from .serializers import (
    MovieSerializer,
    ReviewCommentSerializer,
    ReviewListSerializer,
    MovieListSerializer,
    MovieCommentSerializer,
    ReviewSerializer,
    ActorListSerializer
)
from django.contrib.auth import get_user_model
import jwt
@api_view(['GET'])
def movie_list(request):
    '''
    전체 영화 목록 가져오기
    '''
    movies = get_list_or_404(Movie)
    for i in range(len(movies)):
        movie = get_object_or_404(Movie, pk=movies[i].pk)
        comments = movie.moviecomment_set.all()
        total = 0
        for j in range(len(comments)):
            total += comments[j].rank
        if len(comments) > 0:
            rank_average = total // len(comments)
            Movie.objects.filter(pk=movies[i].pk).update(rank_average=rank_average)
    serializer = MovieListSerializer(movies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def movie_keyword(request, keyword):
    '''
    키워드로 영화추천하기
    '''
    movies = Movie.objects.filter(keyword=keyword).order_by('?')[:4]
    serializer = MovieListSerializer(movies, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
def community_list(request, type):
    '''
    type이 리뷰&캐스팅에 따라 글의 목록 읽고 쓰기
    '''
    if request.method == 'GET':
        articles = Review.objects.filter(type=type).order_by('-pk')
        serializer = ReviewListSerializer(articles, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def article_detail(request, article_pk):
    '''
    해당 글 선택시 해당 글로 이동하기
    '''
    article = get_object_or_404(Review, pk=article_pk)
    if request.method == 'GET':
        serializer = ReviewSerializer(article)
        
        return Response(serializer.data)

@api_view(['PUT', 'DELETE'])
def article_update_delete(request, article_pk):
    article = get_object_or_404(Review, pk=article_pk)
    if request.method == 'DELETE':
        article.delete()
        return Response(status=status.HTTP_200_OK)
    
    elif request.method == 'PUT':
        serializer = ReviewSerializer(article, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

@api_view(['POST'])
def review_comment_create(request, review_pk):
    '''
    게시글에 대한 댓글 쓰기
    '''
    review = get_object_or_404(Review, pk=review_pk)
    
    if request.method == 'POST':
        serializer = ReviewCommentSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(review=review)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['DELETE'])
def review_comment_delete(request, comment_pk):
    comment = get_object_or_404(ReviewComment, pk=comment_pk)
    comment.delete()
    return Response(status=status.HTTP_200_OK)

@api_view(['POST'])
def movie_comment_create(request, movie_pk):
    '''
    영화에 평점 및 댓글 달기
    '''
    movie = get_object_or_404(Movie, pk=movie_pk)
   
    serializer = MovieCommentSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(movie=movie)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['DELETE'])
def movie_comment_delete(request, comment_pk):
    comment = get_object_or_404(MovieComment, pk=comment_pk)
    comment.delete()
    return Response(status=status.HTTP_200_OK)

@api_view(['GET'])
def actor_list(request):
    '''
    전체 배우 리스트
    '''
    actors = get_list_or_404(Actor)
    serializer = ActorListSerializer(actors, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def search(request, keyword):
    '''
    검색
    '''
    if Actor.objects.filter(name=keyword).exists():
        actor = get_object_or_404(Actor, name=keyword)
        serializer = ActorListSerializer(actor)
        return Response(serializer.data)
    elif Movie.objects.filter(title=keyword).exists():
        movie = get_object_or_404(Movie, title=keyword)
        serializer = MovieSerializer(movie)
        return Response(serializer.data)
    else:
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
def like_actor(request, actor_pk):
    access_token = request.data.get('access_token')
    user = jwt.decode(f'{access_token}', None, None)
    actor = get_object_or_404(Actor, pk=actor_pk)
    user_id = user.get('user_id')
    User = get_user_model()
    user = User.objects.get(pk=user_id)
    
    if actor.like_users.filter(pk=user.pk).exists():
        actor.like_users.remove(user)
    else:
        actor.like_users.add(user)
    
    actors = get_list_or_404(Actor)
    serializer = ActorListSerializer(actors, many=True)
    return Response(serializer.data)