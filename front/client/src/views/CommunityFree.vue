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
  name: 'CommunityFree',
  data() {
    return {
      postType: "자유 게시판"
    }
  },
  components: {
    ReviewList,
  },
  created() {
    this.$store.dispatch('getArticles', 'free')
  },
  computed: {
    articles() {
      return this.$store.state.articles
    }
  }
}
</script>

<style>

</style>