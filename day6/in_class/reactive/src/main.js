import Vue from 'vue'
import Vuex from 'vuex'
import store from './store.js'
import App from './App.vue'
import Vuetify from 'vuetify'


Vue.use(Vuetify)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
