import { SubSystems } from "../data/SubSystems";
import { Scenarios } from "../data/Scenarios";
import { GameSystems } from "../data/GameSystems";

export default class DataUtils {
  static getDataByCode = function(dataType, code) {
    const wantedData = dataType.find(element => element.code === code);

    if (wantedData === undefined) {
      throw `No element matching ${code} was found`;
    }

    return wantedData;
  };

  static getGameSystemByCode(gameSystemCode) {
    return DataUtils.getDataByCode(GameSystems, gameSystemCode);
  }

  static getSubSystemByCode(subSystemCode) {
    return DataUtils.getDataByCode(SubSystems, subSystemCode);
  }

  static getScenarioByCode(scenarioCode) {
    return DataUtils.getDataByCode(Scenarios, scenarioCode);
  }
}
