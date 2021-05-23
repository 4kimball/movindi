<template>
  <div class="actors">
    <div class="container">
      <div class="row">
        <div class="col-5"  v-for="actor in actors" :key="actor.id" id="actor-box">
          <img :src=actor.profile_image :alt=actor.name class="profile-image">
          <div>
            <div class="name-box">
              <h3>{{ actor.name }}</h3>
              <div class="actor-like" @click="like_actor(actor)">
                <span v-if="isLiked(actor)">
                  <i class="fas fa-heart"></i>
                </span>
                <span v-else>
                  <i class="far fa-heart"></i>
                </span>
              </div>
            </div>
            <p>{{ actor.date_of_birth }}</p>
            <p>{{ actor.intro }}</p>
            <p>작품활동</p>
            <p>{{ actor.filmography }}</p>
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
  border: 5px solid var(--color-pink);
  border-radius: 5px;
  color : black;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  align-items: center;

  background-color: #e6e6e6;
}

.profile-image {
  width: 120px;
  height: 200px;
  margin-right: 1rem;
  border-radius: 50%;
}

.name-box {
  display: flex;
  justify-content: space-between;
}

.name-box .actor-like span i{
  color: var(---color-pink);
}
</style>