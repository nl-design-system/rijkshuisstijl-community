import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'RhcWebComponents',
      formats: ['es'],
      fileName: 'index',
    },
    sourcemap: true,
    minify: 'terser',
    target: 'esnext',
  },
  plugins: [
    react(),
    dts({
      entryRoot: 'src',
      insertTypesEntry: true,
      rollupTypes: true,
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'types/*.d.ts',
          dest: 'types',
        },
      ],
    }),
  ],
});
