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
  name: 'CommunityJob',
  components: {
    ReviewList 
  },
  computed: {
    articles() {
      return this.$store.state.articles
    }
  },
  created() {
    this.$store.dispatch('getArticles', 'casting')
  }
}
</script>

<style>

</style>