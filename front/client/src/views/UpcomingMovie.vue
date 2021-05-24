<template>
  <div class="upcoming-movie-item">
    <div class="movie-info">
    <h3>{{ movie.title }}</h3>
    <p>{{ movie.release_date }} | {{ movie.genre }} | {{movie.director }} | {{ movie.actors }}</p>
    <hr>
    <p>{{ movie.content }}</p>
    </div>
    <img :src=movie.poster_path :alt=movie.title class="poster">
  </div>
</template>

<script>
export default {
  name: 'UpcomingMovie',
  computed: {
    movie() {
      return this.$store.state.movies[16]
    }
  }
}
</script>

<style>
.upcoming-movie-item {
  display: flex;
  justify-content: space-around;
  width: 100%;
  transition: all 2s ease-in-out;

}

.upcoming-movie-item .movie-info {
  width: 50%;
}
.upcoming-movie-item .poster {
  width: 500px;
  height: 650px;
  opacity: 0.8;
  border-radius: 10px;
}
</style>