import DataUtils from "../../src/utils/DataUtils.js";

export default class KeyUtils {
  static generateKeyString(selection) {
    let selectionList = [selection.gameSystem.code];

    if (selection.points) {
      selectionList.push(selection.points);
    } else {
      selectionList.push("0");
    }

    if (selection.subSystem) {
      selectionList.push(selection.subSystem.code);
    } else {
      selectionList.push("NRM");
    }

    if (selection.scenario) {
      selectionList.push(selection.scenario.code);
    } else {
      selectionList.push("DEA");
    }

    return selectionList.join("-");
  }

  static decodeKeyString(key) {
    const selectionList = key.split("-");

    const selection = {
      gameSystem: DataUtils.getGameSystemByCode(selectionList[0]),
      points: selectionList[1],
      subSystem: DataUtils.getSubSystemByCode(selectionList[2]),
      scenario: DataUtils.getScenarioByCode(selectionList[3]),
    };

    return selection;
  }
}
