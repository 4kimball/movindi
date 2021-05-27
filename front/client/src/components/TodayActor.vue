<template>
  <div class="today-actor-item container">
      <div class="btn-actor-list" >
        <h3>오늘의 배우</h3>

          <button class="btn-a" @click="changeActor" id="pick-actor">정다은</button>
          <button class="btn-b" @click="changeActor">서현우</button>
          <button class="btn-c" @click="changeActor">이가섭</button>
          <button class="btn-d" @click="changeActor">이종원</button>

      </div>

      <div class="tbox-list">


        <div class="tbox actor-a" id="showing">
          <div id="actor-item-box">
          <div class="actor-info-box">
          <div class="actor-info">
            <img :src=actors[12].profile_image :alt=actors[12].name>
            <div>
              <h3>{{ actors[12].name }}</h3>
              <p>{{ actors[12].date_of_birth }}</p>
              <button class="btn-unfollow" @click="like_actor(12)" v-if="isLiked(12)">이미 응원하고 있어요</button>
              <button class="btn-follow" @click="like_actor(12)" v-else>응원하기</button>
            </div>
          </div>
          <div>
            <div class="actor-intro">
              <h5 class="me-2">소개</h5>
              <p>{{ actors[12].intro }}</p>
            </div>
            <div class="actor-filmo">
              <h5 class="me-3">필모그래피</h5>
              <p>{{ actors[12].filmography }}</p>
            </div>
          </div>
          </div>
          <div class="filmo-poster">
          <img :src=movies[14].poster_path :alt=movies[14].poster_path >
          </div>
          </div>
        </div>


        <div class="tbox actor-b">
          <div id="actor-item-box">
          <div class="actor-info-box">
          <div class="actor-info">
            <img :src=actors[1].profile_image :alt=actors[1].name>
            <div>
              <h3>{{ actors[1].name }}</h3>
              <p>{{ actors[1].date_of_birth }}</p>
              <button class="btn-unfollow" @click="like_actor(1)" v-if="isLiked(1)">이미 응원하고 있어요</button>
              <button class="btn-follow" @click="like_actor(1)" v-else>응원하기</button>
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
          <div class="filmo-poster">
          <img :src=movies[17].poster_path :alt=movies[17].poster_path >
         </div>
          </div>
        </div>


        <div class="tbox actor-c">
          <div id="actor-item-box">
          <div class="actor-info-box">
          <div class="actor-info">
            <img :src=actors[7].profile_image :alt=actors[7].name>
            <div>
              <h3>{{ actors[7].name }}</h3>
              <p>{{ actors[7].date_of_birth }}</p>
              <button class="btn-unfollow" @click="like_actor(7)" v-if="isLiked(7)">이미 응원하고 있어요</button>
              <button class="btn-follow" @click="like_actor(7)" v-else>응원하기</button>
            
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
          <dir class="filmo-poster">
          <img :src=movies[39].poster_path :alt=movies[39].poster_path >
          </dir>
          </div>
        </div>


        <div class="tbox actor-d">
          <div id="actor-item-box">
          <div class="actor-info-box">
          <div class="actor-info">
            <img :src=actors[8].profile_image :alt=actors[8].name>
            <div>
              <h3>{{ actors[8].name }}</h3>
              <p>{{ actors[8].date_of_birth }}</p>         
              <button class="btn-unfollow" @click="like_actor(8)" v-if="isLiked(8)">이미 응원하고 있어요</button>
              <button class="btn-follow" @click="like_actor(8)" v-else>응원하기</button>
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
          <div class="filmo-poster">
          <img :src=movies[39].poster_path :alt=movies[39].poster_path >
          </div>
          </div>
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
    },
    like_actor(idx) {
      this.$store.dispatch('like_actor', this.actors[idx])
    },
    isLiked(idx) {
    const actor = this.actors[idx]
    if(actor.like_users.includes(this.$store.state.user.pk)){
      return true
    } else {
      return false
    }
  }
  },

}
</script>


<style>
.today-actor-item {
  color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.today-actor-item .btn-actor-list {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 50%;
  margin-bottom: 5rem;
  flex: 1 1 20%;
}

.today-actor-item .btn-actor-list::after {
  content: "";
  width: 2px;
  height: 100%;
  position: absolute;
  top: 10;
  right: 0;
  background-color: white;
}

.today-actor-item .btn-actor-list button {
  width: 50%;
  background-color: rgba( 255, 255, 255, 0 );
  border: none;
  color: white;
  font-size: 24px;
}

.today-actor-item .tbox {
  display: none;
  margin-left: 5rem;
  flex: 1 1 80%;
  width: 1000px;
}

.today-actor-item #actor-item-box{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.today-actor-item #actor-item-box .actor-info-box{
  flex: 1 1 70%;
}

.today-actor-item #actor-item-box .filmo-poster {
  flex: 1 1 30%;
}
.today-actor-item #actor-item-box .actor-info .btn-follow {
  border: none;
  background-color: var(--color-pink);
  color: white;
  border-radius: 10px;
  padding: 10px 12px;
  font-weight: bold;
}
.today-actor-item #actor-item-box .actor-info .btn-unfollow {
  border: none;
  background-color: white;
  color: var(--color-pink);
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
  margin: 2rem 0;
}
.today-actor-item #actor-item-box .actor-intro h5 {
  margin-right: 4px;
  color: #ffcc00;
}
.today-actor-item #actor-item-box .actor-filmo {
  display: flex;
}

.today-actor-item #actor-item-box .actor-filmo h5 {
  color: #ffcc00;
}
.today-actor-item #actor-item-box .filmo-poster {
  margin-left: 3rem;
  border-radius: 10px;
  flex: 1 1 10%;
}

.today-actor-item #actor-item-box .filmo-poster img {
  width: 300px;
  height: 500px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px #f2f2f2;
}
#showing {
  display: block
}

#pick-actor {
  color: var(--color-pink);
}

@media screen and (max-width: 1420px) {
  .today-actor-item {
    flex-direction: column;
  }
  .today-actor-item .btn-actor-list h3 {
    width: 100%;
    margin-right: 2rem;
  }
  .today-actor-item .btn-actor-list {
    flex-direction: row;
    justify-content: space-around;
    width: 70%;
  }

  .today-actor-item .btn-actor-list::after{
    display: none;
  }

  .today-actor-item .btn-actor-list::before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: white;
  }
}
</style>