import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import nodeExternal from 'rollup-plugin-node-externals';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy';

// rollup.config.js
/**
 * @type {import('rollup').RollupOptions}
 */

export default [
  {
    input: 'src/icon-sets/default-icons/icon-set.ts',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        sourcemap: true,
      },
      {
        dir: 'dist',
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: [/@babel\/runtime/],
    plugins: [
      peerDepsExternal({ includeDependencies: true }),
      nodeExternal(),
      resolve({ browser: true }),
      commonjs({
        include: /node_modules/,
      }),
      nodePolyfills(),
      typescript({
        includeDependencies: false,
        tsconfig: process.env.APP_ENV === 'dev' ? './tsconfig.dev.json' : './tsconfig.json',
      }),
      babel({
        presets: ['@babel/preset-typescript'],
        babelHelpers: 'runtime',
        exclude: ['node_modules/**', 'dist/**'],
        extensions: ['.ts', '.tsx'],
        inputSourceMap: true,
        plugins: ['@babel/plugin-transform-runtime'],
      }),
      filesize(),
      postcss(),
      copy({
        targets: [{ src: 'src/**/*.twig', dest: 'dist' }],
      }),
    ],
  },
];
