<template>
  <div class="commu-write">
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
      <input type="text" id="title" v-model="article.title">
    </div>
    <div class="form-item">
      <textarea name="" id="content" cols="30" rows="20" v-model="article.content"></textarea>
    </div>
    <div class="write-btn">
    <button @click="createArticle">작성</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommunityWrite',
  data() {
    return {
    }
  },
  methods: {
    createArticle() {
      this.$store.dispatch('updateArticle', this.article)
    }
  }
}
</script>

<style>
.commu-write {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  color: var(--color-pink);

  padding: 2rem;
}

.commu-write .form-item {
  margin-top: 2rem;
}
.commu-write select {
 background-color: #d9d9d9;
 border-radius: 7px;
}
.commu-write input {
  width: 855px;
  height: 30px;
  border: none;
  border-bottom: 2px solid var(--color-pink);
  border-radius: 7px;
  background-color: #d9d9d9;
  position: relative;
}

.commu-write textarea {
  width: 900px;
  border: none;
  border-radius: 7px;
  border: 1px solid var(--color-pink);
  background-color: #d9d9d9;
}

.commu-write .write-btn {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}
.commu-write button {
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 7px;
  background-color: var(--color-pink);
  color: white;
  font-weight: bold;
}
</style>