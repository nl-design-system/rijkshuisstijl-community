import type { StorybookConfig } from '@storybook/react-vite';
import { getAbsolutePath } from '@rijkshuisstijl-community/internal-tooling/getAbsolutePath';

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
