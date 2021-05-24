<template>
  <div>
  <p>코멘트 리스트</p>
  <ul v-for="comment in reviewcomment_set" :key="comment.id">
    <li>{{ comment }}</li>  
  </ul>
  </div>
</template>

<script>
export default {
  name: 'CommentList',
  props: {
    reviewcomment_set:{
      type : Object
    }
  },
}
</script>

<style scoped>
li {
  color: white;
}
</style>