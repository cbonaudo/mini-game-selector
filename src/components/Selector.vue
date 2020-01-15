<template>
  <div class="hello">
    <h1>MINIATURE WARGAMING SELECTOR</h1>
    <h2>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h2>
    <button v-on:click="computeResult()">I WANNA FIGHT</button>
    <div class="result">{{ result }}</div>
    <div v-if="keyString">Share this key : {{ keyString }}</div>
  </div>
</template>

<script>
import MathsUtils from "../utils/MathsUtils";
import KeyUtils from "../utils/KeyUtils";

export default {
  name: "Selector",
  data() {
    return {
      result: "",
      resultList: { gameSystems: "" },
      keyString: "",
      gameSystems: [
        {
          name: "Age Of Sigmar",
          description: "Games Workshop's official Fantasy miniatures wargame",
        },
        {
          name: "Warhammer 40.000",
          description: "Games Workshop's official Sci-Fi miniatures wargame",
        },
        {
          name: "Age Of Fantasy",
          description: "One Page Rules spin for Fantasy miniatures wargaming",
        },
        {
          name: "Grimdark Future",
          description: "One Page Rules spin on Sci-Fi miniatures wargaming",
        },
        {
          name: "One-Off Games",
          description: "One Page Rules miscellaneous miniatures games",
        },
      ],
    };
  },
  methods: {
    computeResult() {
      for (let category in this.resultList) {
        this.resultList[category] = this.getRandomValueIn(category);
      }
      this.getResultString();
      this.keyString = KeyUtils.generateKeyString(this.resultList);
    },
    getRandomValueIn(key) {
      // Get the name of a random index in the category defined by 'key'
      return this[key][MathsUtils.getRandomInt(this[key].length)].name;
    },
    getResultString() {
      this.result = `${this.resultList.gameSystems}`;
    },
  },
};
</script>
