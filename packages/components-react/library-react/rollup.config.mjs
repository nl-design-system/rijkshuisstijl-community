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

const createPlugins = () => [
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
];

const createOutput = ({ cjsFile, esmFile, banner }) => [
  ...(cjsFile ? [{ file: cjsFile, format: 'cjs', sourcemap: true, globals: outputGlobals, banner }] : []),
  ...(esmFile ? [{ file: esmFile, format: 'esm', sourcemap: true, globals: outputGlobals, banner }] : []),
];

export const createRollupConfig = (pkgJson, options = {}) => {
  const entries = options.entries ?? [
    {
      input: 'src/index.ts',
      cjsFile: pkgJson.main,
      esmFile: pkgJson.module,
    },
  ];

  return entries.map(({ input, cjsFile, esmFile, banner }) => ({
    input,
    output: createOutput({ cjsFile, esmFile, banner }),
    external: [/@babel\/runtime/, 'react-dom', 'react'],
    plugins: createPlugins(),
  }));
};

export default createRollupConfig(packageJson, {
  entries: [
    {
      input: 'src/entrypoint/index.ts',
      cjsFile: packageJson.main,
      esmFile: packageJson.module,
      // banner: "'use client';",
    },
    {
      input: 'src/entrypoint/accordion.ts',
      cjsFile: './dist/accordion.cjs.js',
      esmFile: './dist/accordion.esm.js',
      banner: "'use client';",
    },
    {
      input: 'src/entrypoint/paragraph.ts',
      cjsFile: './dist/paragraph.cjs.js',
      esmFile: './dist/paragraph.esm.js',
    },
    {
      input: 'src/entrypoint/SkipLink.tsx',
      cjsFile: './dist/skiplink.cjs.js',
      esmFile: './dist/skiplink.esm.js',
    },
    {
      input: 'src/entrypoint/LanguageNavigation.tsx',
      cjsFile: './dist/languagenavigation.cjs.js',
      esmFile: './dist/languagenavigation.esm.js',
      banner: "'use client';",
    },
  ],
});
