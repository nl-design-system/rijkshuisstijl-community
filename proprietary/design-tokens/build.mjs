import { existsSync, mkdirSync } from 'fs';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'path';
import StyleDictionary from 'style-dictionary';
import { transforms, transformTypes } from 'style-dictionary/enums';

import { register } from '@tokens-studio/sd-transforms';

// Will take the theme name and remove all spaces and make it lowercase
const normalizeThemeName = (name) => {
  return name.toLowerCase().replace(/\s+/g, '');
};

const removeUnitlessLineHeightTransform = () => {
  // During update to W3C DTCG format, we found that the tokens-studio transformGroup
  // includes the transform "ts/size/lineheight" which transforms line-height token values declared with % into a unitless value.
  // This caused minor UI changes in many of our components. We decided that this is not something we want to have happen automatically.
  // Therefore we remove this specific transform from the transformGroup before building.
  const indexOfLineHeightTransform =
    StyleDictionary.hooks.transformGroups['tokens-studio'].indexOf('ts/size/lineheight');
  if (indexOfLineHeightTransform !== -1) {
    StyleDictionary.hooks.transformGroups['tokens-studio'].splice(indexOfLineHeightTransform, 1);
  }
};

const excludes = [
  'components/avatar',
  'components/form-field-option-label',
  'components/modal-dialog',
  'components/pagination/todo',
  'components/status-badge',
  'components/summary-list',
  'components/task-list',
  'components/toolbar-button',
];

register(StyleDictionary, { excludeParentKeys: true });

// Get the platforms config
const getPlatformsConfig = (buildPath, themeName) => {
  return {
    javascript: {
      transformGroup: 'tokens-studio',
      transforms: ['attribute/cti', 'name/camel'],
      buildPath,
      excludes,
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
      transformGroup: 'tokens-studio',
      transforms: ['attribute/cti', 'name/kebab'],
      buildPath,
      excludes,
      files: [
        {
          destination: 'root.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
        },
        {
          destination: 'index.css',
          format: 'css/variables',
          options: {
            selector: `.${themeName}`,
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
      ],
    },
  };
};

// This will build the base tokens without the themes and without the overwrites
async function buildBaseTokens() {
  const config = getPlatformsConfig('dist/', 'rhc-theme');
  const StyleDictionaryBase = new StyleDictionary({
    log: { verbosity: 'verbose' },
    source: ['./src/**/base.tokens.json'],
    preprocessors: ['tokens-studio'],
    platforms: {
      ...config,
    },
  });
  await StyleDictionaryBase.hasInitialized;

  await StyleDictionaryBase.cleanAllPlatforms();
  await StyleDictionaryBase.buildAllPlatforms();
}

// This will build the themes
async function buildThemes() {
  const themesJson = await readFile('./src/generated/themes.json', 'utf-8');
  const themes = JSON.parse(themesJson);

  // Process each theme separately
  for (const [theme, themeData] of Object.entries(themes)) {
    const themeName = normalizeThemeName(theme);
    const themesDir = `./src/generated/${themeName}`;

    // Create the theme directory if it doesn't exist
    if (!existsSync(themesDir)) {
      mkdirSync(themesDir, { recursive: true });
    }

    // Write individual theme tokens
    await writeFile(path.join(themesDir, `tokens.json`), JSON.stringify(themeData.tokens, null, 2));

    const config = getPlatformsConfig(`dist/${themeName}/`, themeName);
    // Create a separate Style Dictionary instance for each theme
    const StyleDictionaryTheme = new StyleDictionary({
      log: { verbosity: 'verbose' },
      source: [`./src/generated/${themeName}/tokens.json`],
      preprocessors: ['tokens-studio'],
      platforms: {
        ...config,
      },
    });
    await StyleDictionaryTheme.hasInitialized;

    // Build this specific theme
    await StyleDictionaryTheme.cleanAllPlatforms();
    await StyleDictionaryTheme.buildAllPlatforms();
  }
}

async function build() {
  try {
    removeUnitlessLineHeightTransform(); // This needs to happen before building anything
    await buildBaseTokens();
    await buildThemes();
  } catch (error) {
    console.error(error);
  }
}

build();
