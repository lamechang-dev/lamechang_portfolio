const nextJest = require("next/jest.js");

const createJestConfig = nextJest({ dir: "./" });

/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  testRegex: "(/tests/.*|(\\.|/)(test))\\.(jsx?|tsx?)$",
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/src/jest.setup.ts"],
};

module.exports = createJestConfig(config);
