<template>
  <div class="home">
    <section >
      <div class="today-movie">
        <div class="btn-list">
          <button class="btn-pick-type" id="btn-active" @click="changeColor"><router-link :to="{ name: 'TodayMovie'}" class="rlink" >오늘의 영화</router-link></button>
          <button class="btn-pick-type" @click="changeColor"><router-link :to="{ name: 'AwardMovie'}" class="rlink">2020 서울 독립영화제</router-link></button>
          <button class="btn-pick-type" @click="changeColor"><router-link :to="{ name: 'UpcomingMovie'}" class="rlink">개봉예정영화</router-link></button>
        </div>
        <div>
        <router-view/>
        </div>
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
          <div v-for="movie in randomMovies" :key="movie.id" @click="setDetailMovie(movie)">
          <router-link :to="{ name: 'MovieDetail'}" class="rlink" ><img :src=movie.poster_path alt="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          </router-link>
            </div>
        </div>
      </div>
      
      </div>
 

      <div class="today-actor container">
        <TodayActor />
      </div>
      
      <div class="community"></div>
    </section>
  </div>
</template>

<script>
import TodayActor from '@/components/TodayActor'
import { mapState } from 'vuex'
import router from '../router'
export default {
  name: 'Home',
  data() {
    return {
      
    }
  },
  components: {
    TodayActor
  },
  methods: {
    handleClick(event) {
      const beforeClicked = document.getElementById("btn-clicked")
      const section = document.querySelector('.recommand-movies')
      beforeClicked.id = ""
      const targetBtn = event.target
      targetBtn.id = "btn-clicked"
      let keyword = ''
      if(targetBtn.className === 'btn-rain') {
        section.id = 'bg-rain';
        keyword = '비'
      } else if(targetBtn.className ==='btn-friend') {
        section.id = 'bg-friend';
        keyword = '친구'
      } else if(targetBtn.className === 'btn-family') {
        section.id = 'bg-family';
        keyword = '가족'
      } else if(targetBtn.className === 'btn-change') {
        section.id = 'bg-change';
        keyword = '기분전환'
      }
      this.$store.dispatch('getRandomMovies', keyword)
    },
    setDetailMovie(movie) {
      this.$store.dispatch('setDetailMovie', movie)
    },
    isLiked(movie) {
      
      if(!this.isLoggedIn){
        return false
      } 
      if(movie.like_users.includes(this.$store.state.user.pk)){
        return true
      } else {
        return false
      }
    },
    changeColor(event) {
      let beforeBtn = document.getElementById("btn-active")
      let targetBtn = event.target.parentNode
      beforeBtn.id = ""
      targetBtn.id = "btn-active"
    }
  },
  computed: {
    randomMovies() {
      return this.$store.state.randomMovies
    },
    ...mapState([
      'movies'
    ])
  },
  created() {
      this.$store.dispatch('getMovies')
      this.$store.dispatch('getActors')
      router.push({name: 'TodayMovie'})
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
  height: 900px;
  position: relative;
  color: #f2f2f2;
  display: flex;
}

.home .today-movie .btn-list {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  margin-left: 5rem;
}

.home .today-movie .btn-list #btn-active{
  border-bottom: 2px solid white;
}
.home .today-movie .btn-list #btn-active a {
  color: white;
}
.home .today-movie .btn-list .btn-pick-type {
  width: 200px;
  background-color: rgba( 255, 255, 255, 0 );
  border: none;
  border-bottom: 2px solid #bfbfbf;
}
.home .today-movie .btn-list button .rlink {
  color: #bfbfbf;
}
.home .today-actor {
  width: 100%;
  height: 900px;
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

.recommand-movies .images {
  display: flex;
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

#rank-star {
  color: var(--color-pink);
}

.home #icons {
  display: flex;
  justify-content: space-between;
}

.home #icons #like-movie {
  font-size: 22px;
  color: var(--color-pink);
}

@media screen and (max-width: 1125px) {
  .home section{
    margin-top: 0;

  }
}
</style>