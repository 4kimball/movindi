<template>
  <div id="intro">

  <div class="sections-menu">
    <span
        class="menu-point"
        v-bind:class="{active: activeSection == index}"
        v-on:click="scrollToSection(index)"
        v-for="(offset, index) in offsets"
        v-bind:key="index">
    </span>
  </div>
  <section class="fullpage">
    <div class="what d-flex m-4">
      <div class="fs-2 boldest me-5">독립영화란</div>
      <div class="f-bdbdbd">
        <div class="fs-4 lightest">상업적으로 성공하기 위한 틀 안에 있는 것이 아닌</div>
        <div class="fs-4 lightest"><span class="f-pink">시대를 대변</span>하고 <span class="f-pink">자신의 주관</span>을 보여주는 장르</div>
      </div>
    </div>
    <div class="conversation m-4">
      <div class="conversaion1 flex">
        <img src="@/assets/justin.png" alt="남자어린아이 얼굴">
        <img src="@/assets/conversation1.png" alt="다양한주제를 얘기할 수 있다.">
      </div>
      <div class="conversaion2 flex">
        <img src="@/assets/helen.png" alt="다른인종 여성 얼굴">
        <img src="@/assets/conversation2.png" alt="소수자를 돌아보는 날카로운 문제의식.">
      </div>
      <div class="conversaion3 flex">
        <img src="@/assets/rosa.png" alt="할머니 얼굴">
        <img src="@/assets/conversation3.png" alt="실험적인 표현으로 영화를 발전.">
      </div>
    </div>
    <div>
      <div class="eeeeeebg px-3 py-1 m-4">
        <div class="fs-1 boldest f-black"><span class="f-pink">독립영화</span>, 사회와 문화의 <span class="f-pink">다양성</span>을 키우다.</div>
      </div>
    </div>
  </section>
  <section class="fullpage pink">
    <div class="tri"></div>
    <div class="words">
      <p class="f-pink">독립영화는</p>
      <p>자유롭고</p>
      <p>실험적이고</p>
      <p>과감하고</p>
      <p>강렬하고</p>
    </div>
    <div class="movindi mt-5">
      <!-- <p class="f30">무빈디</p> -->
      <p class="f40 mt-5">무비+인디</p>
      <p class="fb60">MOV+INDI</p>
      <p class="f50">독립영화와 꿈꾸는 배우들</p>
      <p class="f50">그리고 응원해주는 관객</p>
    </div>
    <!-- <div class="tri"></div> -->
  </section>
  <section class="fullpage pink">
    <div class="tri-reverse"></div>
    <div class="please">
      <img src="@/assets/cartoon1.png" alt="독립영화를 알릴 기회가 필요하 다는 만화">
      <div class="fs-4 my-5">
        <p>독립영화를 계속 알릴 수 있도록</p>
        <p>영화 배우들을 응원해주고</p>
        <p>후기를 남겨주세요.</p>
        <p class="fs-2 boldest f-black mt-5">무빈디_MOVINDI</p>
      </div>
    </div>
    <div class="but">
      <div class="fs-1 f-pink boldest">하지만</div>
      <div class="fs-2">배우들의 생활고</div>
      <div class="fs-2">늘어나는 멀티플랙스 영화관</div>
      <div class="fs-2">코로나로 인한 투자 및 상영의 어려움</div>
    </div>
  </section>
  <section class="fullpage">
      <img class="my-5" src="@/assets/cartoon2.png" alt="독립영화 상영관이 적다는 만화">
      <div class="eeeeeebg px-3 py-1 m-4">
        <div class="fs-1 boldest f-black">점점 설 곳이 없어지는 <span class="f-pink">독립영화를 지켜주세요.</span></div>
      </div>
      <img class="my-5" src="@/assets/articles.png" alt="독립영화의 어려움에 관한 기사 캡쳐">
  </section>
  </div>

</template>

