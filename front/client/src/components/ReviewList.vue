<template>
  <div class="review">
    <table class="table mt-5 ">
  <thead>
    <tr>
      <th scope="col">작성자</th>
      <th scope="col">TITLE</th>
      <th scope="col">작성시간</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="article in articles" :key="article.id">
      <td>{{ article.user.username }}</td>
      <td @click="getDetailArticle(article)"><router-link :to="{ name: 'CommunityReviewDetail'}" class="rlink">{{ article.title }}</router-link></td>
      <td>{{ article.updated_at|getDate }}</td>
    </tr>
  </tbody>
</table>
<router-view/>
  </div>
</template>

<script>

export default {
  name: 'ReviewList',
  props: {
    articles: {
      type: Array
    }
  },
  methods: {
    getDetailArticle(article) {
      this.$store.dispatch('getDetailArticle', article)
    }
  },
  filters: {
    getDate(date) {
      date = date.split('-')
      const day = date[2].split('T')[0]
      const time = date[2].split('T')[1].split('.')[0]
      return `${date[0]}-${date[1]}-${day} ${time}`

    }
  }

  
}
</script>

<style scoped>

.table tr {
  margin-bottom: 1rem;
  color: white;
}

tbody, td, tfoot, th, thead, tr {
 border: none;
}

thead > tr {
  border-bottom: 1px solid var(--color-pink);
}
.review tbody .rlink {
  color: white;
}

.review tbody .rlink:hover {
  color: var(--color-pink);
}
</style>