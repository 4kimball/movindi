<template>
  <div>
    <p>{{ article }}</p>
    <p>제목 : {{ article.title }}</p>
    <p>내용 : {{ article.content }}</p>
    <CommentList
      :reviewcomment_set="article.reviewcomment_set"
    />
    <CommentForm 
      :article_id="article.id"
    />
  </div>
</template>

<script>
// import { mapState, mapGetters } from 'vuex'
import CommentList from '@/components/CommentList'
import CommentForm from '@/components/CommentForm'
export default {
  name: 'ReviewDetail',
  props: {
    article:{
      type : Object
    }
  },
  components: {
    CommentList,
    CommentForm
  },
  created() {
    console.log(this.article)
  }
}
</script>

<style>
p {
  color: white;
}
</style>