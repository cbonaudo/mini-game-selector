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
@import "./styles/global.css";
</style>