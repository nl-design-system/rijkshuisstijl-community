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
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-webpack5-compiler-babel'),
    getAbsolutePath('storybook-addon-pseudo-states'),
    getAbsolutePath('@storybook/addon-themes'),
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
  docs: {
    autodocs: true,
  },
};
export default config;
