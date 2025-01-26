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
  // Add resolver configuration
  moduleNameMapper: {
    '^@nl-design-system-candidate/(.*)$': '<rootDir>/node_modules/@nl-design-system-candidate/$1',
  },
  // Add these settings for ES Module support
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
};

export default createJestConfig(customJestConfig);
