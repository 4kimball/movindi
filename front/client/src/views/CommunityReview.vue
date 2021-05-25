<template>
  <div>
    <ReviewList 
    :articles="articles"
    />

  </div>
</template>

<script>

import ReviewList from '@/components/ReviewList'
// import ReviewDetail from '@/components/ReviewDetail'
export default {
  name: 'CommunityReview',
  components: {
    ReviewList,
  },
  computed: {
    articles() {
      return this.$store.state.keywordArticles
    }
  },
  created() {
    this.$store.dispatch('getArticles', 'review')
  }

}
</script>

<style>

</style>