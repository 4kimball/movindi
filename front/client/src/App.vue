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
a {
  text-decoration: none;
}
</style>
