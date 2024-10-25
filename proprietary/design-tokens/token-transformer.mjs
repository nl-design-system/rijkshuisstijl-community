import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

import { transformTokens } from 'token-transformer';

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

  await mkdir(dirname(output), { recursive: true });

  await writeFile(output, JSON.stringify(resolved, null, 2));
  const end = Date.now();

  console.log(`Build ready in ${end - start}ms`);
};

init({
  input: './figma/figma.tokens.json',
  output: './src/generated/figma.tokens.json',
});
