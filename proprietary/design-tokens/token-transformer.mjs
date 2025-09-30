import { existsSync, mkdirSync } from 'fs';
import { readFile, writeFile } from 'node:fs/promises';

import { transformTokens } from 'token-transformer';

// the commented options and their values are default values from the token-transformer package
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
  'components/form-field-option-label',
  'components/modal-dialog',
  'components/pagination/todo',
  'components/status-badge',
  'components/summary-list',
  'components/task-list',
  'components/toolbar-button',
];

// Split tokens into separate files
async function transformAndSplitTokens() {
  // Read the raw JSON file directly
  const json = await readFile('./figma/figma.tokens.json', 'utf-8');
  const tokens = JSON.parse(json);

  // Extract base tokens (excluding $themes and overwrites/)
  // Not sure if other designers might not be able to modify the themes created by paid plugin so getting the base tokens is a good fallback
  const baseTokens = {};
  Object.entries(tokens).forEach(([key, value]) => {
    if (!key.startsWith('$') && !key.startsWith('overwrites/') && !key.startsWith('tokenSetOrder')) {
      baseTokens[key] = value;
    }
  });

  // Transform base tokens
  //let resolved = transformTokens(baseTokens, [], excludes, transformerOptions);
  //delete resolved['tokenSetOrder'];

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
    //const transformedThemeTokens = transformTokens(themeTokens, [], excludes, transformerOptions);

    processedThemes[theme.name] = {
      id: theme.id,
      tokens: themeTokens,
      group: theme.group,
    };
  });

  // Ensure directories exist
  if (!existsSync('./src/generated')) {
    mkdirSync('./src/generated', { recursive: true });
  }

  // Write files
  await writeFile('./src/generated/base.tokens.json', JSON.stringify(baseTokens, null, 2));
  await writeFile('./src/generated/themes.json', JSON.stringify(processedThemes, null, 2));
}

transformAndSplitTokens();
