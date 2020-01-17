import MathsUtils from "../../src/utils/MathsUtils.js";

describe("MathUtils.js", () => {
  describe("getRandomInt()", () => {
    it("get a random Int", () => {
      const min = 0;
      const max = 10;
      const randomInt = MathsUtils.getRandomInt(min, max);
      expect(randomInt >= 0 && randomInt < 10).toEqual(true);
    });
  });
});
