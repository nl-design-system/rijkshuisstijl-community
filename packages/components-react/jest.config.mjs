/* eslint-env node */
import nextJest from 'next/jest.js';

// Next Jest config is great for Jest 27 + React + TypeScript, so let's use that as basis
const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/dist/'],
  transformIgnorePatterns: ['/node_modules/(?!(@nl-design-system-candidate.*|@utrecht.*))'],
  // Add resolver configuration
  moduleNameMapper: {
    '^@utrecht/component-library-react/dist/(.*)$': '<rootDir>/node_modules/@utrecht/component-library-react/dist/$1',
    '^@utrecht/component-library-react$': '<rootDir>/node_modules/@utrecht/component-library-react',
    '^@utrecht/data-badge-react$': '<rootDir>/node_modules/@utrecht/data-badge-react/dist',
  },
  // Add these settings for ES Module support
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  // transformIgnorePatterns: ['node_modules/(?!@utrecht/web-component-library-react)'],
};

export default createJestConfig(customJestConfig);
