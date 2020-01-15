<template>
  <div id="app">
    <Selector />
  </div>
</template>

<script>
import Selector from "./components/Selector.vue";

export default {
  name: "Mini Game Selector",
  components: {
    Selector
  }
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
}
.result {
  margin: 20px;
  font-size: 1.5em;
}
</style>
