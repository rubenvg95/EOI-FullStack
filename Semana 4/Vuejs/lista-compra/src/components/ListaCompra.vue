<!-- 
Al introducir los 3 campos válidamente se añadirá una nueva fruta.
Añade una última fila a la "factura" que ponga Total : y salga el total de la compra.
Añade debajo una posibilidad de borrar/cancelar una compra.
-->
<template>
  <div class="listaCompra">
      <h1>Lista de la compra</h1>
      <h3>Presionar enter al introducir la cantidad para añadir</h3>
      <form action="submit">
          <input v-model="newArticle.name" type="text" placeholder="Article">
          <input v-model.number="newArticle.price" type="number" placeholder="Price" min="0">
          <input v-model.number="newArticle.amount" type="number" placeholder="Amount" @keyup.enter="addNewArticle" min="0">
      </form>
      <div  class="articles" v-for="article in articles" >
          <input v-model="article.name" type="text" placeholder="Article">
          <input v-model.number="article.price" type="number" placeholder="Price" min="0">
          <input v-model.number="article.amount" type="number" placeholder="Amount" min="0">
      </div> 
      Has comprado:
      <div class="factura" v-for="article in articles">
          {{article.amount}} x {{article.name}} -- {{article.amount * article.price}}
      </div>
      <h2>Total price:{{totalAmount}}€ </h2> 
  </div>
</template>

<script>
export default {
  name: "ListaCompra",
  data() {
    return {
      newArticle: {
        name: "",
        price: 0,
        amount: 0
      },
      articles: [
        {
          name: "Peras",
          price: 5,
          amount: 2
        },
        {
          name: "Manzanas",
          price: 4,
          amount: 3
        }
      ]
    };
  },
  methods: {
    addNewArticle() {
      if (this.isArticleRepeated()) {
        alert("No puedes repetir elementos");
      }else if (this.isNegativeValue()) {
        alert("No puedes introducir números negativos o ceros");
      } else {
        console.log("Añadir articulo");
        this.articles.push(this.newArticle);
        this.newArticle = {};
        console.log(this.articles);
      }
    },
    isArticleRepeated() {
      return this.articles.some(articulo =>articulo.name.toLowerCase() == this.newArticle.name.toLowerCase());
    },
    isNegativeValue() {
      if (this.newArticle.amount > 0 && this.newArticle.price > 0) {
        return false;
      } else {
        return true;
      }
    }
  },
  computed: {
    totalAmount: function() {
      let sum = 0;
      this.articles.forEach(article => {
        sum += article.price * article.amount;
      });
      return sum;
    }
  }
};
</script>

<style scoped>

</style>

