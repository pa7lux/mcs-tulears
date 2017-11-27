import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userIsLoggedIn: null,
  },
  getters: {
    userIsLoggedIn: state => state.userIsLoggedIn
  },
  mutations: {
    authorizeUser(state) {
      state.userIsLoggedIn = true
    }
  }
})
