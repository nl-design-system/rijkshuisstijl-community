import { transformTokens } from 'token-transformer';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';

const init = async ({ input, output }) => {
  const json = await readFile(input, 'utf-8');
  const rawTokens = JSON.parse(json);

  const setsToUse = [];

  // The following components didn't work yet because of broken design token references.
  // You can remove excludes from this list at any time, as long as they don't break the build.
  const excludes = [
    'components/avatar',
    'components/backdrop',
    'components/blockquote',
    'components/button-group',
    'components/checkbox',
    'components/checkbox-group',
    'components/counter-badge',
    'components/drawer',
    'components/form-field-error-message',
    'components/form-field-option-label',
    'components/form-field-radio-option',
    'components/icon-only-button',
    'components/modal-dialog',
    'components/ordered-list',
    'components/pagination',
    'components/radio',
    'components/radio-group',
    'components/select',
    'components/separator',
    'components/side-nav',
    'components/skip-link',
    'components/status-badge',
    'components/summary-list',
    'components/table',
    'components/task-list',
    'components/textarea',
    'components/toolbar-button',
    'components/unordered-list',
  ];

  const transformerOptions = {
    // expandTypography: true,
    // expandShadow: true,
    // expandComposition: true,
    // expandBorder: true,
    // preserveRawValue: false,
    // throwErrorWhenNotResolved: true,
    // resolveReferences: true,
  };

  let resolved = transformTokens(rawTokens, setsToUse, excludes, transformerOptions);

  delete resolved['tokenSetOrder'];

  await mkdir(dirname(output), { recursive: true });

  await writeFile(output, JSON.stringify(resolved, null, 2));
};

init({
  input: './figma/figma.tokens.json',
  output: './src/generated/figma.tokens.json',
});
