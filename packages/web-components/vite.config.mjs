import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

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
    dedupe: ['preact', 'preact/compat', 'preact/jsx-runtime'],
  },
  plugins: [
    preact(),
    dts({
      entryRoot: 'src',
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
});
