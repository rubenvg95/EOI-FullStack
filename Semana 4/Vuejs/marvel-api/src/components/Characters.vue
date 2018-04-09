<template>
<div class="container">
    <div class="buscador">
    <input class="buscadorCharacters" type="text" placeholder="Character to find" v-model="characterStart" @keyup.enter="getData">
    <button class="buscarCharacter" @click="getData">Find!</button>
    </div>
    <div class="whereAmI">
    <h1>Estas en Characters</h1>
    </div>
    <div class="characters">
        <div v-for="character in characters" class="character">
                <img class="characterPhoto" v-bind:src="character.thumbnail.path +'.'+character.thumbnail.extension" alt="foto de un personaje">    
                <div class="characterTitle">
                    <span class="title">{{character.name}}</span>
                </div>
        </div>
    </div>
</div>

</template>

<script>
import axios from "axios";
export default {
  name: "Characters",
  data() {
    return {
      characters: [],
      newCharacter: {
        id: "",
        title: "",
        thumbnail: ""
      },
      characterStart: "Thor"
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let urlData =
        "http://gateway.marvel.com/v1/public/characters?nameStartsWith=" +
        this.characterStart +
        "&apikey=6ef3b922bc46e09b42a15d3ffeabafba";
      var character = localStorage.getItem(this.name+""+this.characterStart);
      if (character != null) {
        this.characters = JSON.parse(character);
      } else {
        axios
          .get(urlData)
          .then(response => {
            localStorage.setItem(
              this.name+""+this.characterStart,
              JSON.stringify(response.data.data.results)
            );
            this.characters = response.data.data.results;
          })
          .catch(error => {
            console.log(error);
          });
      }
      console.log(this.characters);
    }
  },
  computed: {},
  watch: {}
};
</script>

<style scoped>

.characters {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
}

.character {
  width: 100%;
}

.characterPhoto {
  width: 100%;
}

.character {
  background-color: red;
}

.buscador {
  display: grid;
  grid-template-columns: 90% 10%;
}
.buscadorCharacters {
  grid-column: 1/2;
  width: 100%;
  padding: 15px;
}

.buscarCharacter {
  grid-column: 2/3;
  width: 100%;
  padding: 15px;
}

.whereAmI {
  text-align: center;
  padding: 5px;
}
</style>
