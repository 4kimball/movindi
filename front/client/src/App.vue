<template>
  <div id="app">
    <header>
      <div class="logo">
        <router-link :to="{ name: 'Home'}" class="rlink"><h1>MoovIndi</h1></router-link>
      </div>
      <div class="search">
        <input type="text" v-model="searchKeyword" @keyup.enter="search">
        <i class="fas fa-search" @click="search"></i>
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
  created() {
    this.$store.dispatch('getMovies')
    this.$store.dispatch('getRandomMovies', '비')
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
    }
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
</style>
