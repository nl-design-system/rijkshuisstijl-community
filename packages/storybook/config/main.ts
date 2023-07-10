/* eslint-env node */
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  stories: ['../../../documentation/**/*stories.@(js|jsx|mdx|ts|tsx)', '../src/**/*stories.@(js|jsx|mdx|ts|tsx)'],
  addons: [
    '@etchteam/storybook-addon-status/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-docs',
    '@storybook/addon-viewport/register',
    '@storybook/preset-scss',
    '@storybook/addon-mdx-gfm',
  ],
  framework: '@storybook/react-vite',
  features: {
    buildStoriesJson: true,
    storyStoreV7: true,
  },
  staticDirs: ['../../../proprietary/assets/src'],
  docs: {
    autodocs: true,
  },
};

export default config;
