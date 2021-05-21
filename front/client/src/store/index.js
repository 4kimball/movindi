import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    actors: [],
    reviews: [
      {
        title : '리뷰제목1',
        content : '리뷰내용1',
        user : '작성자1',
        id : 1
      },
      {
        title : '리뷰제목2',
        content : '리뷰내용2',
        user : '작성자2',
        id : 2
      }
    ]
  },
  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies
    }
  },
  actions: {
    getMovies({ commit }) {
      axios.get('http://127.0.0.1:8000/api/v1/movies/')
        .then(res => {
          commit('SET_MOVIES', res.data)
        })
    }
  },
  modules: {
  }
})
