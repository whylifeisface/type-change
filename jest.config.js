/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',  

  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx"
],
moduleNameWrapper: {
    '^@APP/(.*)$': '<rootDir>/src/baseTs/$1'
},
collectCoverageFrom: {
    "**/baseTs/upperFirst.ts",
    "**/baseTs/camelCase.ts",
    "!**/node_modules/**",
    "!**/vendor/**"
}


};
