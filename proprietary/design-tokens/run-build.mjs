import { promises } from 'fs';
import { join } from 'path';
import StyleDictionary from 'style-dictionary';

const DIST_FOLDER = './dist';

const normalizeFileName = (fileName) => fileName.replaceAll(/\s*/g, '').toLowerCase();
const isProduct = (content) => Object.hasOwn(content, '$figmaStyleReferences') && content.group === 'Rijkshuisstijl';
const getTokensFile = async () =>
  JSON.parse(await promises.readFile(join('src', 'generated', 'figma.tokens.json'), 'utf-8'));

const getStyleDictionaryConfig = (product) => {
  const buildPath = `${DIST_FOLDER}/${normalizeFileName(product)}/`;

  return {
    source: ['src/generated/*.json', `src/generated/product/${product}.json`],
    platforms: {
      javascript: {
        transforms: ['attribute/cti', 'name/cti/camel', 'color/hsl-4'],
        transformGroup: 'js',
        buildPath,
        files: [
          {
            format: 'typescript/es6-declarations',
            destination: 'index.d.ts',
          },
          {
            format: 'typescript/module-declarations',
            destination: 'tokens.d.ts',
          },
          {
            destination: 'index.js',
            format: 'javascript/es6',
          },
          {
            destination: 'tokens.js',
            format: 'javascript/module',
          },
          {
            destination: 'index.tokens.json',
            format: 'json/nested',
          },
          {
            destination: 'index.json',
            format: 'json/flat',
          },
        ],
      },
      web: {
        transformGroup: 'web',
        buildPath,
        files: [
          {
            destination: 'index.css',
            format: 'css/variables',
            options: {
              outputReferences: true,
            },
          },
          {
            destination: 'theme.css',
            format: 'css/variables',
            options: {
              selector: `.${normalizeFileName(product)}-theme`,
              outputReferences: true,
            },
          },
          {
            destination: '_variables.scss',
            format: 'scss/variables',
            options: {
              outputReferences: true,
            },
          },
          {
            destination: 'variables.less',
            format: 'less/variables',
            options: {
              outputReferences: true,
            },
          },
        ],
      },
    },
  };
};

const run = async () => {
  const start = Date.now();
  const tokens = await getTokensFile();
  Object.entries(tokens).forEach(([product, config]) => {
    if (isProduct(config)) {
      const config = getStyleDictionaryConfig(product);
      const sd = StyleDictionary.extend(config);
      sd.buildAllPlatforms();
    }
  });

  const end = Date.now();
  console.log(`Done in ${end - start}ms`);
};

run();
