<template>
  <div class="home">
    <section>
      <div class="today-movie container">
        <div id="movie-info">
          <p>오늘의 영화</p>
          <h1>{{ movie.title }}</h1>
          <p>{{ movie.release_date }} | {{ movie.genre }}</p>
          <hr>
          <p>{{ movie.content }}</p>
        </div>
      
        <img :src=movie.poster_path alt="">
       
      </div>
      <div class="recommand-movies"></div>
      <div class="today-actor"></div>
      
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
    movie() {
      return this.$store.state.movies[0]
    }
  },
  created() {
    this.$store.dispatch('getMovies')
  },
  

}
</script>

<style>
.home section {
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
}

.home .today-movie {
  width: 100%;
  height: 1000px;
  position: relative;
  color: #f2f2f2;

  display: flex;
  justify-content: space-between;
}

.home .today-movie #movie-info {
  width: 50%;  
  margin-right: 3rem;
  z-index: 1;
}

.home .today-movie img {
  
  width: 400px;
  height: 600px;
  z-index: 0;
  opacity: 0.7;

  border-radius: 5px;
}
.home .today-actor {
  width: 100%;
  height: 1000px;
  background-color: orange;
}

.home .recommand-movies {
  width: 100%;
  height: 1000px;
  background-color: navy;
}

.home .community {
  width: 100%;
  height: 1000px;
  background-color: green;
}
</style>