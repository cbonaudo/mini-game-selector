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
import { GameSystems } from "../data/GameSystems";

export default {
  name: "Selector",
  data() {
    return {
      result: "",
    };
  },
  methods: {
    computeResult() {
      const randomIndexGameSystems = MathsUtils.getRandomInt(0, GameSystems.length);
      const randomNumberOfPoints = MathsUtils.roundUp(MathsUtils.getRandomInt(100, 2000), 50);

      this.result = `${GameSystems[randomIndexGameSystems].name} ${randomNumberOfPoints} points`;
      this.keyString = KeyUtils.generateKeyString();
    },
  },
};
</script>
