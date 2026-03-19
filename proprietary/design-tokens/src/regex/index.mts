// Matches a CSS custom property declaration and captures the declaration prefix,
// the raw value, and the trailing semicolon separately for targeted rewrites.
export const varRegex = /(?<prefix>^\s*--[^:]+:\s*)(?<value>[^;]+?)(?<suffix>\s*;)/gm;

// Detects math operators that indicate a value should be wrapped in calc().
export const operatorRegex = /(?:\s\+\s|\s-\s|\/|\*)/;

const numericOperandSource = String.raw`\d*\.?\d+(?:[a-z%]+)?`;
const cssVariableOperandSource = String.raw`var\([^)]+\)`;
const exponentiationOperandSource = `(${numericOperandSource}|${cssVariableOperandSource})`;

// Matches `base ^ exponent` expressions where each side is either numeric or a CSS variable.
export const exponentiationRegex = new RegExp(
  String.raw`${exponentiationOperandSource}\s*\^\s*${exponentiationOperandSource}`,
  'g',
);
