// component-css/vite.config.ts
import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // eslint-disable-next-line no-undef
    outDir: path.resolve(__dirname, 'dist'), // Output folder for compiled CSS
    rollupOptions: {
      // eslint-disable-next-line no-undef
      input: path.resolve(__dirname, 'index.scss'), // Entry point for SCSS
      output: {
        // Disable JS output and ensure only CSS is generated
        format: 'es', // Use ES module output for the CSS
        assetFileNames: 'index.css', // Ensure the CSS file gets the correct name
      },
    },
    cssCodeSplit: false, // Avoid splitting the CSS file into multiple parts
  },
});
