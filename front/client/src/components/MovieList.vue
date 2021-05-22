<template>
  <div class="movie-list">

   <div class="movie-item" v-for="movie in movies" :key="movie.id">
     <div class="movie-info mt-5">
       <h2>{{ movie.title }}</h2>
       <p>{{ movie.release_date }} | {{ movie.genre }} | {{ movie.director }} | {{ movie.actors }}</p>
       <p>{{ movie.content }}</p>
     </div>
     <div>
       <img :src=movie.poster_path :alt=movie.title>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'MovieList',
  props: {
    movies: {
      type: Array
    }
  },
  data() {
    return {
       
    }
  },
  methods: {
    carouselSlide(){
    const firstSlide = document.querySelector('.movie-item:first-child')
    function slide(){
      const currentSlide = document.querySelector('#showing')
        if (currentSlide) {
          const nextSlide = currentSlide.nextElementSibling
          if(nextSlide) {
            currentSlide.id = ''
            nextSlide.id = 'showing'
          } else {
            currentSlide.id = ''
            firstSlide.id = 'showing'
          }
        } else {
          firstSlide.id = 'showing'
        }
        
      }
      slide()
      setInterval(slide, 3000)
    }
    
      
  },
  mounted() {
    this.carouselSlide()
  }
}
</script>

<style>
.movie-list {
  width: 100%;
  
  margin: 0 auto;
}
.movie-list .movie-item {
  width: 100%;
  overflow: hidden;
  position: absolute;
  z-index: 0;
  opacity: 0;
  transition: all .7s ease-in-out;
  transform: scale(.8);

  display: flex;
  justify-content: space-between;
}

.movie-list .movie-item .movie-info {
  margin-right: 5rem;
}
.movie-list .movie-item img {
  width: 100%;
  width: 600px;
  height: 800px;
}

#showing {
  opacity: 1;
  z-index: 1;
  
}
</style>