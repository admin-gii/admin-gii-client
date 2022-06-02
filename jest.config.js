/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: "<rootDir>/src/setupTests.ts"
};