import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  mode: 'production',
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'RhcWebComponents',
      formats: ['es'],
      fileName: 'index',
    },
  },
  resolve: {
    alias: {
      react: 'preact',
      'react-dom': 'preact',
      'react/jsx-runtime': 'preact/jsx-runtime',
    },
  },
  plugins: [
    preact(),
    dts({
      entryRoot: 'src',
      insertTypesEntry: true,
      rollupTypes: true,
    }),
    visualizer({
      filename: './bundle-analysis.html',
    }),
  ],
});
