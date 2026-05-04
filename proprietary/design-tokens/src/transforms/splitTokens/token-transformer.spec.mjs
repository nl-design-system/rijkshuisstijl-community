import { describe, expect, test } from 'vitest';

import { flattenMatrix } from './token-transformer.mjs';

describe('flattenMatrix', () => {
  test('flattens a simple tree correctly', () => {
    const input = {
      'Type scale': {
        Default: ['a'],
        'Information dense': ['b'],
      },
      Theme: {
        Kern: ['1', '2'],
        Groen: ['3', '4'],
      },
    };

    const expectedOutput = [
      { name: 'kern', tokenSets: ['1', '2', 'a'] },
      { name: 'kern-information-dense', tokenSets: ['1', '2', 'b'] },
      { name: 'groen', tokenSets: ['3', '4', 'a'] },
      { name: 'groen-information-dense', tokenSets: ['3', '4', 'b'] },
    ];

    expect(flattenMatrix(input, [])).toStrictEqual(expectedOutput);
  });

  test('flattens a simple tree correctly (advanced)', () => {
    const input = {
      'Type scale': {
        Default: ['a'],
        'Information dense': ['b'],
      },
      Theme: {
        Kern: ['1', '2'],
        Groen: ['3', '4'],
      },
      Fantasie: {
        Ding1: ['x'],
        Ding2: ['y'],
      },
    };

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
