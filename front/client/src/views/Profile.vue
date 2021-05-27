<template>
  <div class="profile mt-5 container">
    <div class="profile-navbar">
      <div class="user-info">
        <div>안녕하세요</div>
        <div class="user-name"><span style="color: var(--color-pink);">{{ user.username }}</span>님!</div>
      </div>
      <div class="navbar-menu">
      <router-link :to="{ name: 'ProfileActor'}" class="rlink like-actor" id="active" ><span class="p-2 " @click="getCurPos">응원하는 배우 | {{ user.like_actors|getSize }}명</span></router-link>
      <router-link :to="{ name: 'ProfileMovie'}" class="rlink like-movie" ><span class="p-2 " @click="getCurPos">좋아하는 영화 | {{ user.like_movies|getSize }}개</span></router-link>
      <router-link :to="{ name: 'ProfileArticle'}" class="rlink my-article" ><span class="p-2" @click="getCurPos">작성한 게시글 | {{ user.review_set|getSize }}개</span></router-link>
      <router-link :to="{ name: 'ProfileScrap'}" class="rlink scrap-article" ><span class="p-2" @click="getCurPos">스크랩한 게시글 | {{ user.scrap_articles|getSize }}개</span></router-link>
      </div>
    </div>
   <div class="profile-item">
     <router-view/>
   </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import router from '../router'
export default {
  name: 'Profile',
  filters: {
    getType(type) {
      if(type === 'review') {
        return '영화리뷰'
      } else if(type === 'casting') {
        return '캐스팅'
      } else if(type === 'free') {
        return '자유게시판'
      }
    },
    getSize(arr) {
      return arr.length
    }
  },
  created() {
    this.$store.dispatch('getByUsername', this.user.username)
    router.push({name: 'ProfileActor'})
    //this.getCurPos()
  },
  computed: {
    ...mapState([
      'movies',
      'articles',
      'actors',
      'user'
    ])
  },
  methods: {
    getMyArticle(articles) {
     
      const review_set = this.user.review_set
      for(let i=0; i<review_set.length; i++) {
        for(let j=0; j<articles.length; j++) {
          if(review_set[i] === articles[j].id) {
            this.myArticles.push(articles[j])
          }
        }
      }
    },
    getMyScrapArticle(articles) {
      const scrap_articles = this.user.scrap_articles
      for(let i=0; i<scrap_articles.length; i++) {
        for(let j=0; j<articles.length; j++) {
          if(scrap_articles[i] === articles[j].id) {
            this.myScrapArticles.push(articles[j])
          }
        }
      }
    },
    handleClick() {
      let curURL = window.location.href.split('/');
      
      const curBtn = document.getElementById("active")
      if(curURL[4] == 'cheer') {
        document.querySelector('.like-actor').id = "active"
      }
      else if(curURL[4] == 'favor' ) {
          document.querySelector('.like-movie').id = "active"
        }
     else if(curURL[4] == 'my') {
        document.querySelector('.my-article').id = "active"
    } else if(curURL[4] == 'scrap') {
          document.querySelector('.scrap-article').id = "active"
        }
      curBtn.id = ""
    },
    getCurPos() {
      window.setTimeout(this.handleClick, 100)
    }
  },

}
</script>

<style>
.profile {
  display: flex;
  height: 1000px;
}

.profile .profile-navbar {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 35%;
  position: relative;
  flex: 1 1 20%;
}
.profile .profile-navbar .user-info {
  margin-bottom: 5rem;
  color: white;
  font-size: 20px;
}

.profile .profile-navbar .user-info .user-name {
  font-size: 32px;
}
.profile .profile-navbar::after {
  position: absolute;
  top: 0;
  right: 0;
  content: "";
  width: 2px;
  height: 100%;
  background-color: white;
}

.profile .profile-navbar .navbar-menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.profile .profile-navbar .navbar-menu .rlink {
  color: #bfbfbf;
  margin-bottom: 2rem;
  margin-right: 2rem;
  font-weight: bold;
}

.profile #active {
  color: white;
}
.profile .profile-item {
  flex: 1 1 80%;
  margin-left: 5rem;
}
</style>