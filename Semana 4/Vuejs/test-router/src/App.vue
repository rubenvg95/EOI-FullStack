<template>
  <div id="app">
    <nav class="menu">
      <router-link to="/General">General</router-link>
      <router-link to="/Clientes">Clientes</router-link>
      <router-link to="/Campanas">Compañas</router-link>
      <router-link to="/Configurar">Configurar</router-link>
    </nav>
    <main><router-view/></main>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
