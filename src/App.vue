<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}

var gameSystems = [
  {"name": "Age Of Sigmar", "description": "Games Workshop's official Fantasy miniatures wargame"},
  {"name": "Warhammer 40.000", "description": "Games Workshop's official Sci-Fi miniatures wargame"},
  {"name": "Age Of Fantasy", "description": "One Page Rules spin for Fantasy miniatures wargaming"},
  {"name": "Grimdark Future", "description": "One Page Rules spin on Sci-Fi miniatures wargaming"},
  {"name": "One-Off Games", "description": "One Page Rules miscellaneous miniatures games"},
]
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
