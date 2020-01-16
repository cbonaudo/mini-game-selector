<template>
  <div class="hello">
    <h1>MINIATURE WARGAMING SELECTOR</h1>
    <h2>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h2>

    <button v-on:click="computeResult()">I WANNA FIGHT</button>

    <div class="selection">
      {{ `${selection.gameSystem.name} ${selection.subSystem.name} ${selection.points} ${selection.scenario.name}` }}
    </div>

    <div v-if="selection.gameSystem.description">
      {{ `- ${selection.gameSystem.description}` }}
    </div>
    
    <div v-if="selection.subSystem.description">
    {{ `- ${selection.subSystem.description}` }}
    </div>

    <div v-if="selection.scenario.description">
      {{ `- Scenario: ${selection.scenario.description}` }}
    </div>

    <div v-if="keyString">Share this key : {{ keyString }}</div>
  </div>
</template>

<script>
import MathsUtils from "../utils/MathsUtils";
import KeyUtils from "../utils/KeyUtils";
import { GameSystems } from "../data/GameSystems";
import { Scenarios } from "../data/Scenarios";
import { SubSystems } from "../data/SubSystems";

export default {
  name: "Selector",
  data() {
    return {
      selection: {
        gameSystem: { name: "", description: "" },
        points: "",
        scenario: { name: "", description: "" },
        subSystem: { name: "", description: ""},
      },
      keyString: "",
    };
  },
  methods: {
    computeResult() {
      const gameSystemIndex = MathsUtils.getRandomInt(0, GameSystems.length);
      this.selection.gameSystem = GameSystems[gameSystemIndex];

      const subSystemIndex = MathsUtils.getRandomInt(0, SubSystems.length);
      this.selection.subSystem = SubSystems[subSystemIndex];

      this.selection.points = MathsUtils.roundUp(MathsUtils.getRandomInt(100, 2000), 50);

      const scenarioIndex = MathsUtils.getRandomInt(0, Scenarios.length);
      this.selection.scenario = Scenarios[scenarioIndex];

      this.keyString = KeyUtils.generateKeyString();
    },
  },
};
</script>
