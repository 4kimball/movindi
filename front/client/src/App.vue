<template>
  <div id="app">
    <header>
      <div class="logo">
        <router-link :to="{ name: 'Home'}"><h1>MoovIndi</h1></router-link>
      </div>
      <div class="search">
        <input type="text">
        <i class="fas fa-search"></i>
      </div>
      <ul class="menu">
        <router-link :to="{ name: 'Intro'}"><span>Movindi?</span></router-link>
        <router-link :to="{ name: 'Actors'}"><span>배우들</span></router-link>
        <router-link :to="{ name: 'Community'}"><span>Community</span></router-link>
        <router-link :to="{ name: 'Profile'}"><span>My</span></router-link>
      </ul>
    </header>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
body {
  background-color: rgb(38, 38, 38);
}
a {
  text-decoration: none;
}
</style>
