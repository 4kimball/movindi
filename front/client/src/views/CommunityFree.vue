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
  name: 'CommunityFree',
  components: {
    ReviewList
  },
  created() {
    this.$store.dispatch('getArticles', 'free')
  },
  computed: {
    articles() {
      return this.$store.state.keywordArticles
    }
  }
}
</script>

<style>

</style>