import { describe, expect, test } from 'vitest';

import { isJsonValue, parseThemeDefinition, parseTokensFile } from './token-transformer.mjs';

describe('token transformer guards', () => {
  describe('isJsonValue', () => {
    test('accepts nested JSON-safe structures', () => {
      expect(
        isJsonValue({
          token: {
            $type: 'dimension',
            $value: ['1rem', 2, false, null],
          },
        }),
      ).toBe(true);
    });

    test('rejects non-JSON values', () => {
      expect(isJsonValue(() => 'token')).toBe(false);
      expect(
        isJsonValue({
          token: () => 'token',
        }),
      ).toBe(false);
    });
  });

  describe('parseThemeDefinition', () => {
    test('parses a valid theme definition', () => {
      expect(
        parseThemeDefinition({
          group: 'core',
          id: 'theme-1',
          name: 'Kern - Lintblauw',
          selectedTokenSets: {
            colors: 'enabled',
          },
        }),
      ).toEqual({
        group: 'core',
        id: 'theme-1',
        name: 'Kern - Lintblauw',
        selectedTokenSets: {
          colors: 'enabled',
        },
      });
    });

    test('throws when required string properties are missing', () => {
      expect(() =>
        parseThemeDefinition({
          group: 'core',
          id: 1,
          name: 'Kern - Lintblauw',
          selectedTokenSets: {},
        }),
      ).toThrow('Expected each theme to have string "group", "id", and "name" properties.');
    });

    test('throws when selected token set statuses are not strings', () => {
      expect(() =>
        parseThemeDefinition({
          group: 'core',
          id: 'theme-1',
          name: 'Kern - Lintblauw',
          selectedTokenSets: {
            colors: true,
          },
        }),
      ).toThrow('Expected token set status for "colors" to be a string.');
    });
  });

  describe('parseTokensFile', () => {
    test('parses valid themes and token sets', () => {
      const parsed = parseTokensFile(
        JSON.stringify({
          $themes: [
            {
              group: 'core',
              id: 'theme-1',
              name: 'Kern - Lintblauw',
              selectedTokenSets: {
                colors: 'enabled',
              },
            },
          ],
          colors: {
            brand: {
              $value: '#000000',
            },
          },
        }),
      );

      expect(parsed.themes).toHaveLength(1);
      expect(parsed.tokenSets['colors']).toEqual({
        brand: {
          $value: '#000000',
        },
      });
    });

    test('throws when the top-level JSON value is not an object', () => {
      expect(() => parseTokensFile('[]')).toThrow('Expected the Figma tokens file to contain a JSON object.');
    });

    test('throws when $themes is not an array', () => {
      expect(() =>
        parseTokensFile(
          JSON.stringify({
            $themes: {},
          }),
        ),
      ).toThrow('Expected "$themes" to be an array.');
    });

    test('throws when a theme entry is malformed', () => {
      expect(() =>
        parseTokensFile(
          JSON.stringify({
            $themes: [
              {
                group: 'core',
                id: 'theme-1',
                selectedTokenSets: {},
              },
            ],
          }),
        ),
      ).toThrow('Expected each theme to have string "group", "id", and "name" properties.');
    });
  });
});
