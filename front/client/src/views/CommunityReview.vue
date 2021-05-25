<template>
  <div>
    <ReviewList 
    :articles="articles"
    />

  </div>
</template>

<script>
import ReviewList from '@/components/ReviewList'
export default {
  name: 'CommunityReview',
  components: {
    ReviewList,
  },
 computed: {
   articles() {
     return this.$store.state.articles
   }
 },
  created() {
    this.$store.dispatch('getArticles', 'review')

  }

}
</script>

<style>

</style>