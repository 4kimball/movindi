import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    actors: [],
    reviews: [],
    whereUserWatch:{
      selectBoardType: null,
      selectPage: 1,
      selectArticleID: null
    },
    accessToken: localStorage.getItem('access_token') || '',
    randomMovies: [],
  },
  getters: {
    getOneArticle(state) {
      return state.reviews.filter(review => review.id === state.whereUserWatch.selectArticleID)
    },
    isLoggedIn({ accessToken }) {
      return accessToken ? true : false
    }
  },
  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies
    },
    SET_ACTORS(state, actors) {
      state.actors = actors
    },
    SET_RANDOM_MOVIE(state, movies) {
      state.randomMovies = movies
    },
    // 커뮤니티 관련함수
    SET_REVIEWS(state, reviews) {
      state.reviews = reviews
    },
    UPDATE_SELECTED_ARTICLEID(state, review) {
      state.whereUserWatch.selectArticleID = review.id
    },
    RESET_SELECTE_ARTICLEID(state) {
      state.whereUserWatch.selectArticleID = null
    },
    UPDATE_TOKEN(state, access_token) {
      state.accessToken = access_token
    },
    DELETE_TOKEN(state) {
      state.accessToken = ''
    }
  },
  actions: {
    getMovies({ commit }) {
      axios.get('http://127.0.0.1:8000/api/v1/movies/')
        .then(res => {
          commit('SET_MOVIES', res.data)
        })
    },
    getActors({ commit }) {
      axios.get('http://127.0.0.1:8000/api/v1/actors/')
        .then(res => {
          commit('SET_ACTORS', res.data)
        })
    },
    getRandomMovies({ commit }, keyword) {
      axios(`http://127.0.0.1:8000/api/v1/movies/${keyword}/`)
        .then(res => {
          commit('SET_RANDOM_MOVIE', res.data)
        })
    },
    // 커뮤니티 관련 함수
    getArticles({ commit }) {
      // review 타입 글을 가져온다.
      axios.get(`http://127.0.0.1:8000/api/v1/community/review/`)
        .then(res => {
          commit('SET_REVIEWS', res.data)
          console.log(res.data)
        })
        .catch(err => {
          console.error(err)
        })
    },
    clickArticle({ commit }, review) {
      axios.get(`http://127.0.0.1:8000/api/v1/community/detail/${review.id}/`)
        .then(res => {
          commit('UPDATE_SELECTED_ARTICLEID', res.data)
        })
        .catch(err => {
          console.error(err)
        })
    },
    resetSelectArticleID({ commit }) {
      commit('RESET_SELECTE_ARTICLEID')
    },
    // 로그인
    login({ commit }, credentials) {
      axios.post('http://127.0.0.1:8000/api/v1/token/', credentials)
        .then(res => {
          console.log(res.data);
          localStorage.setItem('access_token', res.data.access)
          commit('UPDATE_TOKEN', res.data.access)
        })
        .then( () => {
          router.push({ name: 'Home'})
        })
    },
    //로그아웃
    logout({ commit }) {
      commit('DELETE_TOKEN')
      localStorage.removeItem('access_token')
      router.push({name:'Login'})
    }
  },
  modules: {
  }
})
