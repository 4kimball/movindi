<template>
  <div class="community mt-5">
  <div class="container">
    <div class="menu">
    <ul class="communityMenu d-flex justify-content-center">
      <router-link :to="{ name: 'CommunityReview'}" class="rlink"><span class="mx-3 p-2">#영화 리뷰</span></router-link>
      <router-link :to="{ name: 'CommunityJob'}" class="rlink"><span class="mx-3 p-2">#캐스팅</span></router-link>
      <router-link :to="{ name: 'CommunityFree'}" class="rlink"><span class="mx-3 p-2">#자유게시판</span></router-link>
    </ul>
    <div class="form-btn">
      <button><router-link :to="{ name: 'CommunityWrite'}" class="rlink">글쓰기</router-link></button>
    </div>
    </div>
    <router-view/>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Community',
  created() {
    this.$store.dispatch('getArticles', 'review')
  },
  components: {

  },
  computed: {
    articles() {
      return this.$store.state.articles
    }
  }
}
</script>

<style >
.community .menu {
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  border-bottom: 1px solid var(--color-pink);
}

.community .menu .rlink {
  color: var(--color-pink);
}

.community .menu .form-btn button {
  background-color: var(--color-pink);
  padding: 4px 8px;
  border: none;
  border-radius: 7px;
}
.community .menu .form-btn button .rlink{
  text-decoration: none;
  color: white;
  font-weight: bold;
}

.community .communityMenu .rlink:hover {
  color: #ff80b3;
}

.community .menu .form-btn button:hover {
  background-color: #ff4d94;
}
</style>