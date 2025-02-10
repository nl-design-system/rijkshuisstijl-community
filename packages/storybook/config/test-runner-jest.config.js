import { getJestConfig } from '@storybook/test-runner';

const testRunnerConfig = getJestConfig();

export default {
  ...testRunnerConfig,
};
