import { readFile, writeFile } from 'fs/promises';

// When using `outputReferences: true` in Style Dictionary (see `build.mjs`), any calculations/transforms are overwritten by the css-var-names.
// So you'll end up with invalid CSS like:
// `--my-var: var(--my-length) + 20px;` - see: https://github.com/style-dictionary/style-dictionary/issues/1055
// We will need to fix any invalid stuff from Tokens Studio (TS) here as a post-build step.
// This applies to both .css and .scss files.

const varRegex = /(?<prefix>^\s*--[^:]+:\s*)(?<value>[^;]+?)(?<suffix>\s*;)/gm;

export async function fixCSSFile(filePath) {
  let content = await readFile(filePath, 'utf-8');

  content = await fixRoundTo(content);
  content = await fixExponentiation(content);
  content = await fixCalc(content);

  await writeFile(filePath, content);
}

// This will wrap any calculations in `calc()`.
export function fixCalc(content) {
  const operatorRegex = /(?:\s\+\s|\s-\s|\/|\*)/;

  return content.replace(varRegex, (match, prefix, value, suffix) => {
    if (!value.match(operatorRegex)) {
      return match;
    }

    return `${prefix}calc(${value})${suffix}`;
  });
}

// Exponentiation (^) is not supported in CSS, so we need to convert it to pow(base, exponent)
export function fixExponentiation(content) {
  const exponentiationRegex =
    /([0-9]*\.?[0-9]+(?:[a-z%]+)?|var\([^)]+\))\s*\^\s*([0-9]*\.?[0-9]+(?:[a-z%]+)?|var\([^)]+\))/g;

  return content.replace(varRegex, (match, prefix, value, suffix) => {
    if (!value.includes('^')) {
      return match;
    }

    const fixedValue = value.replace(exponentiationRegex, (_match, base, exponent) => {
      return `pow(${base}, ${exponent})`;
    });

    return `${prefix}${fixedValue}${suffix}`;
  });
}

// This will strip out any roundTo() calls, as CSS doesn't support it.
// It does allow round(), but that needs a rounding interval, which is unknown at this point.
// See https://developer.mozilla.org/en-US/docs/Web/CSS/round
export function fixRoundTo(content) {
  return content.replace(varRegex, (match, prefix, value, suffix) => {
    if (!value.includes('roundTo(')) {
      return match;
    }

    // Handle nested parentheses by processing the string character by character
    let fixedValue = value;
    let result = '';
    let i = 0;

    while (i < fixedValue.length) {
      if (fixedValue.slice(i, i + 8) === 'roundTo(') {
        // Found roundTo(, now find the matching closing parenthesis
        i += 8; // Skip "roundTo("
        let parenCount = 1;
        let start = i;

        while (i < fixedValue.length && parenCount > 0) {
          if (fixedValue[i] === '(') parenCount++;
          if (fixedValue[i] === ')') parenCount--;
          i++;
        }

        // Extract the content between parentheses and add to result
        result += fixedValue.slice(start, i - 1);
      } else {
        result += fixedValue[i];
        i++;
      }
    }

    return `${prefix}${result}${suffix}`;
  });
}
