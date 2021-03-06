import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'


axios.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('access_token')
  config.headers.common['Authorization'] = accessToken ? `Bearer ${accessToken}` : ''
  return config
})

  
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    detailMovie: {},
    actors: [],
    scrollActors: [],
    detailArticle: [],
    accessToken: localStorage.getItem('access_token') || '',
    randomMovies: [],
    searchResult: {},
    user: {
      username: '',
      pk: Number,
      sns_id: '',
      sns_type: '',
      like_actors: [],
      like_movies: [],
      review_set: [],
      scrap_articles: []
    },
    articles: [],
    loginState: '',
    signupState: 0,
  },
  getters: {
    isLoggedIn({ accessToken }) {
      return accessToken ? true : false
    },
    movies(state) {
      return state.movies
    }
  },
  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies
    },
    UPDATE_MOVIES(state) {
      state.movies = []
    },
    SET_DETAIL_MOVIE(state, movie) {
      state.detailMovie = movie
    },
    SET_ACTORS(state, actors) {
      state.actors = actors
    },
    SET_SCROLL_ACTORS(state, actors) {
      state.scrollActors.push(...actors)
    },
    SET_LIKE_SCROLL_ACTORS(state, actors) {
      const size = state.scrollActors.length
      state.scrollActors = actors.splice(0, size)
    },
    SET_RANDOM_MOVIE(state, movies) {
      state.randomMovies = movies
    },
    // 커뮤니티 관련함수
    SET_ARTICLES(state, reviews) {
      state.articles = reviews
    },
    SET_DETAIL_ARTICLE(state, article) {
      state.detailArticle = article
    },
    // CREATE_COMMENT(state, comment) {
    //   state.reviews
    // },
    UPDATE_TOKEN(state, access_token) {
      state.accessToken = access_token
    },
    DELETE_TOKEN(state) {
      state.accessToken = ''
    },
    UPDATE_SEARCH(state, result) {
      if(result === '') {
        state.searchResult = 204
      } else {
        state.searchResult = result
      }
    },
    SET_USER(state, user) {
      state.user.username = user.username
      state.user.pk = user.pk
      state.user.image = user.image
      state.user.sns_id = user.sns_id
      state.user.sns_type = user.sns_type
      state.user.like_actors = user.like_actors
      state.user.like_movies = user.like_movies
      state.user.review_set = user.review_set
      state.user.scrap_articles = user.scrap_review
    },
    DELETE_USER(state) {
      state.user = {}
    },
    SET_LOGIN_STATUS(state, status) {
      state.loginState = status
    },
    SET_SIGNUP_STATUS(state, status) {
      state.signupState = status
    }
  },
  actions: {
    getMovies({ commit }) {
      axios.get('http://127.0.0.1:8000/api/v1/movies/')
        .then(res => {
          commit('SET_MOVIES', res.data)
        })
    },
    setDetailMovie({ commit }, movie) {
      axios.get(`http://127.0.0.1:8000/api/v1/movies/detail/${movie.id}/`)
        .then(res => {
          res
          commit('SET_DETAIL_MOVIE', res.data)
        })
        .catch(err => {
          console.log(err)
        })
      
    },
    createMovieComment({ state, dispatch }, comment) {
      const movie = state.detailMovie
      axios.post(`http://127.0.0.1:8000/api/v1/movies/${movie.id}/comments/`, comment)
        .then(res => {
          console.log(res.data)
          dispatch('setDetailMovie', movie)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getActors({ commit }) {
      
      axios.get(`http://127.0.0.1:8000/api/v1/actors/page/all/`)
        .then(res => {
          commit('SET_ACTORS', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getScrollActors({ commit }, page) {
      console.log(page)
      axios.get(`http://127.0.0.1:8000/api/v1/actors/page=${page}/`)
        .then(res => {
          commit('SET_SCROLL_ACTORS', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getRandomMovies({ commit }, keyword) {
      axios(`http://127.0.0.1:8000/api/v1/movies/${keyword}/`)
        .then(res => {
          commit('SET_RANDOM_MOVIE', res.data)
        })
    },
    // 커뮤니티 관련 함수
    getArticles({ commit }, type) {
      // review 타입 글을 가져온다.
      axios.get(`http://127.0.0.1:8000/api/v1/community/${type}/`)
        .then(res => {
          commit('SET_ARTICLES', res.data)
        })
        .catch(err => {
          console.error(err)
        })
    },
    getDetailArticle({ commit }, article) {
      axios.get(`http://127.0.0.1:8000/api/v1/community/detail/${article.id}/`)
        .then(res => {
          commit('SET_DETAIL_ARTICLE', res.data)
        })
        .catch(err => {
          console.error(err)
        })
    },
    createArticle({ state, dispatch }, article) {
      const type = article.type
      axios.post(`http://127.0.0.1:8000/api/v1/community/${type}/`, article)
      .then(res => {
        res
        dispatch('getByUsername', state.user.username)
        setTimeout(() => {
          if(type === 'review') {
            router.push({name: 'CommunityReview'})
          } else if(type === 'casting') {
            router.push({name:'CommunityJob'})
          } else if(type === 'free') {
            router.push({name: 'CommunityFree'})
          }
        }, 500)
      })
      .catch(err => {
        console.error(err)
      })
    },
    updateArticle({ commit }, article) {
      axios.put(`http://127.0.0.1:8000/api/v1/community/article/${article.id}/`, article)
        .then(res => {
          commit('SET_DETAIL_ARTICLE', res.data)
          
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteArticle({ state, dispatch }, article) {
      const type = article.type
      axios.delete(`http://127.0.0.1:8000/api/v1/community/article/${article.id}/`)
        .then(() => {
          dispatch('getByUsername', state.user.username)
          setTimeout(() => {
            if(type === 'review') {
              router.push({name: 'CommunityReview'})
            } else if(type === 'casting') {
              router.push({name:'CommunityJob'})
            } else if(type === 'free') {
              router.push({name: 'CommunityFree'})
            }
          }, 500)
        })
        .catch(err => {
          console.log(err)
        })
    },
    createReviewComment({ state, dispatch }, content) {
      const article = state.detailArticle
      axios.post(`http://127.0.0.1:8000/api/v1/community/article/${article.id}/comments/`, {content})
        .then(res => {
          res
          dispatch('getDetailArticle', article)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteReviewComment({ dispatch }, {comment, article}) {
      axios.delete(`http://127.0.0.1:8000/api/v1/community/article/comments/${comment.id}/`)
        .then(() => {
          dispatch('getDetailArticle', article)
        })
        .catch(err => {
          console.log(err)
        })
    },
    clickScrap({ state, commit, dispatch }, article) {
      axios.post(`http://127.0.0.1:8000/api/v1/community/detail/${article.id}/scrap/`, {access_token: state.accessToken})
        .then(res => {
          
          commit('SET_DETAIL_ARTICLE', res.data)
          dispatch('getByUsername', state.user.username)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getByUsername({ commit, dispatch }, username) {
      axios.get(`http://127.0.0.1:8000/api/v1/accounts/user/${username}/`)
        .then(res => {
          commit('SET_USER', res.data)
          dispatch('getMovies')
          dispatch('getActors')
          dispatch('getArticles', 'all')
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 로그인
    login({commit, dispatch}, credentials) {
      axios.post('http://127.0.0.1:8000/api/v1/token/', credentials)
        .then(res => {
         
          const username = res.config.data.split('"')[3]
          localStorage.setItem('access_token', res.data.access)
          commit('UPDATE_TOKEN', res.data.access)
          dispatch('getByUsername', username)
          dispatch('getScrollActors', 1)
          router.push({ name: 'Intro'})
        })
        .catch(err => {
          commit('SET_LOGIN_STATUS', err.response.status)
        })
    },
    //로그아웃
    logout({ commit }) {
      commit('DELETE_TOKEN')
      commit('DELETE_USER')
      localStorage.removeItem('access_token')
      router.push({name:'Login'})
    },
    signup({ commit}, credentials) {
      axios.post('http://127.0.0.1:8000/api/v1/accounts/signup/', credentials)
        .then(() => {
          router.push({name: 'Login'})
        })
        .catch(err => {
          if(err.response.data.username) {
            commit('SET_SIGNUP_STATUS', 1)
          } else if(err.response.data.error) {
            commit('SET_SIGNUP_STATUS', 2)
          }
        })
    },
    search({ commit }, keyword) {
      
      axios.post(`http://127.0.0.1:8000/api/v1/search/`, {keyword})
        .then(res => {
          commit('UPDATE_SEARCH', res.data)
        })
        .then(() => {
          router.push({name: 'SearchResult'})
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    // 배우 좋아요
    like_actor({ commit, state, dispatch}, actor) {
      axios.post(`http://127.0.0.1:8000/api/v1/actors/like/${actor.id}/`, {access_token: state.accessToken})
        .then(res => {       
          commit('SET_ACTORS', res.data)
          commit('SET_LIKE_SCROLL_ACTORS', res.data)
          dispatch('getByUsername', state.user.username)
        })
    },
    // 영화 좋아요
    like_movie({state, commit, dispatch}, movie) {
      axios.post(`http://127.0.0.1:8000/api/v1/movies/detail/like/${movie.id}/`, {access_token: state.accessToken})
        .then(res => {
          
          commit('SET_MOVIES', res.data)
          dispatch('getByUsername', state.user.username)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateMovies({commit}) {
      commit('UPDATE_MOVIES')
    },
    updateUser({state, commit, dispatch}) {
      axios.post('http://127.0.0.1:8000/api/v1/accounts/again/', {access_token: state.accessToken})
      .then(res => {
        console.log(res.data)
        commit('SET_USER', res.data)
        dispatch('getByUsername', res.data.username)
        dispatch('getScrollActors', 1)
      })
    }
  },
  modules: {
  },
  
})
