import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    isAuthenticated: false,
  },
  mutations: {
    setAuthenticated(state, value) {
      state.isAuthenticated = value
    },
  },
  plugins: [createPersistedState()],
})