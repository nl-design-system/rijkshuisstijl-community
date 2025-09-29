import { existsSync, mkdirSync } from 'fs';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'path';
import StyleDictionary from 'style-dictionary';

// Will take the theme name and remove all spaces and make it lowercase
const normalizeThemeName = (name) => {
  return name.toLowerCase().replace(/\s+/g, '');
};

// Get the platforms config
const getPlatformsConfig = (buildPath, themeName) => {
  return {
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
    Web: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/hsl-4'],
      buildPath,
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
  const StyleDictionaryBase = StyleDictionary.extend({
    source: ['./src/**/base.tokens.json'],
    platforms: {
      ...config,
    },
  });

  await StyleDictionaryBase.buildAllPlatforms();
}

// This will build the themes
async function buildThemes() {
  const themesJson = await readFile('./src/generated/themes.json', 'utf-8');
  const themes = JSON.parse(themesJson);

  // Process each theme separately
  for (const [theme, themeData] of Object.entries(themes)) {
    const themesDir = `./src/generated/${normalizeThemeName(theme)}`;

    // Create the theme directory if it doesn't exist
    if (!existsSync(themesDir)) {
      mkdirSync(themesDir, { recursive: true });
    }

    // Write individual theme tokens
    await writeFile(path.join(themesDir, `tokens.json`), JSON.stringify(themeData.tokens, null, 2));

    const config = getPlatformsConfig(`dist/${normalizeThemeName(theme)}/`, normalizeThemeName(theme));
    // Create a separate Style Dictionary instance for each theme
    const StyleDictionaryTheme = StyleDictionary.extend({
      source: [`./src/generated/${normalizeThemeName(theme)}/tokens.json`],
      platforms: {
        ...config,
      },
    });

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
