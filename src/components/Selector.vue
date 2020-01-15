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
      result: "",
      gameSystems: [
        {
          name: "Age Of Sigmar",
          description: "Games Workshop's official Fantasy miniatures wargame"
        },
        {
          name: "Warhammer 40.000",
          description: "Games Workshop's official Sci-Fi miniatures wargame"
        },
        {
          name: "Age Of Fantasy",
          description: "One Page Rules spin for Fantasy miniatures wargaming"
        },
        {
          name: "Grimdark Future",
          description: "One Page Rules spin on Sci-Fi miniatures wargaming"
        },
        {
          name: "One-Off Games",
          description: "One Page Rules miscellaneous miniatures games"
        }
      ]
    };
  },
  methods: {
    getResult() {
      const randomIndex = 0;
      this.result = `${this.gameSystems[randomIndex].name}`;
    }
  }
};
</script>
