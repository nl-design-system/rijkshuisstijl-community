/* eslint-disable no-undef */
import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
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
