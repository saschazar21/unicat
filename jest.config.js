const rootDir = '<rootDir>/setup';

module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '.s?css$': 'jest-css-modules',
  },
  setupFiles: [`${rootDir}/test-shim.js`, `${rootDir}/test-setup.js`],
  testMatch: ['**/*.test.(ts|tsx)'],
  transform: {
    '.tsx?$': 'ts-jest',
  },
  verbose: true,
};
