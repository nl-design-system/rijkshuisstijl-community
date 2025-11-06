import { defineConfig } from 'vite';
import twig from 'vite-plugin-twig-drupal';
import { join } from 'node:path';

export default defineConfig({
  plugins: [
    // Support for Twig templates in Storybook with live reload and namespaces
    twig({
      namespaces: {
        rhc: join(__dirname, '../components-twig/src'),
      },
      framework: 'react',
    }),
  ],
  // Force inclusion of addon-docs to avoid issues with it being excluded in the build
  viteFinal: (config) => {
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
      '@storybook/addon-docs',
      '@storybook/addon-docs/blocks',
    ];
    return config;
  },
  resolve: {
    // we set the rhc:source so that the react package resolves directly to the source files for development in this monorepo
    conditions: ['rhc:source', 'import', 'require', 'default'],
  },
});
