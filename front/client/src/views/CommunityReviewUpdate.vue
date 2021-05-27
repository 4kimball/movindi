<template>
    <div class="article-update">
      <div class="form-item">
      <label for="post-type" class="me-2">말머리</label>
      <select name="" id="post-type" v-model="detailArticle.type">
        <option value="review">영화리뷰</option>
        <option value="casting">캐스팅</option>
        <option value="free">자유게시판</option>
      </select>
    </div>
    <div class="form-item">
      <label for="title" class="me-2">제목 </label>
      <input type="text" id="title" v-model="detailArticle.title">
    </div>
    <div class="form-item">
      <textarea name="" id="content" cols="30" rows="20" v-model="detailArticle.content"></textarea>
    </div>
    <div class="write-btn">
    <button @click="updateArticle">수정</button>
    </div>
  </div>
</template>

<script>
import router from '../router'
import { mapState } from 'vuex'
export default {
  name: 'CommunityReviewUpdate',
  computed: {
    ...mapState([
      'detailArticle',
    ]),
  },
  methods: {
    updateArticle() {
      this.$store.dispatch('updateArticle', this.detailArticle)
      router.push({ name: 'CommunityReviewDetail'})
    }
  }
}
</script>

<style>
.article-update {
  width: 100%;
  display: flex;
  flex-direction: column;
  color: var(--color-pink);

  padding: 2rem;
}

.article-update .form-item {
  margin-top: 2rem;
}
.article-update select {
 background-color: #d9d9d9;
 border-radius: 7px;
}
.article-update input {
  width: 855px;
  height: 30px;
  border: none;
  border-bottom: 2px solid var(--color-pink);
  border-radius: 7px;
  background-color: #d9d9d9;
  position: relative;
}

.article-update textarea {
  width: 900px;
  border: none;
  border-radius: 7px;
  border: 1px solid var(--color-pink);
  background-color: #d9d9d9;
}

.article-update .write-btn {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}
.article-update button {
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 7px;
  background-color: var(--color-pink);
  color: white;
  font-weight: bold;
}
</style>