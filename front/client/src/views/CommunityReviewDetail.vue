<template>
  <div>
    <h2 align="center">리뷰게시판</h2>
    <ReviewDetail
      :article="article"
    />
    <ReviewList />
    <button>
      <router-link :to="{ name: 'CommunityWrite'}">글쓰기</router-link>
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ReviewList from '@/components/ReviewList'
import ReviewDetail from '@/components/ReviewDetail'
export default {
  name: 'CommunityReviewDetail',
  components: {
    ReviewList,
    ReviewDetail
  },
  computed: {
    ...mapState([
      'article'
    ])
  },
  created() {
    // console.log(this.$route.params.article_id)
    const articleID = this.$route.params.article_id
    this.$store.dispatch('getOneArticle', articleID)
  }
}
</script>

<style>

</style>