<template>
  <div id="app">
    <header>
      <h1>
        <img class="logo" src="../static/images/marvel.svg" alt="" srcset="Logo Marvel">
      </h1>
    </header>
    <nav>
          <div class="ui-group-buttons">
                <router-link class="btn btn-primary btn-lg" to="/">Comics</router-link>
                <div class="or or-lg"></div>
                <router-link class="btn btn-success btn-lg" to="/Characters">Characters</router-link>
          </div>
    </nav>
    <main>
      <router-view/>
    </main>
    <footer>
      Aqui iría el navigator
    </footer>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  box-sizing: border-box;
}

body,
html {
  font-family: font, sans-serif;
  font-size: 16px;
  height: 100%;
  margin: 0;
  padding: 0;
  color: #fff;
  background: linear-gradient(180deg, #1f1f1f, #3a3a3a);
}

header {
  background-color: red;
  box-shadow: -3px -5px 1px 5px rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 50px;
  text-align: center;
}

.header h1 {
  align-self: center;
  position: relative;
}

.logo {
  vertical-align: middle;
  width: 50px;
}

a {
  text-decoration: none;
  text-emphasis: none;
  color: white;
}

button,
h1,
h2,
h3,
ul {
  font-size: inherit;
  margin: 0;
  padding: 0;
}

h1 {
  display: block;
  font-size: 2em;
  font-weight: bold;
}
h2 {
  display: block;
  font-size: 1em;
  font-weight: bold;
  text-decoration: underline
}

nav {
  padding: 20px;
  text-align: center;
}

nav a {
  border-style: solid;
  border: white;
  border-width: 2px;
}

footer {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #bd1023;
  bottom: 0;
  box-shadow: 0 -4px 20px 0 rgba(0, 0, 0, 0.75);
  left: 0;
  position: fixed;
  z-index: 2;
  height: 50px;
  align-items: center;
}

.ui-group-buttons .or {
  position: relative;
  float: left;
  width: 0.3em;
  height: 1.3em;
  z-index: 3;
  font-size: 12px;
}
.ui-group-buttons .or:before {
  position: absolute;
  top: 50%;
  left: 50%;
  content: "?";
  background-color: #5a5a5a;
  margin-top: -0.1em;
  margin-left: -0.9em;
  width: 1.8em;
  height: 1.8em;
  line-height: 1.55;
  color: #fff;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  border-radius: 500px;
  -webkit-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
.ui-group-buttons .or:after {
  position: absolute;
  top: 0;
  left: 0;
  content: " ";
  width: 0.3em;
  height: 2.84em;
  background-color: rgba(0, 0, 0, 0);
  border-top: 0.6em solid #5a5a5a;
  border-bottom: 0.6em solid #5a5a5a;
}
.ui-group-buttons .or.or-lg {
  height: 1.3em;
  font-size: 16px;
}
.ui-group-buttons .or.or-lg:after {
  height: 2.85em;
}
.ui-group-buttons .or.or-sm {
  height: 1em;
}
.ui-group-buttons .or.or-sm:after {
  height: 2.5em;
}
.ui-group-buttons .or.or-xs {
  height: 0.25em;
}
.ui-group-buttons .or.or-xs:after {
  height: 1.84em;
  z-index: -1000;
}
.ui-group-buttons {
  display: inline-block;
  vertical-align: middle;
}
.ui-group-buttons:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.ui-group-buttons .btn {
  float: left;
  border-radius: 0;
}
.ui-group-buttons .btn:first-child {
  margin-left: 0;
  border-top-left-radius: 0.25em;
  border-bottom-left-radius: 0.25em;
  padding-right: 15px;
}
.ui-group-buttons .btn:last-child {
  border-top-right-radius: 0.25em;
  border-bottom-right-radius: 0.25em;
  padding-left: 15px;
}

main{
  padding-bottom: 80px;
}
</style>
