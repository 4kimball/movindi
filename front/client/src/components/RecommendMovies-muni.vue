<template>
  <div 
  id="recommand-movies"
  :class="{ 'bg0': is0, 'bg1':is1,'bg2':is2, 'bg3': is3 }"
  class="container-fluid p-0">
    <div class="d-flex align-items-center full">
      <div class="buttons col-lg-3 d-flex flex-column align-items-center">
        <button @click="handleClick(0)" id="btn-clicked" class="my-3 btn-0 change-button col-6">#비도오고그래서</button>
        <button @click="handleClick(1)" class="my-3 btn-1 change-button col-6">#친구와 함께</button>
        <button @click="handleClick(2)" class="my-3 btn-2 change-button col-6">#가족에 대해서</button>
        <button @click="handleClick(3)" class="my-3 btn-3 change-button col-6">#기분전환</button>
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
      <div v-else-if="current === 1" class="movie-info">
        <p>1</p>
        <div class="posters d-flex">
          <div class="poster">
            <img src="" alt="" class="poster-img">
            <div class="info"></div>
          </div>
        </div>
      </div>
      <div v-else-if="current === 2" class="movie-info">
        <p>2</p>
        <div class="posters d-flex">
          <div class="poster">
            <img src="" alt="" class="poster-img">
            <div class="info"></div>
          </div>
        </div>
      </div>
      <div v-else class="movie-info">
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
      is0: true,
      is1: false,
      is2: false,
      is3: false
    }
  },
  methods : {
    handleClick(goto) {
      this.current = goto;
      if (this.current === 0) {
        this.is0 = true,
        this.is1 = false,
        this.is2 = false,
        this.is3 = false
      } else if (this.current === 1) {
        this.is0 = false,
        this.is1 = true,
        this.is2 = false,
        this.is3 = false
      } else if (this.current === 2) {
        this.is0 = false,
        this.is1 = false,
        this.is2 = true,
        this.is3 = false
      } else {
        this.is0 = false,
        this.is1 = false,
        this.is2 = false,
        this.is3 = true
      }
    }
  }
}
</script>

<style scoped>

.full {
  width: 100%;
  height: 100%;
}

/* background img */
.bg0 {
  background-image: url('../assets/bg-rain.jpg');
  width: 100%;
  height: 100%;
}
.bg1 {
  background-image: url('../assets/bg-friend.jpg');
  width: 100%;
  height: 100%;
}
.bg2 {
  background-image: url('../assets/bg-family.jpg');
  width: 100%;
  height: 100%;
}
.bg3 {
  background-image: url('../assets/bg-change.jpg');
  width: 100%;
  height: 100%;
}

</style>