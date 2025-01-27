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
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/dist/'],
  moduleNameMapper: {
    '^@utrecht/component-library-react': '<rootDir>/node_modules/@utrecht/component-library-react/dist/index.d.ts',
  },
  transformIgnorePatterns: ['node_modules/(?!@utrecht/component-library-react)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};

export default createJestConfig(customJestConfig);
