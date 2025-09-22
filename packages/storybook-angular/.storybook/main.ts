import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    {
      directory: '../src/components',
      titlePrefix: 'Angular Components',
      files: '**/*.{stories.@(js|jsx|mjs|ts|tsx),mdx}',
    },
    {
      directory: '../src/templates',
      titlePrefix: 'Angular Templates',
      files: '**/*.{stories.@(js|jsx|mjs|ts|tsx),mdx}',
    },
  ],

  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-webpack5-compiler-babel',
    'storybook-addon-pseudo-states',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-themes',
    '@storybook/addon-docs',
  ],

  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },

  staticDirs: ['../../../proprietary/assets/src'],

  framework: {
    name: '@storybook/angular',
    options: {},
  },
};
export default config;
