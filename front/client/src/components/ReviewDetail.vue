<template>
  <div>
    <p>제목 : {{ getOneArticle[0].title }}</p>
    <p>작성자 : {{ getOneArticle[0].user }}</p>
    <p>내용 : {{ getOneArticle[0].content }}</p>
    <p>{{ getOneArticle[0] }}</p>

    <CommentList />
    <CommentForm />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import CommentList from '@/components/CommentList'
import CommentForm from '@/components/CommentForm'
export default {
  name: 'ReviewDetail',
  components: {
    CommentList,
    CommentForm
  },
  computed: {
    ...mapState([
      'reviews',
      'whereUserWatch'
    ]),
    ...mapGetters([
      'getOneArticle'
    ])
  },
  beforeDestroy() {
    this.$store.dispatch('getArticles')
  }
}
</script>

<style>

</style>