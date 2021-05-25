<template>
  <div>
    <ReviewList
    :postType="postType" 
    :articles="articles"
    />

  </div>
</template>

<script>
import ReviewList from '@/components/ReviewList'
export default {
  name: 'CommunityReview',
  data() {
    return {
       postType: '영화 리뷰',
    }
  },
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
  },


}
</script>

<style>

</style>