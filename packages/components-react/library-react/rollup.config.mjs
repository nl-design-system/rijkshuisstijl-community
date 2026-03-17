import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { readFileSync } from 'node:fs';
import filesize from 'rollup-plugin-filesize';
import nodeExternal from 'rollup-plugin-node-externals';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'));

// rollup.config.js
/**
 * @type {import('rollup').RollupOptions}
 */

export const outputGlobals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

export const createRollupConfig = (pkgJson) => [
  {
    input: 'src/index.ts',
    output: [
      ...(pkgJson.main ? [{ file: pkgJson.main, format: 'cjs', sourcemap: true, globals: outputGlobals }] : []),
      {
        file: pkgJson.module,
        format: 'esm',
        sourcemap: true,
        globals: outputGlobals,
      },
    ],
    external: [/@babel\/runtime/, 'react-dom', 'react'],
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
        presets: ['@babel/preset-react'],
        babelHelpers: 'runtime',
        exclude: ['node_modules/**', 'dist/**'],
        extensions: ['.ts', '.tsx'],
        inputSourceMap: true,
        plugins: ['@babel/plugin-transform-runtime'],
      }),
      filesize(),
      postcss(),
    ],
  },
];

export default createRollupConfig(packageJson);
