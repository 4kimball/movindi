<template>
  <div id="today-movie">
    <div class="gradient-top"></div>
    <div class="gradient-bottom d-flex justify-content-center">
      <div class="slide-nav d-flex justify-content-center">
        <div 
        @click="changeSlide(0)"
        class="d-flex flex-column btn2slide d-flex flex-column align-items-center btn"
        :class="{'clicked-slide-nav': is0}">
          <span>혼자 사는 사람들</span>
          <div class="mt-2 btn-bar"></div>
        </div>
        <div 
        @click="changeSlide(1)"
        class="d-flex flex-column btn2slide d-flex flex-column align-items-center btn"
        :class="{'clicked-slide-nav': is1}">
          <span>내겐 너무 소중한 너</span>
          <div class="mt-2 btn-bar"></div>
        </div>
        <div 
        @click="changeSlide(2)"
        class="d-flex flex-column btn2slide d-flex flex-column align-items-center btn"
        :class="{'clicked-slide-nav': is2}">
          <span>혼자 사는 사람들</span>
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
            <img class="today-movie-poster" src="@/assets/today-movie/today-movie-poster2.jpg" alt="">
          </div>
          <div class="col-7 d-flex justify-content-start align-items-center col7-box">
            <div class="about-movie d-flex flex-column justify-content-center mx-5">
              <span class="fs-today f-999999 my-0">오늘의 영화</span>
              <span class="fs-title f-white boldest my-0">내겐 너무 소중한 너</span>
              <p class="f-999999 fs-today lighter">My lovely angel  |  2021  |  극영화  |  100분 51초  |  12세이상 관람가  |  컬러</p>
              <div class="fs-contents f-dbdbdb contents my-3">
                가짜라도! 아빠가 되어야 한다!<br><br>

                돈만 빼고 세상 무서울 게 없다고 호언장담하던 ‘재식’은
                갑자기 세상을 떠난 ‘지영’의 전재산을 먹튀하기 위해
                ‘지영’의 딸 ‘은혜’의 가짜 아빠를 자처하게 된다.<br><br>

                알고 보니 ‘은혜’는 시각과 청각 장애를 모두 가진 아이.
                보지도, 듣지도 못하는 ‘은혜’를 귀찮아 하던 ‘재식’은
                손끝으로 세상을 느끼는 ‘은혜’만의 특별한 방식에
                조금씩 익숙해지기 시작하는데…<br><br>

                올 봄, 가장 특별한 만남이 이뤄진다!
              </div>
              <div class="actors d-flex justify-content-between mt-5">
                <div class="actor1 m-2 d-flex flex-column align-items-center">
                  <img class="actors-img" src="@/assets/today-movie/2-lead1.jpg" alt="">
                  <span class="p-1 mt-3 bg-pink text-center fs-contents boldest col-6">진구</span>
                </div>
                <div class="actor2 m-2 d-flex flex-column align-items-center">
                  <img class="actors-img" src="@/assets/today-movie/2-lead2.jpg" alt="">
                  <span class="p-1 mt-3 bg-pink text-center fs-contents boldest col-6">정서연</span>
                </div>
                <div class="actor3 m-2 d-flex flex-column align-items-center">
                  <img class="actors-img" src="@/assets/today-movie/2-sub1.jpg" alt="">
                  <span class="p-1 mt-3 bg-pink text-center fs-contents boldest col-6">강신일</span>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="current===2" :key="current" class="slide container-fluid p-0" :class="slides[current].className">
        <div class="row">
          <div class="col-5 d-flex P-0">
            <img class="today-movie-poster" src="@/assets/today-movie/today-movie-poster3.jpg" alt="">
          </div>
          <div class="col-7 d-flex justify-content-start align-items-center col7-box">
            <div class="about-movie d-flex flex-column justify-content-center mx-5">
              <span class="fs-today f-999999 my-0">오늘의 영화</span>
              <span class="fs-title f-white boldest my-0">네가 내가 되었으면 좋겠다</span>
              <p class="f-999999 fs-today lighter">I wish you were me  |  2020  |  극영화  |  66분 7초  |  12세이상 관람가  |  컬러</p>
              <div class="fs-contents f-dbdbdb contents my-3">
                이건.. 너랑 나 사이에 비밀이다!<br><br>

                수진을 짝사랑해 왔던 충길은 주변 친구들에게 고백을 하고<br>
                친구들을 동원해 철저하게 계획된 고백 작전을 펼친다.<br>
                엉뚱하지만 기발한, 치밀하지만 귀여운 충길의 고백 작전은 계획한대로 순조롭게<br>
                이루어지는 듯 하지만 예상치 못한 복병을 맞이하게 된다.<br>
                과연 충길의 고백은 성공할 수 있을까?<br>
              </div>
              <div class="actors d-flex justify-content-between mt-5">
                <div class="actor1 m-2 d-flex flex-column align-items-center">
                  <img class="actors-img" src="@/assets/today-movie/3-lead1.jpg" alt="">
                  <span class="p-1 mt-3 bg-pink text-center fs-contents boldest col-6">공승연</span>
                </div>
                <div class="actor2 m-2 d-flex flex-column align-items-center">
                  <img class="actors-img" src="@/assets/today-movie/3-lead2.jpg" alt="">
                  <span class="p-1 mt-3 bg-pink text-center fs-contents boldest col-6">정다은</span>
                </div>
                <div class="actor3 m-2 d-flex flex-column align-items-center">
                  <img class="actors-img" src="@/assets/today-movie/3-sub1.jpg" alt="">
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
      is0: true,
      is1: false,
      is2: false,
      current: 0,
      direction: 1,
      transitionName: "fade",
      show: false,
      slides: [
        { className: "today-movie1" },
        { className: "today-movie2" },
        { className: "today-movie3" }
      ]
    }
  },
  methods: {
    changeSlide(slideNum) {
      if (this.current === 0 && slideNum == 1) {
        this.slide(1)
        this.is0 = false
        this.is1 = true
        this.is2 = false
      } else if (this.current === 0 && slideNum == 2) {
        this.slide(-1)
        this.is0 = false
        this.is1 = false
        this.is2 = true
      } else if (this.current === 1 && slideNum == 2) {
        this.slide(1)
        this.is0 = false
        this.is1 = false
        this.is2 = true
      } else if (this.current === 1 && slideNum == 0) {
        this.slide(-1)
        this.is0 = true
        this.is1 = false
        this.is2 = false
      } else if (this.current === 2 && slideNum == 0) {
        this.slide(1)
        this.is0 = true
        this.is1 = false
        this.is2 = false
      } else if (this.current === 2 && slideNum == 1) {
        this.slide(-1)
        this.is0 = false
        this.is1 = true
        this.is2 = false
      }
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
#today-movie .fade-enter-active {
  transition: opacity 1s;
}
#today-movie .fade-enter {
  opacity: 0;
}

