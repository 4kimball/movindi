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
    articles: []
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
        router.push({name: 'Community'})
      })
      .catch(err => {
        console.error(err)
      })
    },
    deleteArticle({ commit }, article) {
      axios.delete(`http://127.0.0.1:8000/api/v1/community/article/${article.id}/`)
        .then(res => {
          console.log(res)
          commit
          router.push({name: 'CommunityReview'})
          
        })
        .catch(err => {
          console.log(err)
        })
    },
    createComment({ state, dispatch }, content) {
      const article = state.detailArticle
      axios.post(`http://127.0.0.1:8000/api/v1/community/article/${article.id}/comments/`, {content})
        .then(res => {
          console.log(res)
          dispatch('getDetailArticle', article)
        })
        .catch(err => {
          console.log(err)
        })
    },
    clickScrap({ state, commit }, article) {
      axios.post(`http://127.0.0.1:8000/api/v1/community/detail/${article.id}/scrap/`, {access_token: state.accessToken})
        .then(res => {
          
          commit('SET_DETAIL_ARTICLE', res.data)
          //dispatch('getByUsername', state.user.username)
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
          
        })
        .then( () => {
          router.push({ name: 'Intro'})
        })
    },
    //로그아웃
    logout({ commit }) {
      commit('DELETE_TOKEN')
      commit('DELETE_USER')
      localStorage.removeItem('access_token')
      router.push({name:'Login'})
    },
    signup({ dispatch }, credentials) {
      axios.post('http://127.0.0.1:8000/api/v1/accounts/signup/', credentials)
        .then(res => {
          res
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
          console.log(res)
          commit('SET_ACTORS', res.data)
          //dispatch('getByUsername', state.user.username)
        })
    },
    updateMovies({commit}) {
      commit('UPDATE_MOVIES')
    }
  },
  modules: {
  },
  
})
