import KeyUtils from "../../src/utils/KeyUtils.js";
import DataUtils from "../../src/utils/DataUtils.js";

const testData = [
  {
    key: "AOS-2000-NRM-FBO",

    selection: {
      gameSystem: DataUtils.getGameSystemByCode("AOS"),
      points: "2000",
      subSystem: DataUtils.getSubSystemByCode("NRM"),
      scenario: DataUtils.getScenarioByCode("FBO"),
    },
  },

  {
    key: "WAK-200-SKI-AHE",

    selection: {
      gameSystem: DataUtils.getGameSystemByCode("WAK"),
      points: "200",
      subSystem: DataUtils.getSubSystemByCode("SKI"),
      scenario: DataUtils.getScenarioByCode("AHE"),
    },
  },

  {
    key: "OOG-0-NRM-DEA",

    selection: {
      gameSystem: DataUtils.getGameSystemByCode("OOG"),
      points: "0",
      subSystem: DataUtils.getSubSystemByCode("NRM"),
      scenario: DataUtils.getScenarioByCode("DEA"),
    },
  },

  {
    key: "WAK-20500-APO-DEA",

    selection: {
      gameSystem: DataUtils.getGameSystemByCode("WAK"),
      points: "20500",
      subSystem: DataUtils.getSubSystemByCode("APO"),
      scenario: DataUtils.getScenarioByCode("DEA"),
    },
  },
];

describe("KeyUtils.js", () => {
  describe("generateKeyString()", () => {
    it("Get a key - Basic selection", () => {
      testData.forEach(element => {
        expect(KeyUtils.generateKeyString(element.selection)).toEqual(element.key);
      });
    });
  });

  describe("decodeKeyString()", () => {
    it("Decode a key - Basic selection", () => {
      testData.forEach(element => {
        expect(KeyUtils.decodeKeyString(element.key)).toEqual(element.selection);
      });
    });
  });
});
