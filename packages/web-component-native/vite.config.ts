import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      // eslint-disable-next-line no-undef
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'RHWebComponents',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
    },
    sourcemap: true,
    minify: 'terser',
    target: 'esnext',
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
});
