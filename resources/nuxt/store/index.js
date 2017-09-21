import Vuex from 'vuex'

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
    getArticles ({ app,commit }) {
      return app.$http.get('/article').then(({data}) => {
        const { articles } = data
        commit('setArticles', articles)
      })
    }
  }
})

export default store
