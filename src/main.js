import Vue from 'vue'

// Vue Router
import Router from 'vue-router'
import routerConfig from './router'

// Vuex
import Vuex from 'vuex'
import storeConfig from './store'

// base component
import App from './App.vue'

// base styles
import './styles/app-styles.css'
import './styles/article-styles.css'

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(Vuex)

const router = new Router(routerConfig)
const store = new Vuex.Store(storeConfig)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#root')
