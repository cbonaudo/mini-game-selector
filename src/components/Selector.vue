<template>
  <div class="hello">
    <h1>MINIATURE WARGAMING SELECTOR</h1>
    <h2>WWWWWWWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGGGHHH!!!!!!!</h2>

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

    <div class="key-string" v-if="keyString">Share this key : {{ keyString }}</div>
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
        subSystem: { name: "", description: "", minimumPoints: -1, maximumPoints: -1, pointsIncrement: -1 },
      },
      keyString: "",
    };
  },
  methods: {
    computeResult() {
      const gameSystemIndex = MathsUtils.getRandomInt(0, GameSystems.length);
      this.selection.gameSystem = GameSystems[gameSystemIndex];

      const validSubSystems = SubSystems.filter(subSystem => {
        return subSystem.gameSystemCode.includes(this.selection.gameSystem.code);
      });
      if (validSubSystems.length) {
        const subSystemIndex = MathsUtils.getRandomInt(0, validSubSystems.length);
        this.selection.subSystem = validSubSystems[subSystemIndex];
      } else {
        // Reseting the subSystem, otherwise we will get the previous one if there is no valid subSystem
        this.selection.subSystem = {
          name: "",
          description: "",
          minimumPoints: -1,
          maximumPoints: -1,
          pointsIncrement: -1,
        };
        this.selection.points = "";
      }

      if (this.selection.subSystem.minimumPoints > 0) {
        // Calculating the points using the values from the game sub-system
        const randomPoints = MathsUtils.getRandomInt(
          this.selection.subSystem.minimumPoints,
          this.selection.subSystem.maximumPoints
        );
        this.selection.points = MathsUtils.roundUp(randomPoints, this.selection.subSystem.pointsIncrement);
      }

      const scenarioIndex = MathsUtils.getRandomInt(0, Scenarios.length);
      this.selection.scenario = Scenarios[scenarioIndex];

      this.keyString = KeyUtils.generateKeyString();
    },
  },
};
</script>
