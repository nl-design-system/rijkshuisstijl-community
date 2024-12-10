import type { StorybookConfig } from '@storybook/react-vite';
import custom from './webpack.config.js';

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  stories: ['../src/**/*stories.@(js|jsx|ts|tsx)', '../src/**/*.mdx'],
  webpackFinal: async (config: { module: { rules: any } }) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          ...custom.module.rules
        ]
      },
    };
  },
  addons: [
    '@chromatic-com/storybook',
    '@etchteam/storybook-addon-status',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-themes',
    '@storybook/addon-viewport',
    '@whitespace/storybook-addon-html',
    'storybook-addon-pseudo-states',
  ],
  framework: '@storybook/react-vite',
  staticDirs: ['../../../proprietary/assets/src'],
  docs: {
    autodocs: true,
  },
};

export default config;
