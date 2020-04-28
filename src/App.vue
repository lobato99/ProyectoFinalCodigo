<template>
  <div id="app">
    <BarraNavegador></BarraNavegador>
    <router-view></router-view>
    <Pie></Pie>
  </div>
</template>

<script>
import BarraNavegador from './components/BarraNavegador.vue'
import Pie from './components/Pie.vue'

export default {
  name: 'App',
  components: {
    BarraNavegador,
    Pie
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
