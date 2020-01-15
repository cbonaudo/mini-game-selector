export default class MathsUtils {
  static getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  static roundUp(numberToRoundUp, precision) {
    // Rounds up numberToRoundUp to the next number divisible by precision
    return Math.ceil(numberToRoundUp / precision) * precision;
  }
}
