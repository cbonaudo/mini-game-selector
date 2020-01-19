import DataUtils from "../../src/utils/DataUtils.js";
import { GameSystems } from "../../src/data/GameSystems.js";
import { SubSystems } from "../../src/data/SubSystems.js";
import { Scenarios } from "../../src/data/Scenarios.js";

describe("DataUtils.js", () => {
  describe("getGameSystemByCode()", () => {
    it("Check that we can get every game system", () => {
      GameSystems.forEach(element => {
        expect(DataUtils.getGameSystemByCode(element.code)).toEqual(element);
      });
    });

    it("Check that a wrong code throws an error", () => {
      try {
        DataUtils.getGameSystemByCode("WRONG");
        throw "getGameSystemByCode(’WRONG’) should throw an error";
      } catch (e) {
        expect(e).toEqual("No element matching WRONG was found");
      }
    });
  });

  describe("getSubSystemByCode()", () => {
    it("Check that we can get every sub system", () => {
      SubSystems.forEach(element => {
        expect(DataUtils.getSubSystemByCode(element.code)).toEqual(element);
      });
    });

    it("Check that a wrong code throws an error", () => {
      try {
        DataUtils.getSubSystemByCode("WRONG");
        throw "getSubSystemByCode(’WRONG’) should throw an error";
      } catch (e) {
        expect(e).toEqual("No element matching WRONG was found");
      }
    });
  });

  describe("getScenarioByCode()", () => {
    it("Check that we can get every scenario", () => {
      Scenarios.forEach(element => {
        expect(DataUtils.getScenarioByCode(element.code)).toEqual(element);
      });
    });

    it("Check that a wrong code throws an error", () => {
      try {
        DataUtils.getScenarioByCode("WRONG");
        throw "getScenarioByCode(’WRONG’) should throw an error";
      } catch (e) {
        expect(e).toEqual("No element matching WRONG was found");
      }
    });
  });

  describe("getGameSystemsByListOfCodes()", () => {
    it("Check that we get the list of gameSystems we want", () => {
      const gameSystemsCodes = ["AOS", "OOG", "WAK"];
      const expectedOutput = [
        DataUtils.getGameSystemByCode("AOS"),
        DataUtils.getGameSystemByCode("OOG"),
        DataUtils.getGameSystemByCode("WAK"),
      ];

      expect(DataUtils.getGameSystemsByListOfCodes(gameSystemsCodes)).toEqual(expectedOutput);
    });
  });

  describe("getSubSystemsByListOfCodes()", () => {
    it("Check that we get the list of subSystems we want", () => {
      const subSystemsCodes = ["SKI", "APO", "DTA"];
      const expectedOutput = [
        DataUtils.getSubSystemByCode("SKI"),
        DataUtils.getSubSystemByCode("APO"),
        DataUtils.getSubSystemByCode("DTA"),
      ];

      expect(DataUtils.getSubSystemsByListOfCodes(subSystemsCodes)).toEqual(expectedOutput);
    });
  });

  describe("getScenariosByListOfCodes()", () => {
    it("Check that we get the list of scenarios we want", () => {
      const scenarioCodes = ["FBO", "THU", "DEA"];
      const expectedOutput = [
        DataUtils.getScenarioByCode("FBO"),
        DataUtils.getScenarioByCode("THU"),
        DataUtils.getScenarioByCode("DEA"),
      ];

      expect(DataUtils.getScenariosByListOfCodes(scenarioCodes)).toEqual(expectedOutput);
    });
  });
});
