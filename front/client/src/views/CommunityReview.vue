<template>
  <div>
    <h2>리뷰게시판</h2>
    <ul>
      <li v-for="review in reviews" :key="review.id">
        <span
          class=""
        >{{ review.user }} : {{ review.title }}</span>
      </li>
    </ul>

    <ReviewList />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ReviewList from '@/components/ReviewList'
export default {
  name: 'CommunityReview',
  components: {
    ReviewList
  },
  computed: {
    ...mapState([
      'reviews'
    ])
  }
}
</script>

<style>

</style>