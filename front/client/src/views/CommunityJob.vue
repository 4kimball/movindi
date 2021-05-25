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
  name: 'CommunityJob',
  data() {
    return {
      postType: "캐스팅"
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
    this.$store.dispatch('getArticles', 'casting')
  },

}
</script>

<style>

</style>