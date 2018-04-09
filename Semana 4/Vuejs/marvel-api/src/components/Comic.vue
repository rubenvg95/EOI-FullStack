<template>
  <div class="comic">
      <div  v-for="data in comic" class="data" >
          <h1>{{data.title}}</h1>
          <br>
          <figure class="comicPicture">
                      <img class="comicPhoto" v-bind:src="data.thumbnail.path +'.'+data.thumbnail.extension" alt="foto de un comic">    
          </figure>
          <h2>Description</h2>
          <div class="description">
                      {{data.description}}
          </div>
        <h2>Creators</h2>
        <div v-for="creator in data.creators.items"  class="creator">
            {{creator.name}}
        </div>
        <h2>Stories</h2>
        <div v-for="story in data.stories.items" class="stories">
            <div class="story">
              {{story.name}}
            </div>
            </div>      
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Comic",
  data() {
    return {
      comic: [],
      comicid: ""
    };
  },

  created() {
    let comicId = this.$route.params.id;
    this.comicid = comicId;
    this.getData();
  },
  watch: {
    $route(to, from) {
      let userId = this.$route.params.id;
      this.loadUser(userId);
    }
  },
  methods: {
    getData() {
      let urlData =
        "http://gateway.marvel.com/v1/public/comics/" +
        this.comicid +
        "?apikey=6ef3b922bc46e09b42a15d3ffeabafba";
      axios
        .get(urlData)
        .then(response => {
          console.log(response.data.data.results);
          this.comic = response.data.data.results;
        })
        .catch(error => {
          console.log(error);
        });
      console.log(this.comic);
    }
  },
  computed: {},
  watch: {}
};
</script>

<style scoped>
.comic {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  margin-top: 60px;
  text-align: center;
}

.description{
  padding-top: 20px;
  text-align: left;
}
</style>
