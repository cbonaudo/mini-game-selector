<template>
  <div id="app">
    <Selector />
  </div>
</template>

<script>
import Selector from "./components/Selector.vue";

export default {
  name: "mini-game-selector",
  components: {
    Selector,
  },
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
button {
  height: 40px;
  width: 200px;
  font-size: 1.5em;
  border-radius: 5px;
}
.selection {
  margin: 20px;
  font-size: 1.5em;
}
.key-string {
  margin: auto;
  margin-top: 40px;
  padding: 5px 15px;
  border-radius: 5px;
  background-color: lightgrey;
  width: fit-content;
}
</style>
