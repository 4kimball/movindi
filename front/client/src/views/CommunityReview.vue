<template>
  <div>
    <h2 align="center">리뷰게시판</h2>
    <p>디테일</p>
    <div v-if="whereUserWatch.selectArticleID">
      <!-- communityShowId에 값이 있으면 받아와서 디테일 페이지를 띄운다 -->
      <ReviewDetail />
    </div>
    <p>리스트</p>
    <ReviewList />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ReviewList from '@/components/ReviewList'
import ReviewDetail from '@/components/ReviewDetail'
export default {
  name: 'CommunityReview',
  components: {
    ReviewList,
    ReviewDetail
  },
  computed: {
    ...mapState([
      'whereUserWatch'
    ])
  },
  created() {
    this.$store.dispatch('getArticles')
  }
}
</script>

<style>

</style>