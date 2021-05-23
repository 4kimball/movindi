<template>
  <div id="app" @resize="addMoreBtn">
    <header>
      <div class="logo">
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
        <router-link :to="{ name: 'Community'}" class="rlink dropdown-item" ><span>Community</span></router-link>
        <router-link :to="{ name: 'Profile'}" class="rlink dropdown-item"><span>My</span></router-link>
        <span @click="logout" id="logout" class="dropdown-item">Logout</span>
        </div>
        <div v-else class="if-box">
        <router-link :to="{ name: 'Login'}" class="rlink dropdown-item"><span>Login</span></router-link>
        </div>
      </ul>
    </div>
    </header>
    
    <router-view/>
    
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
  },
  mounted() {
    window.addEventListener('resize', this.addMoreBtn)
  }
  
}
</script>

<style>

.rlink {
  text-decoration: none;
}

#logout:hover {
  cursor:pointer;
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
</style>
