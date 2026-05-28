import { existsSync, mkdirSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';

const TOKENS_FILE = './figma/figma.tokens.json';

export const ALWAYS_ON = 'Always on';
const IGNORE = new Set(['Viewport']);
const THEME_GROUP_NAME_SORT = ['theme', 'type-scale'];
const BASE_THEME_NAME = 'lintblauw';

const readTokensFile = async () => {
  const json = await readFile(TOKENS_FILE, 'utf8');
  const parsed = JSON.parse(json);
  console.log(`Token file ${TOKENS_FILE} successfully parsed as JSON`);
  return parsed;
};

const debugInfo = (tokenSetsTable) => {
  const groups = Object.fromEntries(
    tokenSetsTable.map((option) => [
      option.group,
      tokenSetsTable.filter((entry) => entry.group === option.group).length,
    ]),
  );
  const total = Object.values(groups).reduce((acc, val) => acc * val, 1);
  return `${Object.entries(groups)
    .map(([key, value]) => `${value} ${key}`)
    .join(' x ')} = ${total}`;
};

const isEnabled = (str) => str === 'enabled' || str === 'source';

const flattenTokenSetSets = (tokenSetsObject) =>
  Object.entries(tokenSetsObject)
    .map(([tokenSetName, enabled]) => isEnabled(enabled) && tokenSetName)
    .filter(Boolean);

const normaliseTokenSetName = (tokenSetName) => tokenSetName.toLowerCase().replaceAll(/\s+/g, '-');

/**
 * Makes a sorter function to be given to Array.sort, to sort an array (of strings in this case) according to another,
 * pre-sorted, array
 */
const accordingTo = (arrayToSortBy) => (a, b) => arrayToSortBy.indexOf(a) - arrayToSortBy.indexOf(b);

export const cartesian = (...a) => a.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())), [[]]);

/**
 *
 * Sorts every entry in $themes into three lists:
 * - always on (only one choice in the group)
 * - ignore (eg. viewport is figma-only)
 * - regular choice matrix (type scale, theme)
 *
 */
export const readThemeGroups = (themeGroups, ignoreList = new Set()) => {
  const tokenSetsAlwaysOn = [];
  const tokenSetNamesAlwaysOn = [];
  const tokenSetsTable = [];
  for (const themeGroup of themeGroups) {
    if (ignoreList.has(themeGroup.group)) continue;

    if (themeGroup.name === ALWAYS_ON) {
      tokenSetsAlwaysOn.push(...flattenTokenSetSets(themeGroup.selectedTokenSets));
      tokenSetNamesAlwaysOn.push(themeGroup.group);
    } else {
      tokenSetsTable.push({
        group: normaliseTokenSetName(themeGroup.group),
        choice: normaliseTokenSetName(themeGroup.name),
        tokenSets: flattenTokenSetSets(themeGroup.selectedTokenSets),
      });
    }
  }

  if (tokenSetNamesAlwaysOn.length)
    console.log(
      `Found ${tokenSetNamesAlwaysOn.length} "${ALWAYS_ON}" token sets in ${tokenSetNamesAlwaysOn.join(', ')}`,
    );
  console.log(`Generating ${debugInfo(tokenSetsTable)} themes`);

  return { tokenSetsAlwaysOn, tokenSetsTable };
};

/**
 *
 *  Transforms the theme choices array from `readThemeGroups`:
 *  [
 *    {
 *      group: 'type scale',
 *      choice: 'default',
 *      tokenSets: [ ... ],
 *    },
 *    {
 *      group: 'type scale',
 *      choice: 'information dense',
 *      tokenSets: [ ... ],
 *    },
 *    {
 *      group: 'colours',
 *      choice: 'blue',
 *      tokenSets: [ ... ],
 *    },
 *    ...
 *  ]
 *  into a flat array with the cartesian product of every theme set combination:
 *  [
 *    {
 *      name: 'blue',
 *      tokenSets: [ ... ],
 *    },
 *    {
 *      name: 'blue-information-dense',
 *      tokenSets: [ ... ],
 *    },
 *  ]
 */
export const flattenMatrix = (tokenSetsTable, tokenSetsAlwaysOn = []) => {
  // make a list of the found theme groups, sorted
  const themeGroups = tokenSetsTable.map((choice) => choice.group);
  const themeGroupsSorted = themeGroups.sort(accordingTo(THEME_GROUP_NAME_SORT));
  const themeGroupsUniqueSorted = [...new Set(themeGroupsSorted)];

  // sort and group the options by theme group (eg. type scale, theme/colour)
  const matrix = themeGroupsUniqueSorted.map((val) => tokenSetsTable.filter((el) => el.group === val));

  // make cartesian product: transform an array of an array of choices
  // into a flat multiplied list of every combination of choices
  const product = cartesian(...matrix);

  // for every combination of choices, make object in the form that will
  // be used to make the actual themes
  const result = product.map((choiceSets) => ({
    // concatenate theme name, eg. blue & information dense -> blue-information-dense
    name: choiceSets
      .map(({ choice }) => choice)
      .filter((name) => name !== 'default')
      .join('-'),
    // collect all selected tokenSets in choice combination with the 'always on' sets
    tokenSets: [...choiceSets.flatMap(({ tokenSets }) => tokenSets), ...tokenSetsAlwaysOn],
  }));

  console.log(result.map((theme) => `* ${theme.name}`).join('\n'));

  return result;
};

if (import.meta.main) {
  const tokens = await readTokensFile();

  const { tokenSetsAlwaysOn, tokenSetsTable } = readThemeGroups(tokens.$themes, IGNORE);

  tokenSetsAlwaysOn.push('common/viewport/max');
  const tokenSetSets = flattenMatrix(tokenSetsTable, tokenSetsAlwaysOn);

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
