<template>
  <div class="todoList">
      <h1>todos</h1>
        <input v-model="newTodo.text" placeholder="Insert todo" type="text" @keyup.enter="addNewTodoDB">
        <div class="todos" v-for="todo in todos">
            <div class="todo">
                <input type="checkbox" v-model="todo.isCompleted" >
                {{todo.isCompleted}}
                <span class="todo--text" v-bind:class="{'completed' : todo.isCompleted}">{{todo.text}}</span>
                <button>Delete</button>
            </div>
        </div>
  </div>
</template>

<script>
import axios from "axios";
let urlTodos = "http://localhost:2222/api/TODOS";

export default {
  name: "TodoListAPI",
  data() {
    return {
      newTodo: {
        text: "",
        isCompleted: false,
        createdAt: 0
      },
      todos: []
    };
  },
  created() {
    this.recargarTodos();
  },
  methods: {
    recargarTodos() {
      axios
        .get(urlTodos)
        .then(response => {
          this.normalizarDatos(response.data);
        })
        .catch(err => {
          console.log(err.data);
        });
    },
    normalizarDatos(todos) {
      todos.forEach(todo => {
        this.newTodo._id = todo._id;
        this.newTodo.text = todo.text;
        this.newTodo.isCompleted = todo.isCompleted;
        this.newTodo.createdAt = todo.createdAt;
        this.addTodo(this.newTodo);
        this.newTodo = {};
      });
    },
    addTodo(todo) {
      this.newTodo._id = todo._id;
      this.newTodo.text = todo.text;
      this.newTodo.isCompleted = todo.isCompleted || false;
      this.newTodo.createdAt = todo.createdAt || Date.now();
      this.todos.push(this.newTodo);
      this.newTodo = {
        text: "",
        isCompleted: false,
        createdAt: 0
      };
      console.log(this.todos);
    },
    addNewTodoDB() {
      axios
        .post(urlTodos, this.newTodo)
        .then(added => {
          this.addTodo(this.newTodo);
        })
        .catch(errors => {
          alert(
            "No se ha podido publicar: " +
              errors.response.data.errors.text.message
          );
        });
    },
    
  },
  computed: {}
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}

.todo {
  display: inline;
}
</style>