<script>
export default {
  name: 'Intro',
  data() {
    return {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
    }
  },
  methods: {
    calculateSectionOffsets() {
      let sections = document.getElementsByTagName('section');
      let length = sections.length;
      
      for(let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
      }
    },
    handleMouseWheel: function(e) {
      
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }
        
      e.preventDefault();
      return false;
    },
    handleMouseWheelDOM: function(e) {
      
      if (e.detail > 0 && !this.inMove) {
        this.moveUp();
      } else if (e.detail < 0 && !this.inMove) {
        this.moveDown();
      }
      
      return false;
    },
    moveDown() {
      this.inMove = true;
      this.activeSection--;
        
      if(this.activeSection < 0) this.activeSection = this.offsets.length - 1;
        
      this.scrollToSection(this.activeSection, true);
    },
    moveUp() {
      this.inMove = true;
      this.activeSection++;
        
      if(this.activeSection > this.offsets.length - 1) this.activeSection = 0;
        
      this.scrollToSection(this.activeSection, true);
    },
    scrollToSection(id, force = false) {
      if(this.inMove && !force) return false;
      
      this.activeSection = id;
      this.inMove = true;
      
      document.getElementsByTagName('section')[id].scrollIntoView({behavior: 'smooth'});
      
      setTimeout(() => {
        this.inMove = false;
      }, 400);
      
    },
    touchStart(e) {
      e.preventDefault();
      
      this.touchStartY = e.touches[0].clientY;
    },
    touchMove(e) {
      if(this.inMove) return false;
      e.preventDefault();
      
      const currentY = e.touches[0].clientY;
      
      if(this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }
      
      this.touchStartY = 0;
      return false;
    }
  },
  created() {
    this.calculateSectionOffsets();
    
    window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM);  // Mozilla Firefox
    window.addEventListener('mousewheel', this.handleMouseWheel, { passive: false }); // Other browsers
    
    window.addEventListener('touchstart', this.touchStart, { passive: false }); // mobile devices
    window.addEventListener('touchmove', this.touchMove, { passive: false }); // mobile devices
  },
  destroyed() {
    window.removeEventListener('mousewheel', this.handleMouseWheel, { passive: false });  // Other browsers
    window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox
    
    window.removeEventListener('touchstart', this.touchStart); // mobile devices
    window.removeEventListener('touchmove', this.touchMove); // mobile devices
  }
}
</script>

<style scoped>
#intro {
  margin: 0;
  color: #FFF;
  font-family: Helvetica, arial, sans-serif;
  overflow: hidden;
}

h2 {
  position: fixed;
}

.fullpage {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1 {
  font-size: 6em;
  margin: 0;
  text-align: center;
  padding: 0 1rem;
}

p {
  font-size: 1em;
}

.fullpage a {
  text-decoration: none;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.3);
  padding: 5px 10px;
  color: #FFF;
  margin-left: 5px;
}

.pink {
  background-color: #ff0066;
}

h1.black {
  color: #000;
}

.sections-menu {
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
}

.sections-menu .menu-point {
  width: 10px;
  height: 10px;
  background-color: #FFF;
  display: block;
  margin: 1rem 0;
  opacity: .6;
  transition: .4s ease all;
  cursor: pointer;
}

.sections-menu .menu-point.active {
  opacity: 1;
  transform: scale(1.5);
}

.tri {
  position: absolute;
  z-index: 1;
  width: 0px;
  height: 0px;
  border-bottom: 100vh solid transparent;
  border-left: 100vh solid black;
}

.words {
  z-index: 2;
  margin-right: 50vh;
}

.movindi {
  margin-left: 50vh;
}

.words p {
  text-align: left;
  font-size: 2.5rem;
  font-weight: 900;
}

.boldest {
  font-weight: 900;
}

.lightest {
  font-weight: 100;
}

.f-pink {
  color: #ff0066;
}

.f-bdbdbd {
  color: #bdbdbd
}

.eeeeeebg {
  background-color: #eeeeee;
}

.f-black {
  color: black
}

.words .f-pink {
  color: #ff0066;
  font-size: 2.5rem;
  font-weight: 700;
}

.movindi p {
  text-align: right;
  margin: 0;
}

.f30 {
  font-size: 1.2rem;
  font-weight: 100;
  line-height: 1;
}

.f40 {
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 1;
  color: rgba(255, 255, 255, 0.7);
}

.fb60 {
  font-size: 4rem;
  font-weight: 900;
  line-height: 1.2;
  color: black;
}

.f50 {
  color: rgba(255, 255, 255, 0.9);
  font-size: 2rem;
  font-weight: 100;
  line-height: 1.3;
}

.please {
  z-index: 2;
  text-align: right;
  margin-left: 50vh;
  line-height: 1;
}

.but {
  z-index: 2;
  line-height: 1.9;
  margin-right: 35vh;
}

.tri-reverse {
  position: absolute;
  z-index: 1;
  width: 0px;
  height: 0px;
  border-top: 100vh solid transparent;
  border-left: 100vh solid black;
}

@media screen and (max-width: 1200px) {
  h1 {
    font-size: 2.5em;
  }
}
</style>