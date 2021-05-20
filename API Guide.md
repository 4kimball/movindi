# API Guide



- `GET`  /api/v1/movies/ 
  - 모든 영화 리스트를 불러온다.
- `GET` /api/v1/movies/<keyword>/
  - keyword와 관련된 영화의 목록을 불러온다.
- `GET`  /api/v1/community/<type>/
  - type = 리뷰, 구인이 올 수있으며 관련된 글 목록을 불러온다.
- `POST`  /api/v1/community/<type>/
  - type = 리뷰, 구인에 해다하는 글을 작성한다.
- `GET` /api/v1/community/detail/<article_pk>/
  - 게시글에 대한 상세 페이지를 불러온다.
- `PUT` /api/v1/community/article/<article_pk>/
  - 해당 게시글을 수정한다.
- `DELETE` /api/v1/community/article/<article_pk>/
  - 해당 게시글을 삭제한다.
- `POST` /api/v1/community/article/<review_pk>/comments/
  - 해당 게시글에 댓글을 작성한다.
- `DELETE` /api/v1/community/article/comments/<comment_pk>/
  - 댓글을 삭제한다.
- `POST` /api/v1/movies/<movie_pk>/comments/
  - 특정 영화에 평점과 댓글을 작성한다.
- `DELETE` /api/v1/movies/comments/<comment_pk>/
  - 영화에 달린 댓글을 삭제한다.
- `GET` /api/v1/actors/
  - 전체 배우들의 목록을 불러온다.
- `GET` /api/v1/actors/<name>/
  - 특정 배우의 정보를 불러온다.