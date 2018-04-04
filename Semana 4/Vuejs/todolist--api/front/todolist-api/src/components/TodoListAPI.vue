<template>
  <div class="todoList">
      <h1>todos</h1>
        <input v-model="newTodo.text" placeholder="Insert todo" type="text" @keyup.enter="addNewTodoDB">
        <div class="todos" v-for="todo in todos">
            <div class="todo">
                <input type="checkbox" v-model="todo.isCompleted" @click.prevent="completeDB(todo)">
                <span class="todo--text" v-bind:class="{'completed' : todo.isCompleted}">{{todo.text}}</span>
                <button @click.prevent="deleteTodoFromDB(todo)">Delete</button>
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
    //https://alligator.io/vuejs/rest-api-axios/
    this.recargarTodos();
  },
  methods: {
    recargarTodos() {
      axios
        .get(urlTodos)
        .then(response => {
          this.todos = response.data;
          console.log(response.data);
        })
        .catch(err => {
          console.log(err.data);
        });
    },
    addNewTodo(todo) {
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
    validatorFront(todo) {
      if (todo.text.length >= 10) {
        return true;
      } else {
        return false;
      }
    },
    addNewTodoDB() {
      if (this.validatorFront(this.newTodo)) {
        axios
          .post(urlTodos, this.newTodo)
          .then(added => {
            this.newTodo._id = added.data._id;
            this.addNewTodo(this.newTodo);
          })
          .catch(errors => {
            alert(
              "No se ha podido publicar: " +
                errors.response.data.errors.text.message
            );
          });
      } else {
        alert("Error, debes introducir algo mayor a 10 caracteres");
      }
    },
    deleteTodo(todo) {
      console.log("Deleting local " + todo._id);
      this.todos = this.todos.filter(
        todoABuscar => todoABuscar._id != todo._id
      );
    },
    deleteTodoFromDB(todo) {
      axios
        .delete(urlTodos + "/" + todo._id)
        .then(response => {
          console.log("Deleting on DB " + todo._id);
          this.deleteTodo(todo);
          //console.log(response.data.ok);
        })
        .catch(error => {
          alert(error);
        });
    },
    complete(todo, condition) {
      console.log(todo);
      console.log(
        "Se ha marcado el todo en local con id " +
          todo._id +
          " a " +
          !todo.isCompleted
      );
      todo.isCompleted = condition;
    },
    completeDB(todo) {
      //https://github.com/axios/axios/issues/897
      axios
        .patch(urlTodos + "/" + todo._id, {
          isCompleted: !todo.isCompleted
        })
        .then(response => {
          console.log(
            "Se va a marcar el todo en DB con id " +
              todo._id +
              " a " +
              !todo.isCompleted
          );
          this.complete(todo, response.data.isCompleted);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
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
