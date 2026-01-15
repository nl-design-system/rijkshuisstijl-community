/* eslint-disable no-undef */
import path from 'node:path';
import { defineConfig } from 'vite';

// Importer to handle webpack-style ~ prefix in Sass imports
// Based on https://github.com/nl-design-system/utrecht/blob/main/packages/build-utils-css/src/index.mjs
const webpackStyleImporter = {
  findFileUrl(url) {
    // Handle ~ imports
    if (url.startsWith('~')) {
      const normalizedUrl = url.slice(1); // Remove the ~ prefix
      try {
        // Resolve from node_modules
        const resolvedPath = path.resolve('node_modules', normalizedUrl);
        return new URL(`file://${resolvedPath}`);
      } catch (error) {
        console.warn(`Warning: Could not resolve ${url}`);
        return null;
      }
    }
    // Let Sass handle regular imports
    return null;
  },
};

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        loadPaths: ['node_modules'],
        importers: [webpackStyleImporter],
      },
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'), // Output folder for compiled CSS
    rollupOptions: {
      input: path.resolve(__dirname, 'index.scss'), // Entry point for SCSS
      output: {
        // Disable JS output and ensure only CSS is generated
        format: 'es',
        assetFileNames: 'index.css', // Ensure the CSS file gets the correct name
      },
    },
    cssCodeSplit: false, // Avoid splitting the CSS file into multiple parts
  },
});
