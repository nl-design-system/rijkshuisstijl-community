import { existsSync, mkdirSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';

const DEBUG = true;
const TOKENS_FILE = './figma/figma.tokens.json';

const ALWAYS_ON = 'Always on';
const IGNORE = ['Viewport'];
const THEME_GROUP_NAME_SORT = ['Theme', 'Type scale'];

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

const isEnabled = (str) => str === 'enabled' || str === 'source';

const flattenTokenSetSets = (tokenSetsObject) =>
  Object.entries(tokenSetsObject)
    .map(([tokenSetName, enabled]) => isEnabled(enabled) && tokenSetName)
    .filter(Boolean);

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
*/
const readThemeGroups = (themeGroups) => {
  let tokenSetsAlwaysOn = [];
  let tokenSetNamesAlwaysOn = [];
  const tokenSetsMatrix = {};
  themeGroups.forEach((themeGroup) => {
    if (IGNORE.indexOf(themeGroup.group) !== -1) return;

    if (themeGroup.name === ALWAYS_ON) {
      tokenSetsAlwaysOn = [...tokenSetsAlwaysOn, ...flattenTokenSetSets(themeGroup.selectedTokenSets)];
      tokenSetNamesAlwaysOn.push(themeGroup.group);
    } else {
      if (!(themeGroup.group in tokenSetsMatrix)) tokenSetsMatrix[themeGroup.group] = {};
      tokenSetsMatrix[themeGroup.group][themeGroup.name] = flattenTokenSetSets(themeGroup.selectedTokenSets);
    }
  });

  return { tokenSetsAlwaysOn, tokenSetsMatrix, tokenSetNamesAlwaysOn };
};

const normaliseTokenSetName = (tokenSetName) => tokenSetName.toLowerCase().replace(/\s+/g, '-');

const accordingTo = (list) => (a, b) => list.indexOf(a) - list.indexOf(b);

/*
const makeMatrix = (length, ...restDimensionLengths) =>
  Array.from({ length }, () => (restDimensionLengths.length ? makeMatrix(...restDimensionLengths) : 0));
*/

const cartesian = (...a) => a.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())));

/**
 *
 *  Transforms the theme choices tree from `readThemeGroups`:
 *  {
 *    'Type scale': {
 *      'Default': [ ... ],
 *      'Information dense': [ ... ],
 *    },
 *    'Theme': {
 *      'Kern': [ ... ],
 *      'Groen': [ ... ],
 *    },
 *    ...
 *  }
 *  into a flat array with the cartesian product of every theme set combination:
 *  [
 *    {
 *      name: 'kern',
 *      tokenSets: [ ... ],
 *    },
 *    {
 *      name: 'kern-information-dense',
 *      tokenSets: [ ... ],
 *    },
 *  ]
 */
export const flattenMatrix = (tokenSetsMatrix, tokenSetsAlwaysOn) => {
  const themeGroupsSorted = Object.keys(tokenSetsMatrix).sort(accordingTo(THEME_GROUP_NAME_SORT));
  const matrix = themeGroupsSorted.reduce(
    (acc, el) => [
      ...acc,
      Object.entries(tokenSetsMatrix[el]).map(([key, value]) => ({
        group: el,
        choice: normaliseTokenSetName(key),
        tokenSets: value,
      })),
    ],
    [],
  );
  const product = cartesian(...matrix);
  const result = product.map((choices) => ({
    name: choices.map(({ choice }) => choice).join('-'),
    tokenSets: choices.map(({ tokenSets }) => tokenSets).flat(),
  }));
  return result;
};

if (require.main === module) {
  const tokens = await readTokensFile();
  const { tokenSetsAlwaysOn, tokenSetsMatrix, tokenSetNamesAlwaysOn } = readThemeGroups(tokens.$themes);
  if (DEBUG) {
    console.log(
      `Found ${Object.keys(tokenSetsAlwaysOn).length} "${ALWAYS_ON}" token sets in ${tokenSetNamesAlwaysOn.join(', ')}`,
    );
    console.log(`About to generate ${debugInfo(tokenSetsMatrix)} themes`);
    //console.log(tokenSetsMatrix);
  }
  const tokenSetSets = flattenMatrix(tokenSetsMatrix);
}

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
