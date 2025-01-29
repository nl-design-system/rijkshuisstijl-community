import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/dist/'],
  //   extensionsToTreatAsEsm: ['.ts', '.tsx'],
  //   transform: {
  //     '^.+\\.[tj]sx?$': 'babel-jest',
  //   },
  //   transformIgnorePatterns: [
  //     '/node_modules/(?!@utrecht/component-library-react)',
  //   ],
  //   moduleNameMapper: {
  //     '^@utrecht/component-library-react$': '<rootDir>/node_modules/@utrecht/component-library-react/dist',
  //   },
  //   transform: {
  //     '^.+\\.tsx?$': 'babel-jest',
  //   },
};

export default createJestConfig(customJestConfig);
