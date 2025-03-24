import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  stories: ['../src/**/*stories.@(js|jsx|ts|tsx)', '../src/**/*.mdx'],
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
  refs: (config, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      return {
        angular: {
          title: 'Angular',
          url: 'http://localhost:6008',
        },
      };
    }
    return {
      //TODO Angular production URL
      angular: {
        title: 'Angular',
        url: 'http://localhost:6008',
      },
    };
  },
};

export default config;
