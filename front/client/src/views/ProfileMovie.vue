<template>
  <div class="profile-movie">
    <div class="row">
      <div v-for="(movie, index) in user.like_movies" :key="index" class="col-4">
        <img :src=movies[movie-1].poster_path :alt=movies[movie-1].title>
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
  }
}
</script>

<style>

</style>