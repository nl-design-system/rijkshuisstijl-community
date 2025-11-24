import type { StorybookConfig } from '@storybook/react-vite';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// Utility to resolve the absolute path of a package needed in projects that use Yarn PnP or are set up within a monorepo
// https://storybook.js.org/docs/faq#how-do-i-fix-module-resolution-in-special-environments
const getAbsolutePath = (packageName: string) =>
  dirname(fileURLToPath(import.meta.resolve(`${packageName}/package.json`)));

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
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
      directory: '../src/components-css',
      titlePrefix: 'CSS Components',
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
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('storybook-addon-pseudo-states'),
    '@whitespace/storybook-addon-html', // uses a CJS export, so we can't use getAbsolutePath here
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
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
