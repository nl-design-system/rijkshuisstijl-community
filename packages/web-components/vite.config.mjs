import react from '@vitejs/plugin-react';
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
  plugins: [
    react(),
    dts({
      entryRoot: 'src',
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
});
