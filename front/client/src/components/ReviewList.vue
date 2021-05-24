<template>
  <div>
    <table>
      <tr>
        <td>글쓴이</td>
        <td>제목</td>
      </tr>
      <tr 
        v-for="review in reviews"
        :key="review.id"
      >
        <td>{{ review.user }}</td>
        <td @click="getOneArticle(review.id)">
          <router-link :to="`/review/${review.id}`">
            {{ review.title}}
          </router-link>
        </td>
      </tr>
    </table>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ReviewList',
  computed: {
    ...mapState([
      'reviews'
    ])
  },
  methods: {
    ...mapActions([
      'getOneArticle'
    ])
  }
}
</script>

<style scoped>
table {
  color: white;
}
</style>