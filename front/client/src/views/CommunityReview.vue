<template>
  <div>
    <h2>리뷰게시판</h2>
    <p>리스트</p>
    <ReviewList />
    <button>
      <router-link :to="{ name: 'CommunityWrite'}">글쓰기</router-link>
    </button>
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

}
</script>

<style>

</style>