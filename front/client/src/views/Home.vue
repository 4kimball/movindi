<template>
  <div class="home">
    <section >
      <div class="today-movie container ">
        
        <div id="movie-info">
          <p>오늘의 영화</p>
          <h1>{{ movie.title }}</h1>
          <p>{{ movie.release_date }} | {{ movie.genre }}</p>
          <hr>
          <p>{{ movie.content }}</p>
        </div>
        <img :src=movie.poster_path alt="">
      </div>
      <div class="recommand-movies" id="bg-rain">
        <div class="d-flex align-items-center h-100" id="movies">
        <div class="buttons">
          <button @click="handleClick" id="btn-clicked" class="btn-rain">#비도오고그래서</button>
          <button @click="handleClick" class="btn-friend">#친구와 함께</button>
          <button @click="handleClick" class="btn-family">#가족에 대해서</button>
          <button @click="handleClick" class="btn-change">#기분전환</button>
        </div>
        <div class="images">
          <img :src=movie.poster_path alt="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="0" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">{{ movie.title }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body d-flex">
                    <div>  
                     <p>{{ movie.content }}</p>
                     </div>
                    <img :src=movie.poster_path alt="" id="modal-img">
                  </div>
                  
                </div>
              </div>
            </div>
          <img :src=movie.poster_path alt="">
          <img :src=movie.poster_path alt="">
          <img :src=movie.poster_path alt="">
        </div>
      </div>
      </div>
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
    handleClick(event) {
      const beforeClicked = document.getElementById("btn-clicked")
      const section = document.querySelector('.recommand-movies')
      console.log(section)
      beforeClicked.id = ""
      const targetBtn = event.target
      targetBtn.id = "btn-clicked"
      if(targetBtn.className === 'btn-rain') {
        section.id = 'bg-rain';
      } else if(targetBtn.className ==='btn-friend') {
        section.id = 'bg-friend';
      } else if(targetBtn.className === 'btn-family') {
        section.id = 'bg-family';
      } else if(targetBtn.className === 'btn-change') {
        section.id = 'bg-change';
      }
    },
    
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

#bg-rain {
  background-image: url('../assets/bg-rain.jpg');
}

#bg-friend {
  background-image: url('../assets/bg-friend.jpg');
  background-size: 500px;
}

#bg-family {
  background-image: url('../assets/bg-family.jpg');
  background-size: 700px;
}

#bg-change {
  background-image: url('../assets/bg-change.jpg');

}
.home .community {
  width: 100%;
  height: 1000px;
  background-color: green;
}

.recommand-movies {
  height: 100%;
}

.recommand-movies #movies {
  margin-left: 5rem;
  margin-right: 5rem;
  align-items: center;
}
.recommand-movies .buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 50%;
  margin-right: 5rem;
}
.recommand-movies .buttons button {
  border: 1px white solid;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0);
  font-weight: bold;
}
.recommand-movies .buttons button:hover {
  background-color: rgba(255, 26, 117, 0.5);
}
.recommand-movies .images img {
  margin-left: 2rem;
  width: 300px;
}

#btn-clicked {
  background-color: rgba(255, 26, 117, 0.8);
  
}


.modal-header, .modal-body{
  width: 100%;
  background: linear-gradient(to bottom right, #262626, #595959);
  opacity: 0.8;
  color: white;
  font-weight: bold;

}


</style>