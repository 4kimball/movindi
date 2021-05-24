<template>
  <div>
    <input type="text" v-model.trim="content" @keyup.enter="createComment">
    <button @click="createComment">작성</button>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
  name: 'CommentForm',
  props:{
    article_id: Number
  },
  data() {
    return {
      content: null,
    }
  },
  methods: {
    createComment() {
      if (this.content) {
        this.$store.dispatch('createComment', this.article_id, this.content)
        this.content = ''
      }
    }
    // createTodo() {
    //   if (this.title) {
    //     this.$store.dispatch('createTodo', this.title)
    //     this.title = ''
    //   }
    // }
    // ...mapActions([
    //   'createComment'
    // ])
  }
}
</script>

<style>

</style>