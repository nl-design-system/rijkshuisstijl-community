import { describe, expect, test } from 'vitest';
import { fixCalc, fixExponentiation, fixRoundTo } from './cssFixers.mjs';

describe('css fixers', () => {
  describe('fixCalc', () => {
    test('should wrap adding calculations in calc()', async () => {
      const input = '--some-var: 100px + 50%;';
      const output = '--some-var: calc(100px + 50%);';
      expect(fixCalc(input)).toBe(output);
    });
    test('should wrap calculations with variables in calc()', async () => {
      const input = '--some-var: 100px + var(--some-other-var);';
      const output = '--some-var: calc(100px + var(--some-other-var));';
      expect(fixCalc(input)).toBe(output);
    });
    test('should wrap calculations with variables in calc()', async () => {
      const input = '--some-var: var(--some-other-var) + 100px;';
      const output = '--some-var: calc(var(--some-other-var) + 100px);';
      expect(fixCalc(input)).toBe(output);
    });
    test('should wrap subtraction calculations in calc()', async () => {
      const input = '--some-var: 100px - 50px;';
      const output = '--some-var: calc(100px - 50px);';
      expect(fixCalc(input)).toBe(output);
    });
    test('should wrap multiplication calculations in calc()', async () => {
      const input = '--some-var: 10px * 2;';
      const output = '--some-var: calc(10px * 2);';
      expect(fixCalc(input)).toBe(output);
    });
    test('should wrap division calculations in calc()', async () => {
      const input = '--some-var: 100px / 2;';
      const output = '--some-var: calc(100px / 2);';
      expect(fixCalc(input)).toBe(output);
    });
    test('should wrap mixed calculations in calc()', async () => {
      const input = '--some-var: var(--base) * 2 - 10px;';
      const output = '--some-var: calc(var(--base) * 2 - 10px);';
      expect(fixCalc(input)).toBe(output);
    });
    test('should not wrap single variables in calc()', async () => {
      const input = '--some-var: var(--other-var);';
      const output = '--some-var: var(--other-var);';
      expect(fixCalc(input)).toBe(output);
    });
    test('should not wrap simple values in calc()', async () => {
      const input = '--some-var: 10px;';
      const output = '--some-var: 10px;';
      expect(fixCalc(input)).toBe(output);
    });
  });

  describe('fixExponentiation', () => {
    test('should convert ^ to pow()', async () => {
      const input = '--some-var: 2^3;';
      const output = '--some-var: pow(2, 3);';
      expect(fixExponentiation(input)).toBe(output);
    });
    test('should convert ^ to pow() with variable as base', async () => {
      const input = '--some-var: var(--base)^3;';
      const output = '--some-var: pow(var(--base), 3);';
      expect(fixExponentiation(input)).toBe(output);
    });
    test('should convert ^ to pow() with variable as exponent', async () => {
      const input = '--some-var: 2^var(--exponent);';
      const output = '--some-var: pow(2, var(--exponent));';
      expect(fixExponentiation(input)).toBe(output);
    });
    test('should convert ^ to pow() with variables as both base and exponent', async () => {
      const input = '--some-var: var(--base)^var(--exponent);';
      const output = '--some-var: pow(var(--base), var(--exponent));';
      expect(fixExponentiation(input)).toBe(output);
    });
  });

  describe('fixRoundTo', () => {
    test('should remove roundTo()', async () => {
      const input = '--some-var: roundTo(10px);';
      const output = '--some-var: 10px;';
      expect(fixRoundTo(input)).toBe(output);
    });
    test('should remove roundTo() with variable', async () => {
      const input = '--some-var: roundTo(var(--base-size));';
      const output = '--some-var: var(--base-size);';
      expect(fixRoundTo(input)).toBe(output);
    });
    test('should remove roundTo() with calc function', async () => {
      const input = '--some-var: roundTo(calc(10px + 5px));';
      const output = '--some-var: calc(10px + 5px);';
      expect(fixRoundTo(input)).toBe(output);
    });
    test('should remove roundTo() with calc function containing variables', async () => {
      const input = '--some-var: roundTo(calc(var(--base) * 2));';
      const output = '--some-var: calc(var(--base) * 2);';
      expect(fixRoundTo(input)).toBe(output);
    });
  });
});
