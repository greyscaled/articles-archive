import articleData from '@/../data/articles.json'

const state = {
  articles: articleData.articles,
  active: 1
}

const getters = {
  getArticles: state => (
    Object
      .keys(state.articles)
      .map(key => state.articles[key])
  ),

  getActive: state => state.articles[state.active]
}

const actions = {
  ACTIVATE_ARTICLE (context, id) {
    context.commit('SET_ACTIVE_ARTICLE', parseInt(id))
  }
}

const mutations = {
  SET_ACTIVE_ARTICLE (state, id) {
    state.active = id
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
