<template>
  <div class="profile-scrap">
    <ReviewList 
    :postType="postType"
    :articles="myScrapArticles"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ReviewList from '@/components/ReviewList'
export default {
  name: 'ProfileScrap',
  components: {
    ReviewList
  },
  data() {
    return {
      postType: '스크랩한 게시글',
      myScrapArticles: []
    }
  },
  computed: {
    ...mapState([
      'user',
      'articles'
    ])
  },
  methods: {
    getMyScrapArticle(articles) {
      const scrap_articles = this.user.scrap_articles
      for(let i=0; i<scrap_articles.length; i++) {
        for(let j=0; j<articles.length; j++) {
          if(scrap_articles[i] === articles[j].id) {
            this.myScrapArticles.push(articles[j])
          }
        }
      }
    }
  },
  created() {
    this.getMyScrapArticle(this.articles)
  }
}
</script>

<style>

</style>