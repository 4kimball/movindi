<template>
  <div class="profile-movie">
    <div class="row">
      <div v-for="(movie, index) in user.like_movies" :key="index" class="col-4 profile-movie-item" @click="setDetailMovie(movies[movie-1])">
        <router-link :to="{ name: 'MovieDetail'}" class="rlink" >
          <img :src=movies[movie-1].poster_path :alt=movies[movie-1].title class="poster">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProfileMovie',
  computed: {
    ...mapState([
      'user',
      'movies'
    ])
  },
  methods: {
    setDetailMovie(movie) {
      this.$store.dispatch('setDetailMovie', movie)
    },
  }
}
</script>

<style>
.profile-movie .profile-movie-item {
  margin-bottom: 2rem;
}

.profile-movie .profile-movie-item img {
  border-radius: 10px;
  box-shadow: 3px 3px 3px #a6a6a6;
  width: 65%;
  height: 90%;
  transition: transform .5s ease-in;
}

.profile-movie .profile-movie-item img:hover {
  transform: scale(1.1);
}
</style>