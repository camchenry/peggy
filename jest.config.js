"use strict";

module.exports = {
  "collectCoverage": true,
  "coverageReporters": ["lcov", "text"],
  "coveragePathIgnorePatterns": [
    "<rootDir>/node_modules/",
    "<rootDir>/test",
  ],
  "roots": [
    "<rootDir>/test",
    "<rootDir>/docs/test",
  ],
  "testMatch": [
    "**/*.spec.js",
    "**/*.spec.ts",
    "**/*.test-d.ts",
  ],
  "transform": {
    "^.+\\.ts$": "ts-jest",
  },
};
