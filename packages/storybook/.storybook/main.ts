import type { StorybookConfig } from '@storybook/react-vite';
import { dirname, join, resolve } from 'path';

// Utility to resolve the absolute path of a package
// https://storybook.js.org/docs/faq#how-do-i-fix-module-resolution-in-special-environments
const getAbsolutePath = (value: string): string => dirname(require.resolve(join(value, 'package.json')));

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
    '@whitespace/storybook-addon-html',
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  staticDirs: [getAbsolutePath('../../../proprietary/assets/src')],
  viteFinal: async (config) => {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      define: {
        global: 'globalThis',
        'process.env': {},
      },
      resolve: {
        alias: {
          '~@utrecht': resolve(__dirname, '../node_modules/@utrecht'),
          path: require.resolve('path-browserify'),
        },
      },
      assetsInclude: ['**/*.md'],
      css: {
        preprocessorOptions: {
          scss: {
            // Temporary fix for the SCSS @import deprecation in Storybook 9
            // Remove once all @utrecht packages have been migrated to @use
            silenceDeprecations: ['import'],
            includePaths: [resolve(__dirname, '../node_modules/@utrecht')],
          },
        },
      },
    });
  },

  // refs: (_, { configType }) => ({
  //   angular: {
  //     title: 'Angular Storybook',
  //     url:
  //       configType === 'DEVELOPMENT'
  //         ? 'http://localhost:6008'
  //         : 'https://rijkshuisstijl-community-storybook-angular.vercel.app/',
  //   },
  // }),
};

export default config;
