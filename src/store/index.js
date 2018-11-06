import articles from './articles.module.js'

const debug = process.env.NODE_ENV !== 'production'

export default {
  modules: {
    articles
  },

  strict: debug
}