.today-movie .btn2slide:hover {
  cursor: pointer;
}

/* GO TO NEXT SLIDE */
#today-movie .slide-next-enter-active,
#today-movie .slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}
#today-movie .slide-next-enter {
  transform: translate(100%);
}
#today-movie .slide-next-leave-to {
  transform: translate(-100%);
}

/* GO TO PREVIOUS SLIDE */
#today-movie .slide-prev-enter-active,
#today-movie .slide-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}
#today-movie .slide-prev-enter {
  transform: translate(-100%);
}
#today-movie .slide-prev-leave-to {
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
#today-movie .clicked-slide-nav span {
  color: white;
  font-weight: 800;
}

#today-movie .clicked-slide-nav .btn-bar {
  background-color: white;
}


/* .red {
  background: #e55039;
}

.yellow {
  background: #f6b93b;
} */

/* SLIDER STYLES */
#today-movie {
  overflow: hidden;
  margin: 0;
  font-size: 50px;
  font-family: "Crimson Text", sans-serif;
  color: #fff;
  width: 100%;
  height: 100vh;
  position: relative;
}


/* .sliders-group {
  width: 100%;
  height: 100%;
} */

#today-movie .slide {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  /* display: flex; */
  align-items: center;
  justify-content: center;
}

/* .btn {
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
} */

#today-movie .btn:hover {
  transform: scale(1.1);
}

/* 슬라이드 네비 */
#today-movie .slide-nav {
  position: absolute;
  bottom: 0;
  z-index: 10;
  font-size: 2vh;
  margin-bottom: 3.5vh;
}

#today-movie .btn2slide {
  width:24vw;
  margin: 1vh;
  color: #666666;
  font-size: 2vh;
}

#today-movie .btn-bar {
  background-color: #555555;
  width: 100%;
  height: 0.5vh;
}

/* 슬라이더 안 구조*/
/* .contents {
  width: 55%;
} */
#today-movie .today-movie-poster {
  height: 100vh;
  width: 100vw;
}

#today-movie .col7-box {
  padding-left: 8vw;
}

#today-movie .about-movie {
  width: 63%;
}

#today-movie .actors-img {
 border-radius: 50%;
 width: 15vh;
 height: 15vh;
}

#today-movie .gradient-top {
  background: linear-gradient(black, rgba(0, 0, 0, 0));
  width: 100%;
  height: 25vh;
  z-index: 2;
  position: absolute;
}
#today-movie .gradient-bottom {
  background: linear-gradient(rgba(0, 0, 0, 0), black);
  width: 100%;
  height: 25vh;
  z-index: 2;
  position: absolute;
  bottom: 0;
}

/* font color, size, bold etc */
#today-movie .fs-today {
  font-size: 1.5vh;
}

#today-movie .fs-title {
  font-size: 4vh;
}

#today-movie .fs-contents {
  font-size: 1.8vh;
}

#today-movie .f-999999 {
  color: #999999;
}

#today-movie .f-dbdbdb {
  color: #dbdbdb;
}

#today-movie .f-white {
  color: white;
}

#today-movie .boldest {
  font-weight: 900;
}

#today-movie .bg-pink {
  background-color: #ff1a75;
}

</style>