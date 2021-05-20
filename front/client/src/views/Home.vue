<template>
  <div class="home">
    <section>
      <div class="movies"></div>
      <div class="today-actor"></div>
      <div class="recommand-movies"></div>
      <div class="community"></div>
    </section>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
 
  }
}
</script>

<style>
section {
  display: flex;
  flex-direction: column;
}

.movies {
  width: 100%;
  height: 1000px;
}

.today-actor {
  width: 100%;
  height: 1000px;
  background-color: orange;
}

.recommand-movies {
  width: 100%;
  height: 1000px;
  background-color: navy;
}

.community {
  width: 100%;
  height: 1000px;
  background-color: green;
}
</style>