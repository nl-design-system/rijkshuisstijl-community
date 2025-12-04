import type { StorybookConfig } from '@storybook/react-vite';
import { dirname, join } from 'path';
// Utility to resolve the absolute path of a package needed in projects that use Yarn PnP or are set up within a monorepo
// https://storybook.js.org/docs/faq#how-do-i-fix-module-resolution-in-special-environments
export const getAbsolutePath = (value: string): string => dirname(require.resolve(join(value, 'package.json')));

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
