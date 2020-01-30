<template>
  <div class="hello">
    <h1>MINIATURE WARGAMING SELECTOR</h1>
    <h2>WWWWWWWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGGGHHH!!!!!!!</h2>

    <div class="dropdown-list">
      <GameSystemDropdown />
      <ScenarioDropdown />
      <SubSystemDropdown />
    </div>

    <button v-on:click="computeResult()" class="generator">I WANNA FIGHT !</button>

    <div v-if="selection">
      <div v-if="selection.gameSystem.name" class="selection">
        {{
        `${selection.gameSystem.name} - ${selection.subSystem.name} - ${selection.points} Points - ${selection.scenario.name}`
        }}
      </div>

      <div v-if="selection.gameSystem.code">
        <img v-bind:src="getImg(selection.gameSystem.code)" class="game-system" />
      </div>

      <div
        v-if="selection.gameSystem.description"
        class="description"
      >{{ `- ${selection.gameSystem.description}` }}</div>

      <div
        v-if="selection.subSystem.description"
        class="description"
      >{{ `- ${selection.subSystem.description}` }}</div>

      <div
        v-if="selection.scenario.description"
        class="description"
      >{{ `- Scenario: ${selection.scenario.description}` }}</div>
    </div>

    <KeyString v-bind:keyString="keyString" />
  </div>
</template>

<script>
import MathsUtils from "../utils/MathsUtils";
import KeyUtils from "../utils/KeyUtils";
import DataUtils from "../utils/DataUtils";

import KeyString from "./shared/KeyString.vue";
import GameSystemDropdown from "./shared/dropdowns/GameSystemDropdown.vue";
import SubSystemDropdown from "./shared/dropdowns/SubSystemDropdown.vue";
import ScenarioDropdown from "./shared/dropdowns/ScenarioDropdown.vue";

import { filteredGameSystems } from "../data/GameSystems";
import { filteredScenarios } from "../data/Scenarios";
import { filteredSubSystems } from "../data/SubSystems";

export default {
  name: "Selector",
  components: {
    KeyString,
    GameSystemDropdown,
    SubSystemDropdown,
    ScenarioDropdown,
  },
  data() {
    let keyString = "";
    let selection = "";
    let uri = window.location.search.substring(1);

    const params = new URLSearchParams(uri);
    const keyParameter = params.get("key");

    if (keyParameter !== null) {
      keyString = keyParameter;
      selection = KeyUtils.decodeKeyString(keyString);
    }

    return {
      selection: selection,
      keyString: keyString,
    };
  },

  methods: {
    computeResult() {
      this.keyString = "AOS-2000-NRM-DEA";
      this.selection = KeyUtils.decodeKeyString(this.keyString);

      /* DRAWING A GAME SYSTEM */

      const gameSystemIndex = MathsUtils.getRandomInt(0, filteredGameSystems.length);
      this.selection.gameSystem = filteredGameSystems[gameSystemIndex];

      /* DRAWING A GAME SUB SYSTEM */

      const validSubSystems = filteredSubSystems.filter(subSystem => {
        return subSystem.gameSystemCode.includes(this.selection.gameSystem.code);
      });
      if (validSubSystems.length) {
        const subSystemIndex = MathsUtils.getRandomInt(0, validSubSystems.length);
        this.selection.subSystem = validSubSystems[subSystemIndex];
      } else {
        // Reseting the subSystem, otherwise we will get the previous one if there is no valid subSystem
        this.selection.subSystem = DataUtils.getSubSystemByCode("NRM");
        this.selection.points = "0";
      }

      /* DRAWING A MAXIMUM POINTS VALUE */

      if (this.selection.subSystem.minimumPoints > 0) {
        // Calculating the points using the values from the game sub-system
        const randomPoints = MathsUtils.getRandomInt(
          this.selection.subSystem.minimumPoints,
          this.selection.subSystem.maximumPoints
        );

        this.selection.points = MathsUtils.roundUp(randomPoints, this.selection.subSystem.pointsIncrement);
      }

      /* DRAWING A SCENARIO */

      const validScenarios = filteredScenarios.filter(scenario => {
        return (
          scenario.gameSystemCodes.includes(this.selection.gameSystem.code) &&
          scenario.subSystemCodes.includes(this.selection.subSystem.code)
        );
      });

      if (validScenarios.length) {
        const scenarioIndex = MathsUtils.getRandomInt(0, validScenarios.length);
        this.selection.scenario = validScenarios[scenarioIndex];
      } else {
        // Reseting the scenario, otherwise we will get the previous one if there is no valid scenario
        this.selection.scenario = DataUtils.getScenarioByCode("DEA");
      }

      /* GENERATING GAME KEY */

      this.keyString = KeyUtils.generateKeyString(this.selection);
    },

    getImg(logoUrl) {
      if (logoUrl) {
        return require(`../assets/${logoUrl}.png`);
      } else return "";
    },
  },
};
</script>
