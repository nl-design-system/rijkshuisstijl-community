import type { StorybookConfig } from '@storybook/react-vite';

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
    '@chromatic-com/storybook',
    '@etchteam/storybook-addon-status',
    '@storybook/addon-a11y',
    '@storybook/addon-controls',
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
