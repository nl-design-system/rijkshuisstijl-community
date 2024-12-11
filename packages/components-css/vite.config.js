/* eslint-disable no-undef */
import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';

// Helper function to recursively find all SCSS files
function findScssFiles(dir) {
  const entries = {};

  function scan(directory) {
    const files = fs.readdirSync(directory);

    files.forEach((file) => {
      const fullPath = path.join(directory, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        scan(fullPath);
      } else if (file === 'index.scss') {
        // Create an entry name based on the directory structure
        const relativePath = path.relative(path.join(__dirname, 'src'), directory);
        const entryName = relativePath || 'main';
        entries[entryName] = fullPath;
      }
    });
  }

  scan(dir);
  return entries;
}

export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        ...findScssFiles(path.resolve(__dirname, 'src')),
        index: path.resolve(__dirname, 'index.scss'),
      },
      output: {
        format: 'es',
        assetFileNames: ({ name }) => {
          if (name === 'index') {
            return 'index.css';
          }
          return '[name].css';
        },
      },
    },
    cssCodeSplit: true,
  },
});
