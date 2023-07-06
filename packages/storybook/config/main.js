/* eslint-env node */
module.exports = {
  stories: ['../../../documentation/**/*stories.@(js|jsx|mdx|ts|tsx)', '../src/**/*stories.@(js|jsx|mdx|ts|tsx)'],
  addons: [
    '@etchteam/storybook-addon-status/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-docs',
    '@storybook/addon-viewport/register',
    '@storybook/preset-scss',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: true,
  },
  features: {
    postcss: false,
    buildStoriesJson: true,
    storyStoreV7: true,
    babelModeV7: true,
  },
  staticDirs: ['../../../proprietary/assets/src'],
  webpackFinal: async (config) => ({
    ...config,
    performance: {
      // Disable warning for: "asset size exceeds the recommended limit (244 KiB)"
      hints: false,
    },
  }),
};
