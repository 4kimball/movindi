<template>
  <div id="today-movie">
    <div class="gradient-top"></div>
    <div class="gradient-bottom d-flex justify-content-center">
      <div class="slide-nav d-flex justify-content-center">
        <div 
        @click="changeSlide(0)"
        class="d-flex flex-column btn2slide d-flex flex-column align-items-center" id="active-slide">
          <span class="slide-name">혼자 사는 사람들</span>
          <div class="mt-2 btn-bar"></div>
        </div>
        <div 
        @click="changeSlide(1)"
        class="d-flex flex-column btn2slide d-flex flex-column align-items-center">
          <span class="slide-name">혼자 사는 사람들</span>
          <div class="mt-2 btn-bar"></div>
        </div>
        <div 
        @click="changeSlide(2)"
        class="d-flex flex-column btn2slide d-flex flex-column align-items-center">
          <span class="slide-name">혼자 사는 사람들</span>
          <div class="mt-2 btn-bar"></div>
        </div>
      </div>
    </div>
    <transition-group tag="div" 
    :name="transitionName" 
    class="slides-group">
      <div v-if="current===0" :key="current" class="slide container-fluid p-0" :class="slides[current].className">
        <div class="row">
          <div class="col-5 d-flex P-0">
            <img class="today-movie-poster" src="@/assets/today-movie/today-movie-poster.jpg" alt="">
          </div>
          <div class="col-7 d-flex justify-content-start align-items-center col7-box">
            <div class="about-movie d-flex flex-column justify-content-center mx-5">
              <span class="fs-today f-999999 my-0">오늘의 영화</span>
              <span class="fs-title f-white boldest my-0">혼자 사는 사람들</span>
              <p class="f-999999 fs-today lighter">Aloners  |  2021  |  극영화  |  90분 35초  |  12세이상 관람가  |  컬러</p>
              <div class="fs-contents f-dbdbdb contents my-3">
                집에서도 밖에서도 늘 혼자가 편한 진아. <br>
                사람들은 자꾸 말을 걸어오지만, 진아는 그저 불편하다. <br>
                회사에서 신입사원의 1:1 교육까지 떠맡자 괴로워 죽을 지경. <br>
                그러던 어느 날, 출퇴근길에 맨날 말을 걸던 옆집 남자가 <br>
                아무도 모르게 혼자 죽었다는 걸 알게 된다. <br>
                그 죽음 이후, 진아의 고요한 일상에 작은 파문이 이는데… <br>

                저마다 1인분의 외로움을 간직한, 우리들 이야기
              </div>
              <div class="actors d-flex justify-content-between mt-5">
                <div class="actor1 m-2 d-flex flex-column align-items-center">
                  <img class="actors-img" src="@/assets/today-movie/lead1.jpg" alt="">
                  <span class="p-1 mt-3 bg-pink text-center fs-contents boldest col-6">공승연</span>
                </div>
                <div class="actor2 m-2 d-flex flex-column align-items-center">
                  <img class="actors-img" src="@/assets/today-movie/lead2.jpg" alt="">
                  <span class="p-1 mt-3 bg-pink text-center fs-contents boldest col-6">정다은</span>
                </div>
                <div class="actor3 m-2 d-flex flex-column align-items-center">
                  <img class="actors-img" src="@/assets/today-movie/sub1.jpg" alt="">
                  <span class="p-1 mt-3 bg-pink text-center fs-contents boldest col-6">서현우</span>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="current===1" :key="current" class="slide container-fluid p-0" :class="slides[current].className">
        <div class="row">
          <div class="col-5 d-flex P-0">
            <img class="today-movie-poster" :src=movies[26].poster_path :alt=movies[26].title>
          </div>
          <div class="col-7 d-flex justify-content-start align-items-center col7-box">
            <div class="about-movie d-flex flex-column justify-content-center mx-5">
              <span class="fs-today f-999999 my-0">제 46회 서울 독립영화제 장편 대상</span>
              <span class="fs-title f-white boldest my-0">휴가</span>
              <p class="f-999999 fs-today lighter">드라마  |  2021.10  |  81분  |  12세이상 관람가</p>
              <div class="fs-contents f-dbdbdb contents my-3">
                '어느 해고노동자의 짧은 휴가’<br>
                해고노동자 재복은 5년째 집을 떠나 농성 중이다.<br>
                노조가 정리해고무효소송에서 최종 패소하자<br>
                그러던 어느 날, 출퇴근길에 맨날 말을 걸던 옆집 남자가 <br>
                재복과 동료들은 열흘 간의 휴가를 갖기로 한다.<br>
              </div>
              <div class="actors d-flex justify-content-between mt-5">
                <div class="actor1 m-2 d-flex flex-column align-items-center">
                  <img class="actors-img" src="@/assets/today-movie/lead1.jpg" alt="">
                  <span class="p-1 mt-3 bg-pink text-center fs-contents boldest col-6">이봉하</span>
                </div>
                <div class="actor2 m-2 d-flex flex-column align-items-center">
                  <img class="actors-img" src="@/assets/today-movie/lead2.jpg" alt="">
                  <span class="p-1 mt-3 bg-pink text-center fs-contents boldest col-6">김아석</span>
                </div>
                <div class="actor3 m-2 d-flex flex-column align-items-center">
                  <img class="actors-img" src="@/assets/today-movie/sub1.jpg" alt="">
                  <span class="p-1 mt-3 bg-pink text-center fs-contents boldest col-6">김정연</span>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="current===2" :key="current" class="slide container-fluid p-0" :class="slides[current].className">
        <div class="row">
          <div class="col-5 d-flex P-0">
            <img class="today-movie-poster" src="@/assets/today-movie/today-movie-poster.jpg" alt="">
          </div>
          <div class="col-7 d-flex justify-content-start align-items-center col7-box">
            <div class="about-movie d-flex flex-column justify-content-center mx-5">
              <span class="fs-today f-999999 my-0">오늘의 영화</span>
              <span class="fs-title f-white boldest my-0">혼자 사는 사람들</span>
              <p class="f-999999 fs-today lighter">Aloners  |  2021  |  극영화  |  90분 35초  |  12세이상 관람가  |  컬러</p>
              <div class="fs-contents f-dbdbdb contents my-3">
                집에서도 밖에서도 늘 혼자가 편한 진아. <br>
                사람들은 자꾸 말을 걸어오지만, 진아는 그저 불편하다. <br>
                회사에서 신입사원의 1:1 교육까지 떠맡자 괴로워 죽을 지경. <br>
                그러던 어느 날, 출퇴근길에 맨날 말을 걸던 옆집 남자가 <br>
                아무도 모르게 혼자 죽었다는 걸 알게 된다. <br>
                그 죽음 이후, 진아의 고요한 일상에 작은 파문이 이는데… <br>

                저마다 1인분의 외로움을 간직한, 우리들 이야기
              </div>
              <div class="actors d-flex justify-content-between mt-5">
                <div class="actor1 m-2 d-flex flex-column align-items-center">
                  <img class="actors-img" src="@/assets/today-movie/lead1.jpg" alt="">
                  <span class="p-1 mt-3 bg-pink text-center fs-contents boldest col-6">공승연</span>
                </div>
                <div class="actor2 m-2 d-flex flex-column align-items-center">
                  <img class="actors-img" src="@/assets/today-movie/lead2.jpg" alt="">
                  <span class="p-1 mt-3 bg-pink text-center fs-contents boldest col-6">정다은</span>
                </div>
                <div class="actor3 m-2 d-flex flex-column align-items-center">
                  <img class="actors-img" src="@/assets/today-movie/sub1.jpg" alt="">
                  <span class="p-1 mt-3 bg-pink text-center fs-contents boldest col-6">서현우</span>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>

    </transition-group>
    <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">
      &#10094;
    </div>
    <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
      &#10095;
    </div>


  </div>
