import { existsSync, mkdirSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';

const DEBUG = true;
const LOG = (msg) => {
  if (DEBUG) console.log(msg);
};
const TOKENS_FILE = './figma/figma.tokens.json';

export const ALWAYS_ON = 'Always on';
const IGNORE = new Set(['Viewport']);
const THEME_GROUP_NAME_SORT = ['Theme', 'Type scale'];
const BASE_THEME_NAME = 'lintblauw';

const readTokensFile = async () => {
  const json = await readFile(TOKENS_FILE, 'utf8');
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
export const readThemeGroups = (themeGroups, ignoreList = new Set()) => {
  let tokenSetsAlwaysOn = [];
  let tokenSetNamesAlwaysOn = [];
  const tokenSetsMatrix = {};
  for (const themeGroup of themeGroups) {
    if (ignoreList.has(themeGroup.group)) continue;

    if (themeGroup.name === ALWAYS_ON) {
      tokenSetsAlwaysOn = [...tokenSetsAlwaysOn, ...flattenTokenSetSets(themeGroup.selectedTokenSets)];
      tokenSetNamesAlwaysOn.push(themeGroup.group);
    } else {
      if (!(themeGroup.group in tokenSetsMatrix)) tokenSetsMatrix[themeGroup.group] = {};
      tokenSetsMatrix[themeGroup.group][themeGroup.name] = flattenTokenSetSets(themeGroup.selectedTokenSets);
    }
  }

  return { tokenSetsAlwaysOn, tokenSetsMatrix, tokenSetNamesAlwaysOn };
};

const normaliseTokenSetName = (tokenSetName) => tokenSetName.toLowerCase().replaceAll(/\s+/g, '-');

const accordingTo = (list) => (a, b) => list.indexOf(a) - list.indexOf(b);

const cartesian = (...a) => a.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())), [[]]);

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
    name: choices
      .map(({ choice }) => choice)
      .filter((name) => name !== 'default')
      .join('-'),
    tokenSets: [...choices.flatMap(({ tokenSets }) => tokenSets), ...tokenSetsAlwaysOn],
  }));
  return result;
};

if (import.meta.main) {
  const tokens = await readTokensFile();
  LOG(`Token file ${TOKENS_FILE} successfully parsed as JSON`);

  const { tokenSetsAlwaysOn, tokenSetsMatrix, tokenSetNamesAlwaysOn } = readThemeGroups(tokens.$themes, IGNORE);
  LOG(
    `Found ${Object.keys(tokenSetsAlwaysOn).length} "${ALWAYS_ON}" token sets in ${tokenSetNamesAlwaysOn.join(', ')}`,
  );
  LOG(`Generating ${debugInfo(tokenSetsMatrix)} themes`);

  tokenSetsAlwaysOn.push('common/viewport/max');
  const tokenSetSets = flattenMatrix(tokenSetsMatrix, tokenSetsAlwaysOn);
  LOG(tokenSetSets.map((theme) => `* ${theme.name}`).join('\n'));

  if (!existsSync('./src/generated')) {
    mkdirSync('./src/generated', { recursive: true });
  }

  const allThemes = Object.fromEntries(
    tokenSetSets.map((val) => [
      val.name,
      {
        tokens: Object.fromEntries(val.tokenSets.map((tokenSet) => [tokenSet, tokens[tokenSet]])),
      },
    ]),
  );

  await writeFile('./src/generated/base.tokens.json', JSON.stringify(allThemes[BASE_THEME_NAME].tokens, null, 2));
  await writeFile('./src/generated/themes.json', JSON.stringify(allThemes, null, 2));
}
