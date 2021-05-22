<template>
  <div class="search-result container mt-5">
    <div v-if="result === 204">
      <h2>검색 결과가 없습니다.</h2>
    </div>
    <div v-else>
      <div v-if="result.title" class="search-view ">
        <div class="info">
          <h2>{{ result.title }}</h2>
          <p>{{ result.release_date }} | {{ result.genre }} | {{ result.director }} | {{ result.actors }}</p>
          <hr>
          <p>{{ result.content }}</p>
        </div>
        <div class="poster"><img :src=result.poster_path :alt=result.title></div>
      </div>
      <div v-else class="search-view">
        <div class="profile-image"><img :src=result.profile_image :alt=result.name></div>
        <div class="info">
          <h2>{{ result.name }}</h2>
          <p>{{ result.date_of_birth }}</p>
          <p>{{ result.intro }}</p>
          <hr>
          <p>작품활동 : {{ result.filmography }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  computed: {
    result() {
      return this.$store.state.searchResult
    }
  }
}
</script>

<style>
.search-result {
  color: white;
}

.search-result .search-view {
  display: flex;
  justify-content: space-between;
}

.search-result .search-view .poster img {
  width: 100%;
  width: 400px;
  height: 600px;
  margin-left: 5rem;
}

.search-result .search-view .profile-image img {
  width: 100%;
  width: 250px;
  height: 400px;
}
</style>