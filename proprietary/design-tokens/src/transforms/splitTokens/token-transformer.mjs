import { existsSync, mkdirSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';

const themeGroupsAlwaysOn = ['Brand', 'Common', 'Components'];
const themeGroupsToExpandThemeMatrix = ['Theme', 'Type scale'];
const themeGroupsToIgnore = ['Viewport'];

export const parseThemeDefinition = (value) => {
  const { group, id, name, selectedTokenSets } = value;

  const parsedSelectedTokenSets = {};

  for (const [tokenSet, status] of Object.entries(selectedTokenSets)) {
    parsedSelectedTokenSets[tokenSet] = status;
  }

  return {
    group,
    id,
    name,
    selectedTokenSets: parsedSelectedTokenSets,
  };
};

export const parseTokensFile = (json) => {
  const parsed = JSON.parse(json);

  const tokenSets = {};
  let themes = [];

  for (const [key, value] of Object.entries(parsed)) {
    if (key === '$themes') {
      themes = value.map(parseThemeDefinition);
      continue;
    }

    tokenSets[key] = value;
  }

  return { themes, tokenSets };
};

const addTokenSetIfPresent = (tokenSets, key, value) => {
  if (value !== undefined) {
    tokenSets[key] = value;
  }
};

// Split tokens into separate files
export async function transformAndSplitTokens() {
  // Read the raw JSON file directly
  const json = await readFile('./figma/figma.tokens.json', 'utf-8');
  const tokens = parseTokensFile(json);

  // Process themes to add the enabled components
  const processedThemes = {};

  tokens.themes.forEach((theme) => {
    const themeTokens = {};

    Object.entries(theme.selectedTokenSets).forEach(([tokenSet, status]) => {
      if (status === 'enabled' && !tokenSet.endsWith('[figma-only]')) {
        addTokenSetIfPresent(themeTokens, tokenSet, tokens.tokenSets[tokenSet]);
      }
    });

    // Add default type scale here, because Figma does not understand `clamp(...)`
    addTokenSetIfPresent(themeTokens, DEFAULT, tokens.tokenSets[DEFAULT]);

    processedThemes[theme.name] = {
      id: theme.id,
      tokens: themeTokens,
      group: theme.group,
    };

    processedThemes[`${theme.name}-information-dense`] = {
      id: theme.id,
      tokens: {
        ...themeTokens,
        [INFORMATION_DENSE]: tokens.tokenSets[INFORMATION_DENSE],
      },
      group: theme.group,
    };
  });

  const baseTheme = processedThemes[BASE_THEME_NAME];

  if (!baseTheme) {
    throw new Error(`Expected "${BASE_THEME_NAME}" to exist in processed themes.`);
  }

  // Ensure directories exist
  if (!existsSync('./src/generated')) {
    mkdirSync('./src/generated', { recursive: true });
  }

  // Write files
  await writeFile('./src/generated/base.tokens.json', JSON.stringify(baseTheme.tokens, null, 2));
  await writeFile('./src/generated/themes.json', JSON.stringify(processedThemes, null, 2));
}

await transformAndSplitTokens();
