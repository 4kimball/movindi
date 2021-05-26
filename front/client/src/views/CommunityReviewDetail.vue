<template>
  <div class="detail-article mt-5">
    <div class="article-view">
    <div class="article-title">
      <h3>{{ detailArticle.title }}</h3>
      <div @click="clickScrap(detailArticle)">
      <span v-if="isLiked(detailArticle)" ><i class="fas fa-bookmark"></i></span>
      <span v-else><i class="far fa-bookmark"></i></span>
      </div>
    </div>
    <div class="article-info">
      <p>{{ detailArticle.user.username }}</p>
      <p>{{ detailArticle.updated_at|getDate }}</p>
    </div>
    <div class="article-content">
    <p>{{ detailArticle.content }}</p>
    </div>
    <div class="btn-update-delete" v-if="isUpdate(detailArticle)">
      
      <button class="btn-update"><router-link :to="{ name: 'CommunityReviewUpdate'}" class="rlink">수정</router-link></button>
      <button class="btn-delete" @click="deleteArticle">삭제</button>
    </div>
  </div>
  <div class="comment-view">
    <div class="comment-form">
      <label for="comment">{{user.username}}</label>
      <input type="text" id="comment" placeholder="댓글을 작성해보세요." v-model="comment">
      <button @click="createReviewComment" class="btn-create">작성</button>
    </div>
    <div v-if="inComment(detailArticle)">
    <ul>
      <li v-for="comment in detailArticle.reviewcomment_set" :key="comment.id" id="comment-item">
        <div>{{comment.user.username}}</div>
        <span>{{comment.content}}</span>
        <button  class="btn-delete" v-if="isDelete(comment.user)" @click="deleteComment(comment)">삭제</button>
      </li>   
    </ul>
     </div>
     <p v-else>아직 댓글이 없습니다.</p>
  </div>
  
  </div>
</template>

<script>
//import router from '../router'
import { mapState } from 'vuex'

export default {
  name: 'CommunityReviewDetail',
  data() {
    return {
      comment: '',
    }
  },
  methods: {
    isLiked(article) {
      
      if(article.scrap_users.indexOf(this.$store.state.user.pk) !== -1) {
        return true
      } else {
        return false
      }
    },
    isDelete(comment_user) {
      if(comment_user.username === this.user.username) {
        return true
      } else {
        return false
      }
    },
    inComment(article) {
      if(article.reviewcomment_set.length) {
        return true
      } else {
        return false
      }
    },
    isUpdate(article) {
      if(article.user.username === this.user.username) {
        return true
      } else {
        return false
      }
    },
    clickScrap(detailArticle) {
      this.$store.dispatch('clickScrap', detailArticle)
    },
    createReviewComment() {
      this.$store.dispatch('createReviewComment', this.comment)
      this.comment = ''
    },
    deleteArticle() {
      this.$store.dispatch('deleteArticle', this.detailArticle)
    },
    deleteComment(comment) {
      const params = {
        comment: comment,
        article: this.detailArticle
      }
      this.$store.dispatch('deleteReviewComment', params)
    }
  },
  computed: {
    ...mapState([
      'detailArticle',
      'user'
    ]),
  },
  filters: {
    getDate(date) {
      date = date.split('-')
      const day = date[2].split('T')[0]
      const time = date[2].split('T')[1].split('.')[0]
      return `${date[0]}-${date[1]}-${day} ${time}`
    }
  },

}
</script>

<style>
.detail-article {
  color: white;
  width: 100%;
  max-width: 1000px;
  
  padding: 2rem;
}
.detail-article  .article-content p{
  word-wrap: break-word;
}

.detail-article .article-title {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-pink);
}

.detail-article .article-title div > span i {
  font-size: 20px;
  color: #ffcc00;
}

.detail-article .article-info {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.detail-article .article-content {
  margin-top: 2rem;
}

.detail-article .comment-view {
  margin-top: 5rem;
  border-top: 1px solid var(--color-pink);
  padding: 2rem;
}

.detail-article .comment-view .comment-form {
  margin-bottom: 4rem;
}
.detail-article .comment-view .comment-form label {
  margin-right: 1rem;
}

.detail-article .comment-view .comment-form input {
  margin-right: 2rem;
  width: 500px;
  border: none;
  border-radius: 5px;
  background-color: #e6e6e6;
  padding: 3px;
}

.detail-article .comment-view .comment-form .btn-create {
  border: none;
  border-radius: 5px;
  background-color: var(--color-pink);
  color: white;
  font-weight: bold;
  padding: 4px 8px;
}

.comment-view ul li {
  list-style: none;
}

.comment-view #comment-item {
  margin-top: 1rem;
}

.comment-view #comment-item div {
  font-weight: bold;
}
.comment-view #comment-item span {
  padding-left: 2px;
}

.article-view .btn-update-delete {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.article-view .btn-update-delete button {
  border: none;
  border-radius: 7px;
  padding: 4px 6px;
  color: white;
  font-weight: bold;
}

.comment-view .btn-delete {
  border: none;
  border-radius: 7px;
  color: white;
  font-weight: bold;
  background-color: #ff3300;
  margin-left: 1rem;
}
.comment-view .btn-delete:hover {
   background-color: #ff5c33;
}
.article-view .btn-update-delete .btn-update {
  background-color: #0033cc;
  margin-right: 6px;
}
.article-view .btn-update-delete .btn-update .rlink {
  color: white;
  font-weight: bold;
}
.article-view .btn-update-delete .btn-update:hover {
  background-color: #4d4dff;
}
.article-view .btn-update-delete .btn-delete {
  background-color: #ff3300;
}
.article-view .btn-update-delete .btn-delete:hover {
  background-color: #ff5c33;
}
</style>