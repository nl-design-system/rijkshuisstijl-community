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

export const outputGlobals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

const clientBanner = "'use client';";

const external = [/@babel\/runtime/, 'react-dom', 'react'];

const plugins = [
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

const createOutputConfig = (file, format, clientComponent) => ({
  file,
  format,
  sourcemap: true,
  globals: outputGlobals,
  banner: clientComponent ? clientBanner : undefined,
});

const createReactRollupConfig = ({ input, output }) => {
  return {
    input,
    output,
    external,
    plugins,
  };
};

export const createRollupConfig = (pkgJson, { clientComponent = false } = {}) => {
  const configs = [
    createReactRollupConfig({
      input: './src/index.ts',
      output: [
        createOutputConfig(pkgJson.module, 'esm', clientComponent),
        ...(pkgJson.main ? [createOutputConfig(pkgJson.main, 'cjs', clientComponent)] : []),
      ],
    }),
  ];

  if (pkgJson.exports?.['./no-side-effects']) {
    configs.push(
      createReactRollupConfig({
        input: './src/noSideEffects.ts',
        output: [createOutputConfig('./dist/noSideEffects.mjs', 'esm', clientComponent)],
      }),
    );
  }

  return configs;
};

export default createRollupConfig(packageJson, { clientComponent: true });
