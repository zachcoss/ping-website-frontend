/**
 * Import Vue
 * **/
import Vue from 'vue'
/**
 * Import Vuex
 * **/
import vuex from 'vuex'
/**
 * Import vue-router
 * **/
import VueRouter from 'vue-router'
/**
 * Import axios
 * **/
import axios from './network/axios'
/**
 * Add vuex to instance
 * **/
Vue.use(axios)
/**
 * Install vue-router
 * **/
import Ping from './components/Ping'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Ping',
      component: Ping,
    },
  ],
})

/**
* Install vuex
* **/
import pingModule from './store/Ping'
Vue.use(vuex)
const store = new vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    ping: pingModule,
  }
})
/**
 * Initialize app
 * **/
import App from './App.vue'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')