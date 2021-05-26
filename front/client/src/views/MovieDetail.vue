<template>
  <div class="detail-movie container mt-5">
    <div class="movie-item">
      <div class="poster">
        <img :src=detailMovie.poster_path :alt=detailMovie.title>
      </div>
      <div class="movie-info">
        <h2 class="movie-title">{{ detailMovie.title }}</h2>
        <p>{{ detailMovie.release_date }} | <span v-for="(rank, index) in detailMovie.rank_average" :key="index" id="rank-star"><i class="fas fa-star"></i>
        </span></p>
        <hr>
        <p>감독 | {{ detailMovie.director }}</p>
        <p>배우 | {{ detailMovie.actors }}</p>
        <p class="mt-5">{{ detailMovie.content }}</p>
      </div>
      <div class="btn-like-movie" @click="like_movie">
        <i class="fas fa-heart" v-if="isLiked(detailMovie)"></i>
        <i class="far fa-heart" v-else></i>
      </div>
    </div>
    <hr class="mt-5">
    <div class="movie-comment-item">
      <h5>{{ user.username }}</h5>
      <div class="comment-form" @keyup.enter="createMovieComment">
        <select name="" id="rank" v-model="comment.rank">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label for="comment"></label>
        <input type="text" id="comment" placeholder="영화가 어떠셨나요?" v-model="comment.content">
        <button @click="createMovieComment">작성</button>
      </div>
      <ul class="movie-comments" v-if="checkComment(detailMovie.moviecomment_set)">
        <li v-for="comment in detailMovie.moviecomment_set" :key="comment.id">
          {{ comment.user.username }}: {{ comment.content}}
        </li>
      </ul>
      <p v-else class="mt-5">아직 작성된 평점이 없습니다.</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MovieDetail',
  data() {
    return {
      comment: {
        rank: '',
        content: ''
      }
    }
  },
  computed: {
    ...mapState([
      'detailMovie',
      'user'
    ])
  },
  methods: {
    createMovieComment() {
      parseInt(String(this.comment.rank))
      console.log(typeof this.comment.rank)
      this.$store.dispatch('createMovieComment', this.comment)
    },
    checkComment(comments) {
      if(comments.length){
        return true
      } else {
        return false
      }
    },
    like_movie() {
      this.$store.dispatch('like_movie', this.detailMovie)
      this.$store.dispatch('setDetailMovie', this.detailMovie)
    },
    isLiked(movie) {
      if(movie.like_users.includes(this.user.pk)) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style>
.detail-movie {
  color: white;
}
.detail-movie .movie-item {
  display: flex;
  background-color: #f2f2f2;
  color: black;
  border-radius: 10px;
}

.detail-movie .movie-item #rank-star{
  color: var(--color-pink);
}
.detail-movie .movie-item .poster {
  flex: 1 1 40%;
}
.detail-movie .movie-item .poster img {
  width: 80%;
  border-radius: 10px;
}
.detail-movie .movie-item .movie-info {
  flex: 1 1 55%;
  margin-top: 3rem;
}
.detail-movie .movie-item .movie-info .movie-title {
  color: var(--color-pink);
  font-weight: bold;
}
.detail-movie .movie-item .btn-like-movie {
  flex: 1 1 5%;
  font-size: 20px;
  margin-top: 1rem;
  padding-left: 1rem;
  color: var(--color-pink);
}

.detail-movie .movie-comment-item .comment-form #rank {
  padding: 4px 6px;
  margin-right: 1rem;
  border-radius: 6px;
  background-color: #e6e6e6;
}

.detail-movie .movie-comment-item .comment-form #comment {
  margin-right: 2rem;
  width: 500px;
  border: none;
  border-radius: 5px;
  background-color: #e6e6e6;
  padding: 3px;
}

.detail-movie .movie-comment-item .comment-form button {
  border: none;
  border-radius: 5px;
  background-color: var(--color-pink);
  color: white;
  font-weight: bold;
  padding: 4px 8px;
}
.detail-movie .movie-comment-item .movie-comments {
  list-style: none;
  padding: 10px;
}
.detail-movie .movie-comment-item .movie-comments li {
  margin-top: 1rem;
}
</style>