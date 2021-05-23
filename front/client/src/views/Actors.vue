<template>
  <div class="actors">
    <div class="container mt-5">
      <div class="row">
        <div class="col-10 col-md-5"  v-for="actor in actors" :key="actor.id" id="actor-box">
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
import { mapGetters } from 'vuex'
export default {
  name: 'Actors',
  created() {
    this.$store.dispatch('getActors')
  },
  computed: {
    actors() {
      return this.$store.state.actors
    },
    ...mapGetters([
      'isLoggedIn'
    ])
  },
  methods: {
    like_actor(actor) {
      this.$store.dispatch('like_actor', actor)
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
    }
  }
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