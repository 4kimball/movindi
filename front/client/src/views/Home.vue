<template>
  <div class="home">
    <section>
      <div class="today-movie">
        <div class="container">
          <p>오늘의 영화</p>
          <h2>{{ movies[0].title }}</h2>
        </div>
      </div>

      <div class="today-actor"></div>
      <div class="recommand-movies"></div>
      <div class="community"></div>
    </section>
  </div>
</template>

<script>


export default {
  name: 'Home',
  data() {
    return {
      
    }
  },
  components: {
    
  },
  methods: {
    
  },
  computed: {
    movies() {
      return this.$store.state.movies
    }
  },
  created() {
    this.$store.dispatch('getMovies')
  },
  

}
</script>

<style>
section {
  display: flex;
  flex-direction: column;
}

.today-movie {
  width: 100%;
  height: 1000px;
  position: relative;
}

.today-actor {
  width: 100%;
  height: 1000px;
  background-color: orange;
}

.recommand-movies {
  width: 100%;
  height: 1000px;
  background-color: navy;
}

.community {
  width: 100%;
  height: 1000px;
  background-color: green;
}


</style>