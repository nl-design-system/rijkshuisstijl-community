import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import type { StorybookConfig } from '@storybook/react-vite';

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },

  stories: [
    {
      directory: '../src/documentation',
      titlePrefix: 'Rijkshuisstijl Community',
      files: '**/*.{stories.@(js|jsx|ts|tsx),mdx}',
    },
    {
      directory: '../src/icon-sets',
      titlePrefix: 'Rijkshuisstijl Community',
      files: '**/*.{stories.@(js|jsx|ts|tsx),mdx}',
    },
    {
      directory: '../src/components-react',
      titlePrefix: 'React Components',
      files: '**/*.{stories.@(js|jsx|ts|tsx),mdx}',
    },
    {
      directory: '../src/web-components',
      titlePrefix: 'Web Components',
      files: '**/*.{stories.@(js|jsx|ts|tsx),mdx}',
    },
    {
      directory: '../src/components-twig',
      titlePrefix: 'Twig Components',
      files: '**/*.{stories.@(js|jsx|ts|tsx),mdx}',
    },
    {
      directory: '../src/templates',
      titlePrefix: 'React Templates',
      files: '**/*.{stories.@(js|jsx|ts|tsx),mdx}',
    },
  ],

  addons: [
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@etchteam/storybook-addon-status'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@whitespace/storybook-addon-html'),
    getAbsolutePath('storybook-addon-pseudo-states'),
  ],

  framework: getAbsolutePath('@storybook/react-vite'),
  staticDirs: ['../../../proprietary/assets/src'],

  refs: (_, { configType }) => ({
    angular: {
      title: 'Angular Storybook',
      url:
        configType === 'DEVELOPMENT'
          ? 'http://localhost:6008'
          : 'https://rijkshuisstijl-community-storybook-angular.vercel.app/',
    },
  }),
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
