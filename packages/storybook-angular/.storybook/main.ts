import type { StorybookConfig } from '@storybook/angular';

import { join, dirname } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
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
    getAbsolutePath('@whitespace/storybook-addon-html'),
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
