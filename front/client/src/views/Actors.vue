<template>
  <div class="actors" >
    <div class="container mt-5">
      <div class="row">
        <div class="col-10 col-md-5"  v-for="actor in scrollActors" :key="actor.id" id="actor-box">
          <div id="actor-like" @click="like_actor(actor)">
                <span v-if="isLiked(actor)">
                  <i class="fas fa-heart"></i>
                </span>
                <span v-else>
                  <i class="far fa-heart"></i>
                </span>
              </div>
          <img :src=actor.profile_image :alt=actor.name class="profile-image">
          <div class="actor-info">
            <div class="name-box">
              <h3>{{ actor.name }}</h3>
            </div>
            <p>{{ actor.date_of_birth }}</p>
            <p>{{ actor.intro }}</p>
            <p><strong>작품활동</strong> : {{ actor.filmography }}</p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
//import router from '../router'
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'Actors',
  data() {
    return {
      handleActors: []
    }
  },
  created() {
   // this.$store.dispatch('updateUser')
    window.addEventListener('scroll', this.handleScroll)
  },
  computed: {
    ...mapGetters([
      'isLoggedIn'
    ]),
    ...mapState([
      'actors',
      'scrollActors',
    ])
  },
  methods: {
    like_actor(actor) {
      const params = {
        actor: actor,
        page: this.page
      }
      this.$store.dispatch('like_actor', params)
    },
    isLiked(actor) {
      
      if(!this.isLoggedIn){
        return false
      } 
      if(actor.like_users.includes(this.$store.state.user.pk)){
        return true
      } else {
        return false
      }
    },
    handleScroll() {
      let windowHeight = window.innerHeight
      let scrollY = window.scrollY
      let bodyHeight = document.body.offsetHeight
      let page = Math.round(this.scrollActors.length / 6) + 1
      if(scrollY + windowHeight >= bodyHeight && page*6 <= 12){
       this.$store.dispatch('getScrollActors', page)
       
      }
      
    }
  },
}
</script>

<style>
#actor-box {
  border-radius: 5px;
  color : black;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #e6e6e6;
  width: 400px;
}

.profile-image {
  width: 150px;
  height: 200px;
  margin-right: 1rem;
  border-radius: 50%;
  margin-bottom: 2rem;
}

.name-box {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

#actor-like {
  font-size: 24px;
  color: var(--color-pink);  
  width: 100%;
  text-align: end;
}
</style>