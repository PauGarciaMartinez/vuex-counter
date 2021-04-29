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
    async addRandomNumber(context) {
      try {
        let response = await fetch("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new");

        if (!response.ok) {
          throw new Error(`HHTPS error: ${response.status}`);
        }

        let number = await response.json();
        console.log(number);
        context.commit('addToCounter', number);

      } catch(error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
