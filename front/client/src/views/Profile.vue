<template>
  <div class="profile container mt-5">
        <div class="user-info">
      <h2>{{user.username }}</h2>
    </div>
    <div class="article-actor">
      <div class="review">
        <div v-for="(article, index) in myArticles" :key="index">
          <span>{{ article.type }}</span>
        </div>
      </div>
      <div class="like-actors row">
        <div v-for="(actor, index) in user.like_actors" :key="index" class="col-4">
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
      <div v-for="(scrap, index) in user.scrap_articles" :key="index">
        <h3>{{ articles[scrap-1].title }}</h3>  
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
      myArticles: []
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
    }
  },
  created() {
    this.$store.dispatch('getByUsername', this.user.username)
    this.user.reivew_set.forEach( review => {
      this.articles.forEach(article => {
        if(review === article.id) {
          this.myArticle.push(article)
        }
      })
    })
    console.log(this.myArticles)
  },
  computed: {
    ...mapState([
      'movies',
      'articles',
      'actors',
      'user'
    ])
  },
}
</script>

<style>
.profile {
  display: flex;
  flex-direction: column;
  color: white;
}
.profile .article-actor {
  display: flex;
  color: white;
  justify-content: space-around;
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
.profile .article-actor .like-actors h4 {
  margin-top: 6px;
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