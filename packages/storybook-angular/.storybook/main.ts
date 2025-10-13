import type { StorybookConfig } from '@storybook/angular';
import { getAbsolutePath } from '@rijkshuisstijl-community/internal-tooling/getAbsolutePath';

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
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-webpack5-compiler-babel'),
    getAbsolutePath('storybook-addon-pseudo-states'),
    '@whitespace/storybook-addon-html', // uses a CJS export, so we can't use getAbsolutePath here
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@storybook/addon-docs'),
  ],

  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },

  staticDirs: ['../../../proprietary/assets/src'],

  framework: {
    name: getAbsolutePath('@storybook/angular'),
    options: {},
  },
};
export default config;
