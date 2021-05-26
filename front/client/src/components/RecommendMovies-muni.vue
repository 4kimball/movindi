<template>
  <div 
  id="recommand-movies"
  :class="{ 'bg0': is0, 'bg1':is1,'bg2':is2, 'bg3': is3 }"
  class="container-fluid p-0">
    <div class="d-flex">
      <div class="buttons col-lg-3 d-flex flex-column">
        <button @click="handleClick(0)" id="btn-clicked" class="btn-rain">#비도오고그래서</button>
        <button @click="handleClick(1)" class="btn-friend">#친구와 함께</button>
        <button @click="handleClick(2)" class="btn-family">#가족에 대해서</button>
        <button @click="handleClick(3)" class="btn-change">#기분전환</button>
      </div>
      
      <div v-if="current === 0" class="movie-info">
        <p>0</p>
        <div class="posters d-flex">
          <div class="poster">
            <img src="" alt="" class="poster-img">
            <div class="info"></div>
          </div>
        </div>
      </div>
      <div v-if="current === 1" class="movie-info">
        <p>1</p>
        <div class="posters d-flex">
          <div class="poster">
            <img src="" alt="" class="poster-img">
            <div class="info"></div>
          </div>
        </div>
      </div>
      <div v-if="current === 2" class="movie-info">
        <p>2</p>
        <div class="posters d-flex">
          <div class="poster">
            <img src="" alt="" class="poster-img">
            <div class="info"></div>
          </div>
        </div>
      </div>
      <div v-if="current === 3" class="movie-info">
        <p>3</p>
        <div class="posters d-flex">
          <div class="poster">
            <img src="" alt="" class="poster-img">
            <div class="info"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendMovies',
  data () {
    return {
      current: 0,
      isRain: true,
      isFriend: false,
      isFamily: false,
      isChange: false
    }
  },
  methods : {
    handleclick(goto) {
      this.current = goto;
      if go
    }
  }
}
</script>

<style scoped>

/* background img */

.bg-rain {
  background-image: url('../assets/bg-rain.jpg');
  width: 100%;
  height: 100%;
}

</style>