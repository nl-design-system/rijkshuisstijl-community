import { describe, expect, test } from 'vitest';

import { ALWAYS_ON, flattenMatrix, readThemeGroups } from './token-transformer.mjs';

const generateSelectedTokenSetsArray = (...tokenSets) =>
  Object.fromEntries(tokenSets.map((tokenSet) => [tokenSet, 'enabled']));

describe('token-transformer', () => {
  describe('readThemeGroups', () => {
    test('transforms the token set matrix as expected', () => {
      const input = [
        {
          name: 'themeGroup1',
          group: 'colours',
          selectedTokenSets: generateSelectedTokenSetsArray('1', '2', '3'),
        },
        {
          name: 'themeGroup2',
          group: 'colours',
          selectedTokenSets: generateSelectedTokenSetsArray('4', '5', '6'),
        },
      ];

      expect(readThemeGroups(input).tokenSetsTable).toStrictEqual([
        {
          choice: 'themegroup1',
          group: 'colours',
          tokenSets: ['1', '2', '3'],
        },
        {
          choice: 'themegroup2',
          group: 'colours',
          tokenSets: ['4', '5', '6'],
        },
      ]);
    });

    test('ignores entries that are in given ignore list', () => {
      const ignoreList = new Set(['colors']);

      const input = [
        {
          name: 'group1',
          group: 'colours',
          selectedTokenSets: generateSelectedTokenSetsArray('1', '2', '3'),
        },
        {
          name: 'group2',
          group: 'colors',
          selectedTokenSets: generateSelectedTokenSetsArray('4', '5', '6'),
        },
      ];

      expect(readThemeGroups(input, ignoreList).tokenSetsTable).toStrictEqual([
        {
          choice: 'group1',
          group: 'colours',
          tokenSets: ['1', '2', '3'],
        },
      ]);
    });

    test(`passes back all information needed about the "${ALWAYS_ON}" token groups`, () => {
      const input = [
        {
          name: 'themeGroup1',
          group: 'colours',
          selectedTokenSets: generateSelectedTokenSetsArray('1', '2', '3'),
        },
        {
          name: 'themeGroup2',
          group: 'colours',
          selectedTokenSets: generateSelectedTokenSetsArray('4', '5', '6'),
        },
        {
          name: ALWAYS_ON,
          group: 'basics',
          selectedTokenSets: generateSelectedTokenSetsArray('x', 'y', 'z'),
        },
      ];

      const { tokenSetsAlwaysOn } = readThemeGroups(input);

      expect(tokenSetsAlwaysOn).toStrictEqual(['x', 'y', 'z']);
    });
  });

  describe('flattenMatrix', () => {
    test('flattens a simple tree correctly (2d)', () => {
      /*
       *  [
       *    {
       *      group: 'type scale',
       *      choice: 'default',
       *      tokenSets: [ ... ],
       *    },
       *    {
       */
      const input = [
        {
          group: 'type-scale',
          choice: 'default',
          tokenSets: ['a'],
        },
        {
          group: 'type-scale',
          choice: 'information-dense',
          tokenSets: ['b'],
        },
        {
          group: 'theme',
          choice: 'kern',
          tokenSets: ['1', '2'],
        },
        {
          group: 'theme',
          choice: 'groen',
          tokenSets: ['3', '4'],
        },
      ];

      const expectedOutput = [
        { name: 'kern', tokenSets: ['1', '2', 'a'] },
        { name: 'kern-information-dense', tokenSets: ['1', '2', 'b'] },
        { name: 'groen', tokenSets: ['3', '4', 'a'] },
        { name: 'groen-information-dense', tokenSets: ['3', '4', 'b'] },
      ];

      expect(flattenMatrix(input, [])).toStrictEqual(expectedOutput);
    });

    test('flattens a simple tree correctly (3d)', () => {
      const input = [
        {
          group: 'type-scale',
          choice: 'default',
          tokenSets: ['a'],
        },
        {
          group: 'type-scale',
          choice: 'information-dense',
          tokenSets: ['b'],
        },
        {
          group: 'theme',
          choice: 'kern',
          tokenSets: ['1', '2'],
        },
        {
          group: 'theme',
          choice: 'groen',
          tokenSets: ['3', '4'],
        },
        {
          group: 'fantasie',
          choice: 'ding1',
          tokenSets: ['x'],
        },
        {
          group: 'fantasie',
          choice: 'ding2',
          tokenSets: ['y'],
        },
      ];

      const expectedOutput = [
        { name: 'ding1-kern', tokenSets: ['x', '1', '2', 'a'] },
        { name: 'ding1-kern-information-dense', tokenSets: ['x', '1', '2', 'b'] },
        { name: 'ding1-groen', tokenSets: ['x', '3', '4', 'a'] },
        { name: 'ding1-groen-information-dense', tokenSets: ['x', '3', '4', 'b'] },
        { name: 'ding2-kern', tokenSets: ['y', '1', '2', 'a'] },
        { name: 'ding2-kern-information-dense', tokenSets: ['y', '1', '2', 'b'] },
        { name: 'ding2-groen', tokenSets: ['y', '3', '4', 'a'] },
        { name: 'ding2-groen-information-dense', tokenSets: ['y', '3', '4', 'b'] },
      ];

      expect(flattenMatrix(input, [])).toStrictEqual(expectedOutput);
    });
  });

  describe('readThemeGroups + flattenMatrix', () => {
    test('does the whole thing, correctly', () => {
      const input = [
        {
          name: 'blue',
          group: 'colours',
          selectedTokenSets: generateSelectedTokenSetsArray('1', '2'),
        },
        {
          name: 'green',
          group: 'colours',
          selectedTokenSets: generateSelectedTokenSetsArray('4', '5'),
        },
        {
          name: 'default',
          group: 'type scale',
          selectedTokenSets: generateSelectedTokenSetsArray('a', 'b'),
        },
        {
          name: 'information-dense',
          group: 'type scale',
          selectedTokenSets: generateSelectedTokenSetsArray('x', 'y'),
        },
      ];

      const { tokenSetsTable } = readThemeGroups(input);
      const tokenSetSets = flattenMatrix(tokenSetsTable);

      expect(tokenSetSets).toStrictEqual([
        {
          name: 'blue',
          tokenSets: ['1', '2', 'a', 'b'],
        },
        {
          name: 'blue-information-dense',
          tokenSets: ['1', '2', 'x', 'y'],
        },
        {
          name: 'green',
          tokenSets: ['4', '5', 'a', 'b'],
        },
        {
          name: 'green-information-dense',
          tokenSets: ['4', '5', 'x', 'y'],
        },
      ]);
    });
  });
});
