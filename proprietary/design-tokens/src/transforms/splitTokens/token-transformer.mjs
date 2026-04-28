import { existsSync, mkdirSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';

const DEBUG = true;
const TOKENS_FILE = './figma/figma.tokens.json';

const ALWAYS_ON = 'Always on';
const IGNORE = ['Viewport'];

const readTokensFile = async () => {
  const json = await readFile(TOKENS_FILE, 'utf-8');
  return JSON.parse(json);
};

const debugInfo = (tokenSetsMatrix) => {
  const debugData = Object.entries(tokenSetsMatrix).reduce(
    (acc, [themeGroupName, choices]) => ({
      product: acc.product * Object.keys(choices).length,
      nums: [...acc.nums, `${Object.keys(choices).length} ${themeGroupName}`],
    }),
    { product: 1, nums: [] },
  );
  return `${debugData.nums.join(' x ')} = ${debugData.product}`;
};

/**
  Transforms the $themes object from figma.tokens.json into a tree-like
  structure that is more like what we need. So from:
  [
    {
      name: 'Default',
      group: 'Type scale',
      selectedTokenSets: [ ... ],
    },
    {
      name: 'Information dense',
      group: 'Type scale',
      selectedTokenSets: [ ... ],
    },
    ...
  ]
  into:
  {
    'Type scale': {
      'Default': [ ... ],
      'Information dense': [ ... ],
    },
    ...
  }

  but what we actually want is:
  [
    [ ... ... ], (type scale default + theme 1
    [ ... ... ], (type scale default + theme 2
    ...
    [ ... ... ], (type scale information dense + theme 1
    [ ... ... ], (type scale information dense + theme 2
    ...
  ]
  so we probably need an intermediate:
  [
    {
      typescale: default
      theme: 1
    }
    {
      typescale: default
      theme: 2
    }
  ]
*/
const readThemeGroups = (themeGroups) => {
  let tokenSetsAlwaysOn = {};
  const tokenSetsMatrix = {};
  themeGroups.forEach((themeGroup) => {
    if (IGNORE.indexOf(themeGroup.group) !== -1) return;

    if (themeGroup.group === ALWAYS_ON)
      tokenSetsAlwaysOn = {
        ...tokenSetsAlwaysOn,
        ...themeGroup.selectedTokenSets,
      };
    else {
      if (!(themeGroup.group in tokenSetsMatrix)) tokenSetsMatrix[themeGroup.group] = {};
      tokenSetsMatrix[themeGroup.group][themeGroup.name] = themeGroup.selectedTokenSets;
    }
  });

  return { tokenSetsAlwaysOn, tokenSetsMatrix };
};

const buildThemesFiles = ({ tokens, tokenSetsAlwaysOn, tokenSetsMatrix }) => {
  if (settings.expandThemeMatrix.find((themeGroupName) => !(themeGroupName in tokenSetsMatrix))) {
    console.error(`Error: configured theme group name ${themeGroupName} not found after processing ${TOKENS_FILE}`);
    if (DEBUG) console.log(tokenSetsMatrix);
    process.exit(15);
  }

  Object.entries(tokenSetsMatrix).reduce((acc, val, index) => ({}), {});
};

const tokens = await readTokensFile();
const { tokenSetsAlwaysOn, tokenSetsMatrix } = readThemeGroups(tokens.$themes);
if (DEBUG) {
  console.log(`Found ${Object.keys(tokenSetsAlwaysOn).length} always on entries`);
  console.log(`About to generate ${debugInfo(tokenSetsMatrix)} themes`);
  //console.log(tokenSetsMatrix);
}
buildThemesFiles({ tokens, tokenSetsAlwaysOn, tokenSetsMatrix });

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