</template>

<script>
export default {
  name: 'TodayMovie',
  data() {
    return {
      current: 0,
      direction: 1,
      transitionName: "fade",
      show: false,
      slides: [
        { className: "today-movie1" },
        { className: "red" },
        { className: "yellow" }
      ]
    }
  },
  methods: {
     changeSlide(slideNum) {
      this.current = slideNum;
     },
    slide(dir) {
      this.direction = dir;
      dir === 1
        ? (this.transitionName = "slide-next")
        : (this.transitionName = "slide-prev");
      var len = this.slides.length;
      this.current = (this.current + dir % len + len) % len;
      console.log(this.current)
    }
  },
  mounted() {
    this.show = true;
  },
  computed: {
    movies() {
      return this.$store.state.movies
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Crimson+Text");
/* FADE IN */
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}

.today-movie .btn2slide:hover {
  cursor: pointer;
}

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-next-enter {
  transform: translate(100%);
}
.slide-next-leave-to {
  transform: translate(-100%);
}

/* GO TO PREVIOUS SLIDE */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-prev-enter {
  transform: translate(-100%);
}
.slide-prev-leave-to {
  transform: translate(100%);
}

/* SLIDES CLASSES */
/* 
.today-movie1 {
  background-image: url('../assets/today-movie/today-movie-poster.jpg');
  background-repeat:no-repeat;
  background-position: right top;
  background-size: auto 100%;
} 
*/


.red {
  background: #e55039;
}

.yellow {
  background: #f6b93b;
}

/* SLIDER STYLES */
template {
  overflow: hidden;
  margin: 0;
  font-size: 50px;
  font-family: "Crimson Text", sans-serif;
  color: #fff;
}

#today-movie {
  width: 100%;
  height: 100vh;
  position: relative;
}

/* .sliders-group {
  width: 100%;
  height: 100%;
} */

.slide {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  /* display: flex; */
  align-items: center;
  justify-content: center;
}

.btn {
  z-index: 10;
  cursor: pointer;
  border: 3px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  position: absolute;
  top: calc(50% - 35px);
  left: 1%;
  transition: transform 0.3s ease-in-out;
  user-select: none;
}

.btn-next {
  left: auto;
  right: 1%;
}

.btn:hover {
  transform: scale(1.1);
}

/* 슬라이드 네비 */
.slide-nav {
  position: absolute;
  bottom: 0;
  z-index: 10;
  font-size: 2vh;
  margin-bottom: 3.5vh;
}

.btn2slide {
  width:24vw;
  margin: 1vh;
  color: #666666;
  font-size: 2vh;
}

.btn-bar {
  background-color: #555555;
  width: 100%;
  height: 0.5vh;
}

/* 슬라이더 안 구조*/
/* .contents {
  width: 55%;
} */
.today-movie-poster {
  height: 100vh;
  width: 100vw;
}

.col7-box {
  padding-left: 8vw;
}

.about-movie {
  width: 60%;
}

.actors-img {
 border-radius: 50%;
 width: 15vh;
 height: 15vh;
}

.gradient-top {
  background: linear-gradient(black, rgba(0, 0, 0, 0));
  width: 100%;
  height: 25vh;
  z-index: 2;
  position: absolute;
}
.gradient-bottom {
  background: linear-gradient(rgba(0, 0, 0, 0), black);
  width: 100%;
  height: 25vh;
  z-index: 2;
  position: absolute;
  bottom: 0;
}

/* font color, size, bold etc */
.fs-today {
  font-size: 1.5vh;
}

.fs-title {
  font-size: 4vh;
}

.fs-contents {
  font-size: 1.8vh;
}

.f-999999 {
  color: #999999;
}

.f-dbdbdb {
  color: #dbdbdb;
}

.f-white {
  color: white;
}

.boldest {
  font-weight: 900;
}

.bg-pink {
  background-color: #ff1a75;
}

</style>