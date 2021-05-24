<template>
  <div class="today-actor-item mt-1">
    <div class="btn-actor-list">
      <h3>오늘의 배우</h3>
      <button class="btn-a" @click="changeActor" id="pick-actor">정다은</button>
      <button class="btn-b" @click="changeActor">서현우</button>
      <button class="btn-c" @click="changeActor">이가섭</button>
      <button class="btn-d" @click="changeActor">이종원</button>
    </div>
    <div class="tbox actor-a" id="showing">
      <div id="actor-item-box">
      <div>
      <div class="actor-info">
        <img :src=actors[0].profile_image :alt=actors[0].name>
        <div>
          <h3>{{ actors[0].name }}</h3>
          <p>{{ actors[0].date_of_birth }}</p>
          <button class="btn-follow">팔로잉하고 응원하기</button>
        </div>
      </div>
      <div>
        <div class="actor-intro">
          <h5 class="me-2">소개</h5>
          <p>{{ actors[0].intro }}</p>
        </div>
        <div class="actor-filmo">
          <h5 class="me-3">필모그래피</h5>
          <p>{{ actors[0].filmography }}</p>
        </div>
      </div>
      </div>
      <img :src=movies[17].poster_path :alt=movies[17].poster_path class="filmo-poster">
      </div>
    </div>


    <div class="tbox actor-b">
      <div id="actor-item-box">
      <div>
      <div class="actor-info">
        <img :src=actors[1].profile_image :alt=actors[1].name>
        <div>
          <h3>{{ actors[1].name }}</h3>
          <p>{{ actors[1].date_of_birth }}</p>
          <button class="btn-follow">팔로잉하고 응원하기</button>
        </div>
      </div>
      <div>
        <div class="actor-intro">
          <h5 class="me-2">소개</h5>
          <p>{{ actors[1].intro }}</p>
        </div>
        <div class="actor-filmo">
          <h5 class="me-3">필모그래피</h5>
          <p>{{ actors[1].filmography }}</p>
        </div>
      </div>
      </div>
      <img :src=movies[17].poster_path :alt=movies[17].poster_path class="filmo-poster">
      </div>
    </div>


    <div class="tbox actor-c">
      <div id="actor-item-box">
      <div>
      <div class="actor-info">
        <img :src=actors[7].profile_image :alt=actors[7].name>
        <div>
          <h3>{{ actors[7].name }}</h3>
          <p>{{ actors[7].date_of_birth }}</p>
          <button class="btn-follow">팔로잉하고 응원하기</button>
        </div>
      </div>
      <div>
        <div class="actor-intro">
          <h5 class="me-2">소개</h5>
          <p>{{ actors[7].intro }}</p>
        </div>
        <div class="actor-filmo">
          <h5 class="me-3">필모그래피</h5>
          <p>{{ actors[7].filmography }}</p>
        </div>
      </div>
      </div>
      <img :src=movies[39].poster_path :alt=movies[39].poster_path class="filmo-poster">
      </div>
    </div>


    <div class="tbox actor-d">
      <div id="actor-item-box">
      <div>
      <div class="actor-info">
        <img :src=actors[8].profile_image :alt=actors[8].name>
        <div>
          <h3>{{ actors[8].name }}</h3>
          <p>{{ actors[8].date_of_birth }}</p>
          <button class="btn-follow">팔로잉하고 응원하기</button>
        </div>
      </div>
      <div>
        <div class="actor-intro">
          <h5 class="me-2">소개</h5>
          <p>{{ actors[8].intro }}</p>
        </div>
        <div class="actor-filmo">
          <h5 class="me-3">필모그래피</h5>
          <p>{{ actors[8].filmography }}</p>
        </div>
      </div>
      </div>
      <img :src=movies[39].poster_path :alt=movies[39].poster_path class="filmo-poster">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodayActor',
  computed: {
    actors() {
      return this.$store.state.actors
    },
    movies() {
      return this.$store.state.movies
    }
  },
  methods: {
    changeActor(event) {
      const currentActor = document.getElementById('pick-actor')
      const targetActor = event.target
      currentActor.id = ""

      if (currentActor.classList.value === 'btn-a') {
        const box = document.querySelector('.actor-a')
        box.id = ""
      } else if(currentActor.classList.value === 'btn-b') {
        const box = document.querySelector('.actor-b')
        box.id = ""
      } else if(currentActor.classList.value === 'btn-c') {
        const box = document.querySelector('.actor-c')
        box.id = ""
      } else if(currentActor.classList.value === 'btn-d') {
        const box = document.querySelector('.actor-d')
        box.id = ""
      }

      if(targetActor.className === 'btn-a') {
        targetActor.id = "pick-actor"
        const box = document.querySelector('.actor-a')
        box.id = "showing"
      } else if(targetActor.className === 'btn-b') {
        targetActor.id ="pick-actor"
        const box = document.querySelector('.actor-b')
        box.id = "showing"
      } else if(targetActor.className === 'btn-c') {
        targetActor.id = "pick-actor"
        const box = document.querySelector('.actor-c')
        box.id = "showing"
      } else if(targetActor.className === 'btn-d') {
        targetActor.id = "pick-actor"
        const box = document.querySelector('.actor-d')
        box.id = "showing"
      }
    }
  }
}
</script>

<style>
.today-actor-item {
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
}

.today-actor-item .btn-actor-list {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  margin-bottom: 5rem;
}

.today-actor-item .btn-actor-list::after {
  content: "";
  width: 1px;
  height: 50%;
  position: absolute;
  top: 10;
  right: 0;
  background-color: var(--color-pink);

}

.today-actor-item .btn-actor-list button {
  width: 200px;
  background-color: rgba( 255, 255, 255, 0 );
  border: none;
  color: white;
  font-size: 24px;
}

.today-actor-item .tbox {
  display: none;
  margin-left: 5rem;
}

.today-actor-item #actor-item-box{
  display: flex;
}

.today-actor-item #actor-item-box .actor-info .btn-follow {
  border: none;
  background-color: var(--color-pink);
  color: white;
  border-radius: 10px;
  padding: 10px 12px;
  font-weight: bold;
}
.today-actor-item #actor-item-box .actor-info {
  display: flex;
}
.today-actor-item #actor-item-box .actor-info img {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin-right: 5rem;
}

.today-actor-item #actor-item-box .actor-intro {
  display: flex;
  margin: 2rem 0;
}
.today-actor-item #actor-item-box .actor-intro h5 {
  color: var(--color-pink);
}
.today-actor-item #actor-item-box .actor-filmo {
  display: flex;
}

.today-actor-item #actor-item-box .actor-filmo h5 {
  color: var(--color-pink);
}
.today-actor-item #actor-item-box .filmo-poster {
  margin-left: 3rem;
  border-radius: 10px;
  width: 30%;
  height: 100%;
}
#showing {
  display: block
}
</style>