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
      { name: 'kern-default', tokenSets: ['1', '2', 'a'] },
      { name: 'kern-information-dense', tokenSets: ['1', '2', 'b'] },
      { name: 'groen-default', tokenSets: ['3', '4', 'a'] },
      { name: 'groen-information-dense', tokenSets: ['3', '4', 'b'] },
    ];

    expect(flattenMatrix(input)).toBe(expectedOutput);
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
      { name: 'kern-default', tokenSets: ['x', '1', '2', 'a'] },
      { name: 'kern-information-dense', tokenSets: ['x', '1', '2', 'b'] },
      { name: 'groen-default', tokenSets: ['x', '3', '4', 'a'] },
      { name: 'groen-information-dense', tokenSets: ['x', '3', '4', 'b'] },
      { name: 'kern-default', tokenSets: ['y', '1', '2', 'a'] },
      { name: 'kern-information-dense', tokenSets: ['y', '1', '2', 'b'] },
      { name: 'groen-default', tokenSets: ['y', '3', '4', 'a'] },
      { name: 'groen-information-dense', tokenSets: ['y', '3', '4', 'b'] },
    ];

    expect(flattenMatrix(input)).toBe(expectedOutput);
  });
});
