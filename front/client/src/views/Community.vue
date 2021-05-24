<template>
  <div class="container">
    <ul class="communityMenu d-flex justify-content-center">
      <router-link :to="{ name: 'CommunityReview'}" class="rlink"><span class="mx-3 p-2">#영화 리뷰</span></router-link>
      <router-link :to="{ name: 'CommunityJob'}" class="rlink"><span class="mx-3 p-2">#구인구직</span></router-link>
      <router-link :to="{ name: 'CommunityFree'}" class="rlink"><span class="mx-3 p-2">#자유게시판</span></router-link>
    </ul>
    <router-view/>
  </div>
</template>

<script>
// import CommunityReview from '@/views/CommunityReview'
export default {
  name: 'Community',
  components: {
    // CommunityReview
  }
}
</script>

<style >

</style>