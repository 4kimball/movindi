<template>
  <div>
    <h1>Community</h1>
    <ul class="communityMenu">
      <router-link :to="{ name: 'CommunityReview'}"><span>#영화 리뷰</span></router-link> |
      <router-link :to="{ name: 'CommunityJob'}"><span>#구인구직</span></router-link> |
      <router-link :to="{ name: 'CommunityFree'}"><span>#자유게시판</span></router-link>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Community'
}
</script>

<style>

</style>