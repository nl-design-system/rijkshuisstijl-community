import { promises } from 'fs';
import { join } from 'path';
import StyleDictionary from 'style-dictionary';

const DIST_FOLDER = './dist';

const normalizeFileName = (fileName) => fileName.replaceAll(/\s*/g, '').toLowerCase();

const getStyleDictionaryConfig = (product) => {
  return {
    source: [`src/generated/*.json`, `src/generated/product/${product}.json`],
    platforms: {
      javascript: {
        transforms: ['attribute/cti', 'name/cti/camel', 'color/hsl-4'],
        transformGroup: 'js',
        buildPath: `${DIST_FOLDER}/${normalizeFileName(product)}/`,
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
        buildPath: `${DIST_FOLDER}/${normalizeFileName(product)}/`,
        files: [
          {
            destination: `index.css`,
            format: 'css/variables',
            options: {
              outputReferences: true,
            },
          },
          {
            destination: `theme.css`,
            format: 'css/variables',
            options: {
              selector: `.${normalizeFileName(product)}-theme`,
              outputReferences: true,
            },
          },
          {
            destination: `_variables.scss`,
            format: 'scss/variables',
            options: {
              outputReferences: true,
            },
          },
          {
            destination: `variables.less`,
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

const isProduct = (content) => {
  return Object.hasOwn(content, '$figmaStyleReferences') && content.group === 'Rijkshuisstijl';
};

const getTokensFile = async () => {
  return JSON.parse(await promises.readFile(join('src', 'generated', 'figma.tokens.json'), 'utf-8'));
};

const run = async () => {
  const start = performance.now();
  const tokens = await getTokensFile();
  Object.entries(tokens).forEach(([product, config]) => {
    if (isProduct(config)) {
      const config = getStyleDictionaryConfig(product);
      const sd = StyleDictionary.extend(config);
      sd.buildAllPlatforms();
    }
  });
  // await addMediaDependentFiles(DIST_FOLDER, COPY_FOLDER);

  const end = performance.now();
  const formatter = new Intl.NumberFormat('en-EN', { notation: 'compact' });
  const elapsedTime = formatter.format(end - start);
  console.log(`Done in ${elapsedTime}ms`);
};

run();
