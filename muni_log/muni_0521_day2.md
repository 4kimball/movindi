# 0521 muni log Day2

민환님이 json 파일에 데이터를 좀 더 만들어 주셨다.



`python manage.py loaddata articles/movies.json`

을 입력하니 모듈이 부족하다고 떠서

```
python -m pip install django-cors-headers
pip install djangorestframework-simplejwt
```

두개를 설치하고

python manage.py makemigrations

python manage.py migrates

를 입력 한 후 다시 데이터를 로드했다.

run server는 잘 되었지만 일단 게시글 기능부터 완성하는 것이 오늘 목표이다.



vue를 켰더니 설치하래서 설치했다.

`npm install --save axios`



vue bootstrap 안쓰고 하려고 잠깐 지워봄

```vue
<template>
  <div>
    <h3>리뷰 리스트</h3>
    <b-table 
      hover small
      :items="reviews" 
      :fields="fields"
      @row_clicked="rowClick">
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
  },
  methods: {
    // rowClick(item, index, event) {
    //   this.$router.push({
    //     path: `/{$item.id}`
    //   })
    // }
  }
}
</script>

<style>

</style>
```



디폴트 차일드 에러

[vue-router] Named Route 'Community' has a default child route. When navigating to this named route (:to="{name: 'Community'"), the default child route will not be rendered. Remove the name from this route and use the name of the default child route for named links instead.

이따가 민환님 끝나고 app.vue좀 수정해야겠다.



단일 아티클 하나만 들고오기

```vue
getters: {
    getOneArticle(reviews, whereUserWatch) {
      return reviews[whereUserWatch.selectArticleID]
    }
  },

//

export default {
  name: 'ReviewDetail',
  computed: {
    ...mapGetters([
      'getOneArticle'
    ])
  }
}
```

getters를 쓰면 단일 아티클 하나만 들고올 수 있을 거라고 생각했는뎅...



```js
  getters: {
    getOneArticle(state) {
      return state.reviews.filter(review => review.id === state.whereUserWatch.selectArticleID)
    }
```

ㅋㅋㅋ ㅠㅠ 나랑 민환님이랑 다른수업들었나?

getters 쓸때 state 붙여서 써야한다.



게시판 사이를 토글할때 옛날에 봤던 게시글이 그대로 남아있는 문제가 있었다

해결을 위해 beforeDestroyed를 쓰려고 했지만 영 안되는듯....

일단 넘어가고 추후에 고민해봐야겠다.



vue bootstrap 탭을 이용하니까 훨씬 더 깔끔하게 나오는 것 같아서 갈아타는 것으로...



! 할일

비로그인 상태에서 로그인 / 회원가입 페이지

작성자 클릭하면

