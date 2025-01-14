import { existsSync, mkdirSync, unlink } from 'fs';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'path';
import StyleDictionary from 'style-dictionary';
import { transformTokens } from 'token-transformer';
const transformerOptions = {
  // expandTypography: true,
  // expandShadow: true,
  // expandComposition: true,
  // expandBorder: true,
  // preserveRawValue: false,
  // throwErrorWhenNotResolved: true,
  // Tried to set this to false, it worked in principle but there were breaking in the styles especially with spacing. I think it's better to keep it true
  // resolveReferences: true,
};

const excludes = [
  'components/avatar',
  'components/backdrop',
  'components/drawer',
  'components/form-field-option-label',
  'components/modal-dialog',
  'components/pagination',
  'components/status-badge',
  'components/summary-list',
  'components/task-list',
  'components/toolbar-button',
];

const normalizeThemeName = (name) => {
  return name.toLowerCase().replace(/\s+/g, '');
};

// Split tokens into separate files
async function splitTokens() {
  // Read the raw JSON file directly
  const json = await readFile('./figma/figma.tokens.json', 'utf-8');
  const tokens = JSON.parse(json);

  // Extract base tokens (excluding $themes and overwrites/)
  // Not sure if other designers might not be able to modify the themes created by paid plugin so getting the base tokens is a good fallback
  const baseTokens = {};
  Object.entries(tokens).forEach(([key, value]) => {
    if (!key.startsWith('$') && !key.startsWith('overwrites/')) {
      baseTokens[key] = value;
    }
  });

  // Transform base tokens
  let resolved = transformTokens(baseTokens, [], excludes, transformerOptions);
  delete resolved['tokenSetOrder'];

  // Process themes to add the enabled components
  const themes = tokens.$themes || [];
  const processedThemes = {};

  themes.forEach((theme) => {
    const themeTokens = {};

    Object.entries(theme.selectedTokenSets).forEach(([tokenSet, status]) => {
      if (status === 'enabled') {
        if (tokens[tokenSet]) {
          themeTokens[tokenSet] = tokens[tokenSet];
        }
      }
    });

    // Transform the theme tokens
    const transformedThemeTokens = transformTokens(themeTokens, [], excludes, transformerOptions);

    processedThemes[theme.name] = {
      id: theme.id,
      tokens: transformedThemeTokens,
      group: theme.group,
    };
  });

  // Ensure directories exist
  if (!existsSync('./src/generated')) {
    mkdirSync('./src/generated', { recursive: true });
  }

  // Write files
  await writeFile('./src/generated/base.tokens.json', JSON.stringify(resolved, null, 2));
  // await writeFile('./src/generated/overwrites.tokens.json', JSON.stringify(overwrites, null, 2));
  await writeFile('./src/generated/themes.json', JSON.stringify(processedThemes, null, 2));
}

// This will build the base tokens without the themes and without the overwrites
async function buildBaseTokens() {
  const StyleDictionaryBase = StyleDictionary.extend({
    source: ['./src/**/base.tokens.json'],
    platforms: {
      javascript: {
        transforms: ['attribute/cti', 'name/cti/camel', 'color/hsl-4'],
        transformGroup: 'js',
        buildPath: 'dist/',
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
      css: {
        transforms: ['attribute/cti', 'name/cti/kebab', 'color/hsl-4'],
        buildPath: 'dist/',
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
              selector: '.rhc-theme',
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
    },
  });

  StyleDictionaryBase.buildAllPlatforms();
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

    // Create a separate Style Dictionary instance for each theme
    const StyleDictionaryTheme = StyleDictionary.extend({
      source: [`./src/generated/${normalizeThemeName(theme)}/tokens.json`],
      platforms: {
        javascript: {
          // This will create the javascript, typescript and json files
          transforms: ['attribute/cti', 'name/cti/camel', 'color/hsl-4'],
          transformGroup: 'js',
          buildPath: `dist/${normalizeThemeName(theme)}/`,
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
          // This will create the css adn scss files
          transforms: ['attribute/cti', 'name/cti/kebab', 'color/hsl-4'],
          buildPath: 'dist/',
          files: [
            {
              destination: `${normalizeThemeName(theme)}/index.css`,
              format: 'css/variables',
              options: {
                selector: `.${normalizeThemeName(theme)}`,
                outputReferences: true,
              },
            },
            {
              destination: `${normalizeThemeName(theme)}/root.css`,
              format: 'css/variables',
              options: {
                outputReferences: true,
              },
            },
            {
              destination: `${normalizeThemeName(theme)}/_variables.scss`,
              format: 'scss/variables',
              options: {
                outputReferences: true,
              },
            },
          ],
        },
      },
    });

    // Build this specific theme
    StyleDictionaryTheme.buildAllPlatforms();
  }
}

async function build() {
  try {
    await splitTokens();
    await buildBaseTokens();
    await buildThemes();
  } catch (error) {
    console.error(error);
  }
}

build();
