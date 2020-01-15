<template>
  <div class="hello">
    <h1>MINIATURE WARGAMING SELECTOR</h1>
    <h2>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h2>
    <button v-on:click="getResult()">I WANNA FIGHT</button>
    <div class="result">{{ result }}</div>
  </div>
</template>

<script>
export default {
  name: "Selector",
  data() {
    return {
      result: ""
    };
  },
  methods: {
    getResult() {
      this.result = "AoS Skirmish, CTF - 1072 pts";
    }
  }
};
</script>
