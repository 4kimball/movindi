<template>
  <div>
    <h3>리뷰 리스트</h3>
    
    <b-table 
      hover 
      :items="reviews" 
      :fields="fields">
    </b-table>
    <b-pagination 
      v-model="currentPage" 
      :total-rows="rows"
      :per-page="perPage"
      align="center"
    ></b-pagination>
    <!-- <b-button @click="writeContent">글쓰기</b-button> -->

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ReviewList',
  data() {
    return {
      currentPage: 1, // 현재 페이지
      perPage: 10, // 페이지당 보여줄 갯수
      // bootstrap 'b-table' 필드 설정
      fields: [
        {
          key: "id",
          label: "번호"
        },
        {
          key: "title",
          label: "제목"
        },
        {
          key: "user",
          label: "작성자"
        }
      ]
    }
  },
  computed: {
    ...mapState([
      'reviews'
    ])
  }
}
</script>

<style>

</style>