<template>
    <div class="article-update">
      <h1>UPDATE</h1>
    <div class="form-item">
      <label for="post-type" class="me-2">말머리</label>
      <select name="" id="post-type" v-model="article.type">
        <option value="review">영화리뷰</option>
        <option value="casting">캐스팅</option>
        <option value="free">자유게시판</option>
      </select>
    </div>
    <div class="form-item">
      <label for="title" class="me-2">제목 </label>
      <input type="text" id="title"  :value="detailArticle.title">
    </div>
    <div class="form-item">
      <textarea name="" id="content" cols="30" rows="20"  :value="detailArticle.content"></textarea>
    </div>
    <div class="write-btn">
    <button @click="updateArticle">수정</button>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
export default {
  name: 'CommunityReviewUpdate',
  computed: {
    ...mapState([
      'detailArticle',
    ]),
  },
}
</script>

<style>

</style>