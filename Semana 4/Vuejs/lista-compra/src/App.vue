<template>
  <div id="app">
    <ListaCompra/>
  </div>
</template>

<script>
import ListaCompra from './components/ListaCompra'

export default {
  name: 'App',
  components: {
    ListaCompra
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
