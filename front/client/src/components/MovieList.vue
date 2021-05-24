<template>
  <div class="movie-list">
    <div class="btn-list">
      
    </div>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'MovieList',
  props: {
    movies: {
      type: Array
    }
  },
  created() {
    router.push({name: 'TodayMovie' })
  }
}
</script>

<style>


</style>