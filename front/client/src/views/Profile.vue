<template>
  <div class="profile container mt-5">
    <div class="user-info">
      <h2>{{ user.username }}님의 활동</h2>
      <div class="user-log">
        <p>응원하는 배우 : {{ user.like_actors|getSize }}명</p>
        <p>작성한 게시글 : {{ user.review_set|getSize }}개</p>
      </div>
      <div class="user-log">
        <p>스크랩한 게시글 : {{ user.scrap_articles|getSize }}개</p>
        <p>좋아하는 영화 : {{ user.like_movies|getSize }}개</p>
      </div>
    </div>
    <div class="article-actor">
      <div class="review">
        <div v-for="(article, index) in myArticles" :key="index">
          <span class="type">{{ article.type|getType }}</span> | 
          <span class="title">{{ article.title }}</span>
        </div>
      </div>
      <div class="like-actors row d-flex justify-content-between">
        <div v-for="(actor, index) in user.like_actors" :key="index" class="col-3 actor-item d-flex flex-column align-items-center">
          <img :src=actors[actor-1].profile_image :alt=actors[actor-1].name>
          <h4>{{ actors[actor-1].name }}</h4>
        </div>
      </div>
    </div>
    <div class="like-movies">
      <h3>내가 좋아하는 영화</h3>
      <div class="like-movies-section">
        <div v-for="(movie, index) in user.like_movies" :key="index">
          <img :src=movies[movie-1].poster_path :alt=movies[movie-1].title>
        </div>
      </div>
    </div>
    <div class="scrap-article">
      <h1>스크랩한 게시글</h1>
      <div v-for="(scrap, index) in myScrapArticles" :key="index">
        <h3>{{ scrap.title }}</h3>  
       </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Profile',
  data() {
    return {
      myArticles: [],
      myScrapArticles: []
    }
  },
  filters: {
    getType(type) {
      if(type === 'review') {
        return '영화리뷰'
      } else if(type === 'casting') {
        return '캐스팅'
      } else if(type === 'free') {
        return '자유게시판'
      }
    },
    getSize(arr) {
      return arr.length
    }
  },
  created() {
    this.$store.dispatch('getByUsername', this.user.username)
    this.getMyArticle(this.articles)
    this.getMyScrapArticle(this.articles)
  },
  computed: {
    ...mapState([
      'movies',
      'articles',
      'actors',
      'user'
    ])
  },
  methods: {
    getMyArticle(articles) {
     
      const review_set = this.user.review_set
      for(let i=0; i<review_set.length; i++) {
        for(let j=0; j<articles.length; j++) {
          if(review_set[i] === articles[j].id) {
            this.myArticles.push(articles[j])
          }
        }
      }
    },
    getMyScrapArticle(articles) {
      const scrap_articles = this.user.scrap_articles
      for(let i=0; i<scrap_articles.length; i++) {
        for(let j=0; j<articles.length; j++) {
          if(scrap_articles[i] === articles[j].id) {
            this.myScrapArticles.push(articles[j])
          }
        }
      }
    }
  },

}
</script>

<style>
.profile {
  display: flex;
  flex-direction: column;
  color: white;
}
.profile .user-info {
  display: flex;
  justify-content: space-around;
  background-color: #f2f2f2;
  border-radius: 20px;
  align-items: center;
  padding: 4px;
  color: #333333;
}

.profile .user-info .user-log {
  font-weight: bold;
}
.profile .article-actor {
  display: flex;
  color: white;
  justify-content: space-around;
  margin-top: 5rem;
}
.profile .article-actor .review {
  border: 1px solid var(--color-pink);
  padding: 2rem;
}

.profile .article-actor .review div {
  margin-bottom: 1rem;
}
.profile .article-actor .review .type {
  color: #fff0b3;
}

.profile .article-actor .review .title {
  margin-left: 1rem;
}
.profile .article-actor .like-actors{
  text-align: center;
}
.profile .article-actor .like-actors .actor-item {
  width: 30%;
  
}
.profile .article-actor .like-actors h4 {
  margin-top: 4px;
  color: var(--color-pink);
}
.profile .article-actor .like-actors img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
}

.profile .like-movies {
  margin-top: 5rem;
}
.profile .like-movies .like-movies-section {
  display: flex;
  margin-top: 2rem;
  justify-content: space-around;
}
</style>