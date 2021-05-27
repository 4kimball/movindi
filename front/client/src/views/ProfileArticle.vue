<template>
  <div class="profile-article">
    <ReviewList 
    :postType="postType"
    :articles="myArticles"
    />
  </div>
</template>

<script>
import {mapState} from 'vuex'
import ReviewList from '@/components/ReviewList'
export default {
  name: 'ProfileArticle',
  data() {
    return {
      myArticles: [],
      postType: "작성한 게시글"
    }
  },
  components: {
    ReviewList
  },
  computed: {
    ...mapState([
      'user',
      'articles'
    ])
  },
  methods: {
    getMyArticle(articles) {
      const review_set = this.user.review_set
      for(let i=0; i<review_set.length; i++) {
        for(let j=0; j<articles.length; j++) {
          if(review_set[i] === articles[j].id) {
            this.myArticles.push(articles[j])
          }
        }
      }
      console.log(this.myArticles)
    },
  },
  created() {
    this.getMyArticle(this.articles)
  }
}
</script>

<style>

</style>