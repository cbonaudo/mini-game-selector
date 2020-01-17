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
.generator {
  background-image: url("./assets/generator.png");
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  width: 300px;
  height: 87px;
  cursor: pointer;

  text-align: center;
  color: white;
  font-size: 1.5em;
  border-radius: 5px;
}

.generator:hover {
  transition: all .2s ease-in-out;
  transform: scale(1.1);
  font-size: 1.6em;
  color: yellowgreen;
}
.selection {
  margin: 20px;
  font-size: 1.5em;
}
img.game-system {
  margin: 30px;
  width: 380px;
  height: auto;
}
.description {
  margin-bottom: 10px;
}
.key-string {
  margin: auto;
  width: fit-content;
  margin-top: 40px;
  padding: 5px 15px;
  border-radius: 10px;
  background-color: lightgrey;
}
</style>
