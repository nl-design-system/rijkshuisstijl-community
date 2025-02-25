import { defineConfig } from 'vite';
import twig from 'vite-plugin-twig-drupal';
import { join } from 'node:path';

export default defineConfig({
  plugins: [
    // Support for Twig templates in Storybook with live reload and namespaces
    twig({
      namespaces: {
        nlds: join(__dirname, '../components-twig/src'),
      },
      framework: 'react',
    }),
  ],
});
