import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

import { transformTokens } from 'token-transformer';

/**
 * Somehow, `transformTokens`'s `resolveReferences` option doesn't do anything. To mimic the expected effect, set the `rawValue` - which contains the reference - to the `value`.
 *
 * **Note**: It keeps the original `value` in `origValue`.
 *
 * @param {*} tokens The JSON structure describing the design tokens
 * @returns The JSON structure describing the design tokens
 */
const applyRawValueToValue = (tokens) => {
  for (const tokenName in tokens) {
    const token = tokens[tokenName];
    if (token.rawValue) {
      token.origValue = token.value;
      token.value = token.rawValue;
    } else if (typeof token === 'object') {
      applyRawValueToValue(token);
    }
  }

  return tokens;
};

const init = async ({ input, output }) => {
  const json = await readFile(input, 'utf-8');
  const rawTokens = JSON.parse(json);

  const setsToUse = [];

  // The following components didn't work yet because of broken design token references.
  // You can remove excludes from this list at any time, as long as they don't break the build.
  const excludes = [
    'components/avatar',
    'components/backdrop',
    'components/drawer',
    'components/form-field-option-label',
    'components/modal-dialog',
    'components/pagination',
    'components/status-badge',
    'components/summary-list',
    'components/task-list',
    'components/toolbar-button',
  ];

  const transformerOptions = {
    // expandTypography: true,
    // expandShadow: true,
    // expandComposition: true,
    // expandBorder: true,
    // preserveRawValue: false,
    // throwErrorWhenNotResolved: true,
    resolveReferences: 'math',
  };
  const start = Date.now();
  let resolved = transformTokens(rawTokens, setsToUse, excludes, transformerOptions);

  delete resolved['tokenSetOrder'];
  // resolved = applyRawValueToValue(resolved);

  await mkdir(dirname(output), { recursive: true });

  await writeFile(output, JSON.stringify(resolved, null, 2));
  const end = Date.now();

  console.log(`Build ready in ${end - start}ms`);
};

init({
  input: './figma/figma.tokens.json',
  output: './src/generated/figma.tokens.json',
});
