export const SubSystems = [
  {
    name: "Skirmish",
    description: "Modifications to the standard rules for intense fights between small warbands.",
    code: "SKI",
    gameSystemCode: ["AOS", "AOF", "WAK", "GRF"],
    minimumPoints: 50,
    maximumPoints: 750,
    pointsIncrement: 25,
  },
  {
    name: "Normal",
    description: "Vanilla rules for fights between regular army.",
    code: "NRM",
    gameSystemCode: ["AOS", "AOF", "WAK", "GRF"],
    minimumPoints: 500,
    maximumPoints: 3000,
    pointsIncrement: 50,
  },
  {
    name: "Apocalypse",
    description: "OH MY GOD TAKE ALL YOUR MODELS AND PUT THEM ON THE BIGGEST TABLE YOU GET.",
    code: "APO",
    gameSystemCode: ["WAK"],
    minimumPoints: 3000,
    maximumPoints: 30000,
    pointsIncrement: 100,
  },
];
