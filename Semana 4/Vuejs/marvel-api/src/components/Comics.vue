<template>
    <div  class="container">
        <div class="buscador">
            <input v-model="titleStart" class="buscadorComics" type="text" placeholder="Comics to find" @keyup.enter="getData">
            <button class="buscarComic" @click="getData">Find!</button>
        </div>
        <div class="whereAmI">
            <h1>Estas en Comics</h1>
        </div>
<div class="comics">
        <div v-for="comic in comics" class="comic">
            <router-link :to="'/Comic/' + comic.id">
                <img class="comicPhoto" v-bind:src="comic.thumbnail.path +'.'+comic.thumbnail.extension" alt="foto de un comic">    
                <div class="comicTitle">
                    <span class="title">{{comic.title}}</span>
                </div>
           </router-link>
        </div>
            </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Comics",
  data() {
    return {
      comics: [],
      newComic: {
        id: "",
        title: "",
        thumbnail: ""
      },
      titleStart: "avengers"
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let urlData =
        "http://gateway.marvel.com/v1/public/comics?titleStartsWith=" +
        this.titleStart +
        "&apikey=6ef3b922bc46e09b42a15d3ffeabafba";
      var comic = localStorage.getItem(this.name+""+this.titleStart);
      if (comic != null) {
        this.comics = JSON.parse(comic);
      } else {
      axios
        .get(urlData)
        .then(response => {
          localStorage.setItem(
            this.name+""+this.titleStart,
            JSON.stringify(response.data.data.results)
          );
          this.comics = response.data.data.results;
        })
        .catch(error => {
          console.log(error);
        });
      }
      console.log(this.comics);
    }
  },
  computed: {},
  watch: {}
};
</script>

<style scoped>
.comics {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
}

.comicPhoto {
  width: 100%;
}

.comic {
  background-color: red;
}

.buscador {
  display: grid;
  grid-template-columns: 90% 10%;
}
.buscadorComics {
  grid-column: 1/2;
  width: 100%;
  padding: 15px;
}

.buscarComic {
  grid-column: 2/3;
  width: 100%;
  padding: 15px;
}

.whereAmI {
  text-align: center;
  padding: 5px;
}

.comicTitle {
  height: 60px;
}
</style>
