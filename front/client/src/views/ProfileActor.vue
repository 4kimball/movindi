<template>
  <div class="profile-actors">
    <div class="row">
      <div v-for="(actor, index) in user.like_actors" :key="index" class="col-3 profile-actors-item">
        <img :src=actors[actor-1].profile_image :alt=actors[actor-1].name>
        <h4>{{ actors[actor-1].name }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'ProfileActor',
  computed: {
    ...mapState([
      'user',
      'actors'
    ])
  }
}
</script>

<style>
.profile-actors .profile-actors-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}
.profile-actors img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
}

.profile-actors h4 {
  color: var(--color-pink);
}
</style>