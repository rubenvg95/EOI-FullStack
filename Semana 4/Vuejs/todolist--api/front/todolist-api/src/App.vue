<template>
  <div id="app">
    <TodoListAPI/>
  </div>
</template>

<script>
import TodoListAPI from './components/TodoListAPI'


export default {
  name: 'App',
  components: {
    TodoListAPI
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
