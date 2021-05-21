<template>
  <div id="app">
    <header>
      <div class="logo">
        <router-link :to="{ name: 'Home'}" class="rlink"><h1>MoovIndi</h1></router-link>
      </div>
      <div class="search">
        <input type="text">
        <i class="fas fa-search"></i>
      </div>
      <ul class="menu">
        <router-link :to="{ name: 'Intro'}" class="rlink"><span>Movindi?</span></router-link>
        <router-link :to="{ name: 'Actors'}" class="rlink"><span>배우들</span></router-link>
        <router-link :to="{ name: 'Community'}" class="rlink"><span>Community</span></router-link>
        <router-link :to="{ name: 'Profile'}" class="rlink"><span>My</span></router-link>
      </ul>
    </header>
    
    <router-view class="view"/>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  created() {
    this.$store.dispatch('getMovies')
  },
  
}
</script>

<style>

.rlink {
  text-decoration: none;
}
</style>
