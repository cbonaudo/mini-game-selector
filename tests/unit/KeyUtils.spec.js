import KeyUtils from "../../src/utils/KeyUtils.js";

const testData = [
  {
    key: "AOS-2000-NRM-FBO",

    selection: {
      gameSystem: {
        name: "Age Of Sigmar",
        code: "AOS",
        description: "Games Workshop's official Fantasy miniatures wargame",
      },

      points: "2000",

      subSystem: {
        name: "Normal",
        description: "Vanilla rules for fights between regular armies.",
        code: "NRM",
        gameSystemCode: ["AOS", "AOF", "WAK", "GRF"],
        minimumPoints: 500,
        maximumPoints: 3000,
        pointsIncrement: 50,
      },

      scenario: {
        name: "First Blood",
        description: "The player that dealt the most damage wins",
        code: "FBO",
        gameSystemCodes: ["AOS", "AOF"],
        subSystemCodes: ["NRM"],
      },
    },
  },

  {
    key: "WAK-200-SKI-AHE",

    selection: {
      gameSystem: {
        name: "Warhammer 40.000",
        code: "WAK",
        description: "Games Workshop's official Sci-Fi miniatures wargame",
      },

      points: "200",

      subSystem: {
        name: "Skirmish",
        description: "Modifications to the standard rules for intense fights between small warbands.",
        code: "SKI",
        gameSystemCode: ["AOS", "AOF", "WAK", "GRF"],
        minimumPoints: 50,
        maximumPoints: 750,
        pointsIncrement: 25,
      },

      scenario: {
        name: "A Time For Heroes",
        description: "Simple Deathmatch-like scenario",
        code: "AHE",
        gameSystemCodes: ["AOS", "AOF"],
        subSystemCodes: ["SKI"],
      },
    },
  },
];

describe("KeyUtils.js", () => {
  describe("generateKeyString()", () => {
    xit("Get a key - Basic selection", () => {
      testData.forEach(element => {
        expect(KeyUtils.generateKeyString(element.selection)).toEqual(element.key);
      });
    });
  });

  describe("decodeKeyString()", () => {
    xit("Decode a key - Basic selection", () => {
      testData.forEach(element => {
        expect(KeyUtils.decodeKeyString(element.key)).toEqual(element.selection);
      });
    });
  });
});
