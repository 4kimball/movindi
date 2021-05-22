<template>
  <div class="actors">
    <div class="container">
      <div class="row">
        <div class="col-5"  v-for="actor in actors" :key="actor.id" id="actor-box">
          <img :src=actor.profile_image :alt=actor.name class="profile-image">
          <div>
            <h3>{{ actor.name }}</h3>
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
export default {
  name: 'Actors',
  created() {
    this.$store.dispatch('getActors')
  },
  computed: {
    actors() {
      return this.$store.state.actors
    }
  }
}
</script>

<style>
#actor-box {
  border: 1px solid var(--color-pink);
  border-radius: 5px;
  color : white;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  align-items: center;
}

.profile-image {
  width: 120px;
  height: 200px;
  margin-right: 1rem;
}
</style>