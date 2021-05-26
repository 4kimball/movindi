<template>
  <div class="profile-actors">
    <div class="row">
      <div v-for="(actor, index) in user.like_actors" :key="index" class="col-3">
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

</style>