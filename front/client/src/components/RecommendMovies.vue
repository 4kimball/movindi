<template>
  <div class="recommand-movies" id="bg-rain">
      <div class="buttons">
        <button @click="handleClick" id="btn-clicked" class="btn-rain">#비도오고그래서</button>
        <button @click="handleClick" class="btn-friend">#친구와 함께</button>
        <button @click="handleClick" class="btn-family">#가족에 대해서</button>
        <button @click="handleClick" class="btn-change">#기분전환</button>
      </div>

      <div class="images">
        <div class="d-flex"
        v-for="(movie, index) in randomMovies" 
        :key="index" 
        @click="setDetailMovie(movie)">
        <router-link :to="{ name: 'MovieDetail'}" class="rlink" >
          <img :src=movie.poster_path :alt=movie.title  >
        </router-link>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendMovies',
    data() {
    return {
      detailMovie: {},
    }
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
  },
  computed: {
    movies() {
      return this.$store.state.movies
    },
    randomMovies() {
      return this.$store.state.randomMovies
    },
  },
  created() {
    this.$store.dispatch('getMovies')
  }, 
}
</script>

<style>
.recommand-movies {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.recommand-movies .buttons {
  display: flex;
  flex-direction: column;
  margin-right: 5rem;
  justify-content: space-around;
  height: 50%;
  position: relative;
  padding: 3rem;

  flex: 1 1 20%;
  margin-left: 3rem;
}
.recommand-movies .buttons::after {
  position: absolute;
  top: 50px;
  right: 0;
  content: "";
  width: 2px;
  height: 75%;
  background-color: var(--color-pink);
}
.recommand-movies .buttons button {
  border:none;
  background-color: rgba(255, 255, 255, 0);
  color: white;
  font-weight: bold;
  border: 2px solid var(--color-pink);
  padding: 1rem;
  border-radius: 50px;
  font-size: 20px;
  width: 80%;
}
#btn-clicked {
  background-color: var(--color-pink);
}
.recommand-movies .images {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  flex: 1 1 80%;
  align-items: center;
  margin-right: 3rem;
}
.recommand-movies .images .rlink {
  background: none;
}
.recommand-movies .images img {
  width: 250px;
  transition: transform 0.5s ease-in;
  border-radius: 10px;
  box-shadow: 3px 3px 3px #cccccc;
}

.recommand-movies .images img:hover {
  transform: scale(1.1);
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

@media screen and (max-width: 1400px) {
  .recommand-movies {
    flex-direction: column;
  }

  .recommand-movies .buttons {
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    margin: auto 0;
  }

  .recommand-movies .buttons button {
    padding: 8px;
    font-size: 15px;
  }
  .recommand-movies .buttons::after {
    display: none;
  }
  .recommand-movies .buttons::before {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-pink);
    content: "";
  }
  .recommand-movies .images img {
    width: 200px;
  }
}
</style>