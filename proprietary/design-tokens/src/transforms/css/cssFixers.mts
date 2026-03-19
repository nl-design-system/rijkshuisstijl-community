import { readFile, writeFile } from 'node:fs/promises';

import { exponentiationRegex, operatorRegex, varRegex } from '../../regex/index.mts';

// When using `outputReferences: true` in Style Dictionary (see `build.mts`), any calculations/transforms are overwritten by the css-var-names.
// So you'll end up with invalid CSS like:
// `--my-var: var(--my-length) + 20px;` - see: https://github.com/style-dictionary/style-dictionary/issues/1055
// We will need to fix any invalid stuff from Tokens Studio (TS) here as a post-build step.
// This applies to both .css and .scss files.

export async function fixCSSFile(filePath: string): Promise<void> {
  let content = await readFile(filePath, 'utf-8');

  content = fixRoundTo(content);
  content = fixExponentiation(content);
  content = fixCalc(content);

  await writeFile(filePath, content);
}

// This will wrap any calculations in `calc()`.
export function fixCalc(content: string): string {
  return content.replaceAll(varRegex, (match, indentation, variableName, value) => {
    if (!value.match(operatorRegex)) {
      return match;
    }

    return `${indentation}${variableName}: calc(${value});`;
  });
}

// Exponentiation (^) is not supported in CSS, so we need to convert it to pow(base, exponent)
export function fixExponentiation(content: string): string {
  return content.replaceAll(varRegex, (match, indentation, variableName, value) => {
    if (!value.includes('^')) {
      return match;
    }

    const fixedValue = value.replaceAll(exponentiationRegex, (_match: string, base: string, exponent: string) => {
      return `pow(${base}, ${exponent})`;
    });

    return `${indentation}${variableName}: ${fixedValue};`;
  });
}

const ROUND_TO_PREFIX = 'roundTo(';

function findMatchingParenthesis(value: string, startIndex: number): number {
  let index = startIndex;
  let parenthesisDepth = 1;

  while (index < value.length && parenthesisDepth > 0) {
    if (value[index] === '(') {
      parenthesisDepth++;
    }

    if (value[index] === ')') {
      parenthesisDepth--;
    }

    index++;
  }

  return index;
}

function stripRoundToCalls(value: string): string {
  let result = '';
  let index = 0;

  while (index < value.length) {
    if (value.slice(index, index + ROUND_TO_PREFIX.length) !== ROUND_TO_PREFIX) {
      result += value[index];
      index++;
      continue;
    }

    const roundToValueStart = index + ROUND_TO_PREFIX.length;
    const roundToValueEnd = findMatchingParenthesis(value, roundToValueStart);

    result += value.slice(roundToValueStart, roundToValueEnd - 1);
    index = roundToValueEnd;
  }

  return result;
}

// This will strip out any roundTo() calls, as CSS doesn't support it.
// It does allow round(), but that needs a rounding interval, which is unknown at this point.
// See https://developer.mozilla.org/en-US/docs/Web/CSS/round
export function fixRoundTo(content: string): string {
  return content.replaceAll(varRegex, (match, indentation, variableName, value) => {
    if (!value.includes('roundTo(')) {
      return match;
    }

    return `${indentation}${variableName}: ${stripRoundToCalls(value)};`;
  });
}
