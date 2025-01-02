const { getJestConfig } = require('@storybook/test-runner');

const testRunnerConfig = getJestConfig();

export default {
  ...testRunnerConfig,
};
