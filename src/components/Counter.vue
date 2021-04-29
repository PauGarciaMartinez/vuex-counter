<!-- TEMPLATE -->
<template>
  <h1>Vuex Counter</h1>
  <h2 class="counter">{{ counter }}</h2>
  <button @click="subtractFromCounter(value)">-</button>
  <input 
    type="number"
    v-model="value">
  <button @click="addToCounter(parseInt(value))">+</button>
  <div>
    <button class="btn" @click="addRandomNumber">Add by Random Number</button>
  </div>
</template>

<!-- SCRIPT -->
<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'Counter',
  data() {
    return {
      value: 1,
    }
  },
  computed: {
    ...mapState(['counter'])
  },
  methods: {
    ...mapMutations(['addToCounter', 'subtractFromCounter']),
    ...mapActions(['addRandomNumber'])
  }
}
</script>

<!-- STYLE -->
<style>
.counter {
  font-size: 5rem;
}

button {
  border-radius: 100%;
  border: none;
  width: 2rem;
  height: 2rem;
  font-weight: 700;
  cursor: pointer;
}

input {
  padding: 0.4rem;
  margin: 0 0.5rem;
  text-align: center;
}

.btn {
  border-radius: 0.5rem;
  color: white;
  background-color: #41B983;
  width: auto;
  margin-top: 1rem;
  cursor: pointer;
}

</style>