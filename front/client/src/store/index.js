import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import createPersistedState from "vuex-persistedstate";

// axios.interceptors.request.use(config => {
  //   const accessToken = localStorage.getItem('access_token')
  //   config.headers.common['Authorization'] = accessToken ? `Bearer ${accessToken}` : ''
  //   return config
  // })
  
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    actors: [],
    reviews: [],
    article: [],
    accessToken: localStorage.getItem('access_token') || '',
    randomMovies: [],
    searchResult: {},
    user: {
      username: '',
      pk: Number
    }
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
    GET_ONE_ARTICLE(state, article) {
      state.article = article
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
    }
  },
  actions: {
    getMovies({ commit }) {
      axios.get('http://127.0.0.1:8000/api/v1/movies/')
        .then(res => {
          console.log(res)
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
    getArticles({ commit }, type) {
      // review 타입 글을 가져온다.
      axios.get(`http://127.0.0.1:8000/api/v1/community/${type}/`)
        .then(res => {
          commit('SET_REVIEWS', res.data)
        })
        .catch(err => {
          console.error(err)
        })
    },
    getOneArticle({ commit }, articleID) {
      axios.get(`http://127.0.0.1:8000/api/v1/community/detail/${articleID}/`)
        .then(res => {
          commit('GET_ONE_ARTICLE', res.data)
        })
        .catch(err => {
          console.error(err)
        })
    },
    createComment({ commit }, article_id, content) {
      axios({
        method: 'post',
        ulr: `http://127.0.0.1:8000/api/v1/community/article/${article_id}/comments/`,
        data: { content },
      })
      .then(res => {
        console.log(res.data)
        commit('CREATE_COMMENT', res.data)
      })
      .catch(err => {
        console.error(err)
      })
    },
    getUserInfo({ commit }, username) {
      axios.get(`http://127.0.0.1:8000/api/v1/accounts/${username}`)
        .then( res => {
          commit
          console.log(res)
        })
    },
    getByUsername({ commit }, username) {
      console.log(username)
      axios.get(`http://127.0.0.1:8000/api/v1/accounts/user/${username}/`)
        .then(res => {
          commit('SET_USER', res.data)
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
          dispatch('getMovies')
        })
        .then( () => {
          router.push({ name: 'Intro'})
        })
    },
    //로그아웃
    logout({ commit }) {
      commit('DELETE_TOKEN')
      localStorage.removeItem('access_token')
      router.push({name:'Login'})
    },
    signup({ dispatch }, credentials) {
      axios.post('http://127.0.0.1:8000/api/v1/accounts/signup/', credentials)
        .then(res => {
          console.log(res)
          dispatch('login', credentials)
        })
        .catch(err => {
          console.log(err)
        })
    },
    search({ commit }, keyword) {
      
      axios.get(`http://127.0.0.1:8000/api/v1/search/${keyword}/`)
        .then(res => {
          commit('UPDATE_SEARCH', res.data)
        })
        .then(() => {
          router.push({name: 'SearchResult'})
        })
    },
    // 배우 좋아요
    like_actor({ commit, state}, actor) {
      axios.post(`http://127.0.0.1:8000/api/v1/actors/like/${actor.id}/`, {access_token: state.accessToken})
        .then(res => {
          commit('SET_ACTORS', res.data)
        })
    }
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
