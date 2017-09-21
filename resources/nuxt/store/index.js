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
  }
})

export default store
