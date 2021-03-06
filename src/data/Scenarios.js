export const Scenarios = [
  {
    name: "Deathmatch",
    description: "Destroy your ennemy",
    code: "DEA",
    gameSystemCodes: ["AOS", "AOF", "WAK", "GRF", "OOG"],
    subSystemCodes: ["NRM", "SKI", "APO"],
  },
  {
    name: "A Time For Heroes",
    description: "Simple Deathmatch-like scenario",
    code: "AHE",
    gameSystemCodes: ["AOS", "AOF"],
    subSystemCodes: ["SKI"],
  },
  {
    name: "Dangerous Hunt",
    description: "Fight for the control of a powerful spell",
    code: "DHU",
    gameSystemCodes: ["AOS", "AOF"],
    subSystemCodes: ["SKI"],
  },
  {
    name: "Treasure Hunt",
    description: "Race to be the army that ends up with more treasures than its opponent",
    code: "THU",
    gameSystemCodes: ["AOS", "AOF"],
    subSystemCodes: ["SKI"],
  },
  {
    name: "The Ritual",
    description: "A player tries to complete a grim ritual, while the other one must stop him at all costs",
    code: "TRI",
    gameSystemCodes: ["AOS", "AOF"],
    subSystemCodes: ["SKI"],
  },
  {
    name: "Hold The Centre",
    description: "Fight to control several objectives",
    code: "HCE",
    gameSystemCodes: ["AOS", "AOF"],
    subSystemCodes: ["SKI"],
  },
  {
    name: "Clash At Dawn",
    description: "One army stands its ground, facing an enemy coming out of the fog of war",
    code: "CDA",
    gameSystemCodes: ["AOS", "AOF"],
    subSystemCodes: ["SKI"],
  },
  {
    name: "Sweeping Assault",
    description: "Fight to steal your opponent’s objectives",
    code: "SAS",
    gameSystemCodes: ["AOS", "AOF"],
    subSystemCodes: ["SKI"],
  },
  {
    name: "First Blood",
    description: "The player that dealt the most damage wins",
    code: "FBO",
    gameSystemCodes: ["AOS", "AOF"],
    subSystemCodes: ["NRM"],
  },
];

export let filteredScenarios = Scenarios;
