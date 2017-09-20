import Vuex from 'vuex'

import _http from '~/plugins/http'

const http = _http.factory()

const store = () => new Vuex.Store({
  state: {
    articles: null,
    counter: 0
  },
  mutations: {
    setArticles (state, articles) {
      state.articles = articles
    }
  },
  actions: {
    getArticles ({ commit }) {
      return http.get('/article').then(({data}) => {
        const { articles } = data
        commit('setArticles', articles)
      })
    }
  }
})

export default store
