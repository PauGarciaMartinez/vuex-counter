<!-- TEMPLATE -->
<template>
  <h1>Vuex Counter</h1>
  <h2 class="counter">{{ counter }}</h2>
  <button>-</button>
  <input 
    type="number"
    v-model="value">
  <button>+</button>
</template>

<!-- SCRIPT -->
<script>
import { mapState } from 'vuex';

export default {
  name: 'Counter',
  data() {
    return {
      value: 1,
    }
  },
  computed: {
    ...mapState(['counter'])
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

</style>