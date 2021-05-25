<template>
  <div id="app" @resize="addMoreBtn">
    <header id="header">
      <div class="logo">
        <span class="sub-title">독립영화를 사랑하는 당신과 함께</span>
        <router-link :to="{ name: 'Home'}" class="rlink"><h1>MoovIndi</h1></router-link>
      </div>
      <div class="search">
        <input type="text" v-model="searchKeyword" @keyup.enter="search" id="search-bar">
        <span><i class="fas fa-search" @click="search"></i></span>
      </div>
      <ul class="menu">
        <div v-if="isLoggedIn" class="if-box">
        <router-link :to="{ name: 'Intro'}" class="rlink"><span>MoovIndi?</span></router-link>
        <router-link :to="{ name: 'Actors'}" class="rlink"><span>배우들</span></router-link>
        <router-link :to="{ name: 'Community'}" class="rlink" ><span>Community</span></router-link>
        <router-link :to="{ name: 'Profile'}" class="rlink"><span>My</span></router-link>
        <span @click="logout" id="logout">Logout</span>
        </div>
        <div v-else class="if-box">
        <router-link :to="{ name: 'Login'}" class="rlink"><span>Login</span></router-link>
        </div>
      </ul>
      <div class="more-btn btn-group d-none">
      <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        MENU
      </button>
      <ul class="dropdown-menu">
         <div v-if="isLoggedIn" class="if-box">
        <router-link :to="{ name: 'Intro'}" class="rlink dropdown-item"><span>MoovIndi?</span></router-link>
        <router-link :to="{ name: 'Actors'}" class="rlink dropdown-item"><span>배우들</span></router-link>
        <router-link :to="{ name: 'CommunityReview' }" class="rlink dropdown-item" ><span>Community</span></router-link>
        <router-link :to="{ name: 'Profile'}" class="rlink dropdown-item"><span>My</span></router-link>
        <span @click="logout" id="logout" class="dropdown-item">Logout</span>
        </div>
        <div v-else class="if-box">
        <router-link :to="{ name: 'Login'}" class="rlink dropdown-item"><span>Login</span></router-link>
        </div>
      </ul>
    </div>
    </header>
    
    <router-view class="router"/>
    
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      searchKeyword: ''
    }
  },
  computed: {
    ...mapGetters([
      'isLoggedIn'
    ])
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
    search() {
      this.$store.dispatch('search', this.searchKeyword)
      this.searchKeyword = ''
    },
    addMoreBtn(){
      console.log('resize')
      const buttons = document.querySelector('.btn-group')
      const menu = document.querySelector('header .menu')
      if(window.innerWidth <= 1125){
        buttons.classList.remove('d-none')
        menu.classList.add('d-none')
      } else {
        buttons.classList.add('d-none')
        menu.classList.remove('d-none')
      }
    }
  },
  created() {
    this.$store.dispatch('getRandomMovies', '비')
    this.$store.dispatch('updateUser')
  },
  mounted() {
    window.addEventListener('resize', this.addMoreBtn)
  },  
  updated() {
    this.$store.dispatch('getRandomMovies', '비')
  }
}
</script>

<style>
:root {
  --font-sm-size: 8px;
  --font-md-size: 16px;
  --font-lg-size: 24px;

  --color-pink: #ff1a75;
  --color-black: #1a1a1a;
}
.rlink {
  text-decoration: none;
}

#logout:hover {
  cursor:pointer;
}

#search-bar {
  background-color: transparent;
}

.search input {
  color: white;
  padding: 1rem;
}

.search span {
  position: absolute;
}

.more-btn .btn {
  background-color: var(--color-pink);
  color: white;
}

.more-btn .dropdown-menu .dropdown-item span{
  color: black;
}

.logo h1 {
  margin: 0;
}
.logo .sub-title {
  font-size: 12px;
  color: #999999;
}



header {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

header h1 {
  color: var(--color-pink);
}

header span {
  color: white;
}

header .search input {
  width: 500px;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 5px;
  border-bottom: 2px solid var(--color-pink);
  background-color: rgba(255, 255, 255, 0.1);
}

header .search i {
  position: relative;
  color: var(--color-pink);
  right: 2rem;
  top: 2px;
}

header .menu span{
  font-size: var(--font-md-size);
  padding: 8px;
}

header .menu span:hover{
  color: var(--color-pink);
}
</style>
