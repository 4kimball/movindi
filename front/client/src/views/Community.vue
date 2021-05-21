<template>
  <div class="container">
    <ul class="communityMenu d-flex justify-content-center">
      <router-link :to="{ name: 'CommunityReview'}"><span class="mx-3 p-2">#영화 리뷰</span></router-link>
      <router-link :to="{ name: 'CommunityJob'}"><span class="mx-3 p-2">#구인구직</span></router-link>
      <router-link :to="{ name: 'CommunityFree'}"><span class="mx-3 p-2">#자유게시판</span></router-link>
    </ul>
    <router-view/>
    <button>
      <router-link :to="{ name: 'CommunityWrite'}">글쓰기</router-link>
    </button>

    <b-tabs content-class="mt-3" align="center">
      <b-tab title="# 영화 리뷰" active>
        <div>
          <CommunityReview />
        </div>
      </b-tab>
      <b-tab title="# 구인구직">
        <div></div>
      </b-tab>
      <b-tab title="# 자유게시판">
        <div></div>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import CommunityReview from '@/views/CommunityReview'
export default {
  name: 'Community',
  components: {
    CommunityReview
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

ul span {
  font-size: 18px;
  color: #ff1a75;
}
</style>