// eslint-disable-next-line no-undef
const { readFile } = require('node:fs/promises');

const stringSort = (a, b) => (a === b ? 0 : a > b ? 1 : -1);

const sortByName = (a, b) => stringSort(a.name, b.name);

const createConfig = ({ selector, source = ['src/**/tokens.json', 'src/**/*.tokens.json'] }) => {
  const prefix = selector.replace(/^\.(.+)-theme/, '$1');
  const themeName = `${prefix}-theme`;

  return {
    hooks: {
      formats: {
        'json/list': function ({ dictionary }) {
          return JSON.stringify(dictionary.allTokens.sort(sortByName), null, '  ');
        },
      },
    },
    source,
    platforms: {
      js: {
        transformGroups: 'tokens-studio',
        transforms: ['name/camel', 'color/hsl-4'],
        buildPath: 'dist/',
        files: [
          {
            destination: 'variables.cjs',
            format: 'javascript/module-flat',
          },
          {
            destination: 'variables.mjs',
            format: 'javascript/es6',
          },
        ],
      },
      tokenTree: {
        transformGroups: 'tokens-studio',
        transforms: ['color/hsl-4'],
        buildPath: 'dist/',
        files: [
          {
            format: 'javascript/module',
            destination: 'tokens.cjs',
          },
        ],
      },
      json: {
        transformGroups: 'tokens-studio',
        transforms: ['name/camel', 'color/hsl-4'],
        buildPath: 'dist/',
        files: [
          {
            destination: 'tokens.json',
            format: 'json',
          },
          {
            destination: 'list.json',
            format: 'json/list',
          },
          {
            destination: 'variables.json',
            format: 'json/flat',
          },
        ],
      },
      css: {
        transformGroups: 'tokens-studio',
        transforms: ['name/kebab', 'color/hsl-4'],
        buildPath: 'dist/',
        files: [
          {
            destination: 'theme.css',
            format: 'css/variables',
            options: {
              selector: `.${themeName}`,
              outputReferences: true,
            },
          },
          {
            destination: 'variables.css',
            format: 'css/variables',
            options: {
              selector: `:root`,
              outputReferences: true,
            },
          },
        ],
      },
      scss: {
        transformGroups: 'tokens-studio',
        transforms: ['name/kebab', 'color/hsl-4'],
        buildPath: 'dist/',
        files: [
          {
            destination: '_variables.scss',
            format: 'scss/variables',
            options: {
              outputReferences: true,
            },
          },
        ],
      },
      'scss-theme-mixin': {
        transforms: ['name/kebab', 'color/hsl-4'],
        buildPath: 'dist/',
        files: [
          {
            destination: '_mixin.scss',
            format: 'css/variables',
            options: {
              selector: `@mixin ${themeName}`,
              outputReferences: true,
            },
          },
        ],
      },
      less: {
        transformGroups: 'tokens-studio',
        transforms: ['name/kebab', 'color/hsl-4'],
        buildPath: 'dist/',
        files: [
          {
            destination: 'variables.less',
            format: 'less/variables',
            options: {
              outputReferences: true,
            },
          },
        ],
      },
      typescript: {
        transforms: ['name/camel', 'color/hsl-4'],
        transformGroup: 'js',
        buildPath: 'dist/',
        files: [
          {
            format: 'typescript/es6-declarations',
            destination: 'variables.d.ts',
          },
          {
            format: 'typescript/module-declarations',
            destination: 'tokens.d.ts',
          },
        ],
      },
    },
  };
};

// module.exports = { createConfig };
const main = async () => {
  await readFile('figma/figma.tokens.json', 'utf-8').then((data) => {
    const { $themes } = JSON.parse(data);
    $themes.forEach((theme) => {
      createConfig({
        selector: `.${theme.name}-theme`,
        source: [`src/generated/figma.tokens.json`],
      });
    });
  });
};

main();
