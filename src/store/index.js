import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0
  },
  mutations: {
    addToCounter(state, payload) {
      state.counter += payload;
    },
    subtractFromCounter(state, payload) {
      state.counter -= payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
