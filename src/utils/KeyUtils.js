export default class KeyUtils {
  static generateKeyString(selection) {
    return [selection.gameSystem.code, selection.points, selection.subSystem.code, selection.scenario.code].join("-");
  }

  static decodeKeyString() {
    return { gameSystems: "WK", points: "100" };
  }
}
