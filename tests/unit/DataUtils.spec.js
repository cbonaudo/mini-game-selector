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
});
