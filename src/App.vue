<!-- TEMPLATE -->
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Component1 />
</template>

<!-- SCRIPT -->
<script>
import Component1 from '@/components/Component1';
import Component2 from '@/components/Component2';

export default {
  name: 'App',
  components: {
    Component1,
    Component2
  }
}
</script>

<!-- STYLE -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
