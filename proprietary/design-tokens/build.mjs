import { existsSync, mkdirSync } from 'fs';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'path';
import StyleDictionary from 'style-dictionary';

import { register } from '@tokens-studio/sd-transforms';

// Will take the theme name and remove all spaces and make it lowercase
const normalizeThemeName = (name) => {
  return name.toLowerCase().replace(/\s+/g, '');
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

// Get the platforms config
const getPlatformsConfig = (buildPath, themeName) => {
  return {
    javascript: {
      transformGroup: 'tokens-studio',
      transforms: ['attribute/cti', 'name/camel', 'color/hsl-4'],
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
      transforms: ['attribute/cti', 'name/kebab', 'color/hsl-4'],
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
  register(StyleDictionaryBase, { excludeParentKeys: true });
  await StyleDictionaryBase.hasInitialized;

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
    register(StyleDictionaryTheme, { excludeParentKeys: true });
    await StyleDictionaryTheme.hasInitialized;

    // Build this specific theme
    await StyleDictionaryTheme.buildAllPlatforms();
  }
}

async function build() {
  try {
    await buildBaseTokens();
    await buildThemes();
  } catch (error) {
    console.error(error);
  }
}

build();
