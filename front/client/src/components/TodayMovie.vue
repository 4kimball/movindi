<template>
  <div id="today-movie">
    <div class="gradient-top"></div>
    <div class="gradient-bottom d-flex justify-content-center">
      <div class="slide-nav d-flex justify-content-center">
        <div 
        @click="changeSlide(0)"
        class="d-flex flex-column btn2slide d-flex flex-column align-items-center btn"
        :class="{'clicked-slide-nav': is0}">
          <span>오늘의 영화</span>
          <div class="mt-2 btn-bar"></div>
        </div>
        <div 
        @click="changeSlide(1)"
        class="d-flex flex-column btn2slide d-flex flex-column align-items-center btn"
        :class="{'clicked-slide-nav': is1}">
          <span>개봉 예정 영화</span>
          <div class="mt-2 btn-bar"></div>
        </div>
        <div 
        @click="changeSlide(2)"
        class="d-flex flex-column btn2slide d-flex flex-column align-items-center btn"
        :class="{'clicked-slide-nav': is2}">
          <span>서울 독립영화제 장편대상</span>
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
              <p class="f-999999 fs-today lighter">Aloners  |  2021.05.19  |  드라마  |  90분 35초  |  12세이상 관람가</p>
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
            <img class="today-movie-poster" src="@/assets/today-movie/today-movie-poster4.jpg" alt="">
          </div>
          <div class="col-7 d-flex justify-content-start align-items-center col7-box">
            <div class="about-movie d-flex flex-column justify-content-center mx-5">
              <span class="fs-today f-999999 my-0">개봉 예정 영화</span>
              <span class="fs-title f-white boldest my-0">낫아웃</span>
              <p class="f-999999 fs-today lighter">Not Out  |  2021.06.03  |  드라마  |  107분 51초  |  15세이상 관람가</p>
              <div class="fs-contents f-dbdbdb contents my-3">
                <strong>“내 꿈은 얼마예요?”</strong><br>
                기적이 일어났고, 끝까지 가고 싶었다.<br>
                특별할 것 없던 열아홉 고교 야구 입시생 ‘광호’는
                봉황대기 결승전 결승타의 주인공이 된다,
                잘 될 것 같았던 신인 드래프트에서 탈락한 ‘광호’.<br><br>

                야구를 계속하기 위해서는 돈이 필요하다고 생각한 ‘광호’는
                친구에게 불법 휘발유를 파는 일을 소개받아 악착같이 돈을 모으기 시작한다.<br><br>

                하지만 뭐하나 뜻대로 되지 않자,
                결국 ‘광호’는 친구에게 위험한 제안을 하는데….
              </div>
              <div class="actors d-flex justify-content-between mt-5">
                <div class="actor1 m-2 d-flex flex-column align-items-center">
                  <img class="actors-img" src="@/assets/today-movie/2-lead1.jpg" alt="">
                  <span class="p-1 mt-3 bg-pink text-center fs-contents boldest col-6">정재광</span>
                </div>
                <div class="actor2 m-2 d-flex flex-column align-items-center">
                  <img class="actors-img" src="@/assets/today-movie/2-lead2.jpg" alt="">
                  <span class="p-1 mt-3 bg-pink text-center fs-contents boldest col-6">이규성</span>
                </div>
                <div class="actor3 m-2 d-flex flex-column align-items-center">
                  <img class="actors-img" src="@/assets/today-movie/2-sub1.jpg" alt="">
                  <span class="p-1 mt-3 bg-pink text-center fs-contents boldest col-6">송이재</span>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="current===2" :key="current" class="slide container-fluid p-0" :class="slides[current].className">
        <div class="row">
          <div class="col-5 d-flex P-0">
            <img class="today-movie-poster" src="@/assets/today-movie/today-movie-poster5.jpg" alt="" id="award">
          </div>
          <div class="col-7 d-flex justify-content-start align-items-center col7-box">
            <div class="about-movie d-flex flex-column justify-content-center mx-5">
              <span class="fs-today f-999999 my-0">2020 서울 독립영화제 장편대상 작품</span>
              <span class="fs-title f-white boldest my-0">휴가</span>
              <p class="f-999999 fs-today lighter">A Leave  |  2021.10  |  드라마  |  81분 09초  |  12세이상 관람가</p>
              <div class="fs-contents f-dbdbdb contents my-3">
                <strong>'어느 해고노동자의 짧은 휴가’</strong> <br>
                해고노동자 재복은 5년째 집을 떠나 농성 중이다. <br>
                노조가 정리해고무효소송에서 최종 패소하자 <br>
                그러던 어느 날, 출퇴근길에 맨날 말을 걸던 옆집 남자가 <br>
                재복과 동료들은 열흘 간의 휴가를 갖기로 한다. <br>
              </div>
              <div class="actors d-flex justify-content-between mt-5">
                <div class="actor1 m-2 d-flex flex-column align-items-center">
                  <img class="actors-img" src="@/assets/today-movie/3-lead1.jpg" alt="">
                  <span class="p-1 mt-3 bg-pink text-center fs-contents boldest col-6">이봉하</span>
                </div>
                <div class="actor2 m-2 d-flex flex-column align-items-center">
                  <img class="actors-img" src="@/assets/today-movie/3-lead2.jpg" alt="">
                  <span class="p-1 mt-3 bg-pink text-center fs-contents boldest col-6">김아석</span>
                </div>
                <div class="actor3 m-2 d-flex flex-column align-items-center">
                  <img class="actors-img" src="@/assets/today-movie/3-sub1.jpg" alt="">
                  <span class="p-1 mt-3 bg-pink text-center fs-contents boldest col-6">김정연</span>
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
#today-movie #award {
  max-width: 800px; 
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
  color: var(--color-pink);
}

</style>