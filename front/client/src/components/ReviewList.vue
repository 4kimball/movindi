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
        @click="clickArticle(review)"
      >
        <td>{{ review.title }}</td>
        <td>{{ review.content }}</td>
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
      'clickArticle'
    ])
  }
}
</script>

<style>

</style>