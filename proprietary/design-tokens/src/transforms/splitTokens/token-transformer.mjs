import { existsSync, mkdirSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';

const DEBUG = true;

const settings = {
  alwaysOn: ['Brand', 'Common', 'Components'],
  expandThemeMatrix: ['Theme', 'Type scale'],
  ignore: ['Viewport'],
};

const readTokensFile = async () => {
  const json = await readFile('./figma/figma.tokens.json', 'utf-8');
  return JSON.parse(json);
};

const findSetting = (groupName) =>
  Object.entries(settings).find(([_, groupNames]) => groupNames.indexOf(groupName) !== -1)[0] ?? 'Not found';

const debugInfo = (themesMatrix) => {
  const debugData = Object.entries(themesMatrix).reduce(
    (acc, [themeGroupName, choices]) => ({
      product: acc.product * Object.keys(choices).length,
      nums: [...acc.nums, `${Object.keys(choices).length} ${themeGroupName}`],
    }),
    { product: 1, nums: [] },
  );
  return `${debugData.nums.join(' x ')} = ${debugData.product}`;
};

const readThemeGroups = (themeGroups) => {
  let themesAlwaysOn = {};
  const themesMatrix = {};
  themeGroups.forEach((themeGroup) => {
    const setting = findSetting(themeGroup.group);
    switch (setting) {
      case 'expandThemeMatrix':
        if (!(themeGroup.group in themesMatrix)) themesMatrix[themeGroup.group] = {};
        themesMatrix[themeGroup.group][themeGroup.name] = themeGroup.selectedTokenSets;
        break;

      case 'alwaysOn':
        themesAlwaysOn = {
          ...themesAlwaysOn,
          ...themeGroup.selectedTokenSets,
        };
        break;

      case 'Not found':
        console.warn(`Theme group found that is not configured: ${themeGroup.group}.`);
        break;

      case 'ignore':
      default:
        break;
    }
  });

  return { themesAlwaysOn, themesMatrix };
};

const buildThemesFiles = ({ tokens, themesAlwaysOn, themesMatrix }) => {};

const tokens = await readTokensFile();
const { themesAlwaysOn, themesMatrix } = readThemeGroups(tokens.$themes);
if (DEBUG) {
  console.log(`Found ${Object.keys(themesAlwaysOn).length} always on entries`);
  console.log(`About to generate ${debugInfo(themesMatrix)} themes`);
}
buildThemesFiles({ tokens, themesAlwaysOn, themesMatrix });

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

//await transformAndSplitTokens();
