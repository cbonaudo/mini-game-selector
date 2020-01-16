<template>
  <div class="hello">
    <h1>MINIATURE WARGAMING SELECTOR</h1>
    <h2>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h2>

    <button v-on:click="computeResult()">I WANNA FIGHT</button>
    <div class="selection">{{ `${selection.gameSystem} ${selection.points}` }}</div>
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
      selection: {
        gameSystem: "",
        points: "",
      },
      keyString: "",
    };
  },
  methods: {
    computeResult() {
      const gameSystemIndex = MathsUtils.getRandomInt(0, GameSystems.length);
      this.selection.gameSystem = GameSystems[gameSystemIndex].name;

      this.selection.points = MathsUtils.roundUp(MathsUtils.getRandomInt(100, 2000), 50);

      this.keyString = KeyUtils.generateKeyString();
    },
  },
};
</script>
