<!-- TEMPLATE -->
<template>

      <h4 class="history-title">History</h4>

      <div class="history-numbers">
        <p 
          v-for="(number, index) in history" 
          :key="index" 
          :class="activeIndexes(parseInt(value)).includes(index) && 'bold'"
        >
          {{ number }}
        </p>
      </div>

      <input 
        type="number" 
        placeholder="Search by number"
        v-model="value">

</template>

<!-- SCRIPT -->
<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'History',
  data() {
    return {
      value: 0
    }
  },
  computed: {
    ...mapState(['history']),
    ...mapGetters(['activeIndexes'])
  }
}
</script>

<!-- STYLE -->
<style>
.history-title {
  margin-top: 5rem;
}

.history-numbers {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  width: 25rem;
  margin: 0 auto;
}

.history-numbers p {
  margin: 1rem;
}

.bold {
  font-weight: 900;
}

</style>