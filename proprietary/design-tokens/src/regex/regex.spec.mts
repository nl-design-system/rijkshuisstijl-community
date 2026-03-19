import { describe, expect, test } from 'vitest';

import { exponentiationRegex, operatorRegex, varRegex } from './index.mts';

describe('regex', () => {
  describe('varRegex', () => {
    test('captures a CSS custom property declaration so you can rewrite only the value portion', () => {
      const match = new RegExp(varRegex.source, varRegex.flags).exec('  --spacing-md: var(--base) + 8px;');

      expect(match?.groups).toEqual({
        indentation: '  ',
        variableName: '--spacing-md',
        value: 'var(--base) + 8px',
      });
    });

    test('matches multiple custom property declarations across lines because you can process entire files', () => {
      const matches = Array.from(
        '--spacing-sm: 4px;\n--spacing-md: 8px;'.matchAll(new RegExp(varRegex.source, varRegex.flags)),
      );

      expect(matches).toHaveLength(2);
      expect(matches[0]?.groups?.['value']).toBe('4px');
      expect(matches[1]?.groups?.['value']).toBe('8px');
    });
  });

  describe('operatorRegex', () => {
    test('detects addition and subtraction only when surrounded by spaces so plain hyphenated values are ignored', () => {
      expect(operatorRegex.test('100px + 2rem')).toBe(true);
      expect(operatorRegex.test('100px - 2rem')).toBe(true);
      expect(operatorRegex.test('font-weight')).toBe(false);
    });

    test('detects multiplication and division so calc wrapping also covers compact expressions', () => {
      expect(operatorRegex.test('var(--base)*2')).toBe(true);
      expect(operatorRegex.test('100px/2')).toBe(true);
    });
  });

  describe('exponentiationRegex', () => {
    test('matches exponent expressions with numeric operands so they can be rewritten to pow(base, exponent)', () => {
      const match = new RegExp(exponentiationRegex.source, exponentiationRegex.flags).exec('2^3');

      expect(match?.[1]).toBe('2');
      expect(match?.[2]).toBe('3');
    });

    test('matches CSS variable operands because Tokens Studio can emit exponentiation with var(...) references', () => {
      const match = new RegExp(exponentiationRegex.source, exponentiationRegex.flags).exec(
        'var(--base)^var(--exponent)',
      );

      expect(match?.[1]).toBe('var(--base)');
      expect(match?.[2]).toBe('var(--exponent)');
    });

    test('does not match unsupported operand shapes, which keeps unrelated CSS values untouched', () => {
      expect(new RegExp(exponentiationRegex).exec('calc(1rem + 1vw)^2')).toBeNull();
      expect(new RegExp(exponentiationRegex).exec('pow(2, 3)')).toBeNull();
    });
  });
});
