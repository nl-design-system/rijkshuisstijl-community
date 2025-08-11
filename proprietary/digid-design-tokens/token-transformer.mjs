import { resolve } from 'node:path';

import { tokenTransformer } from '../token-transformer.mjs';

tokenTransformer({
  input: '../logius-design-tokens/src/figma.tokens.json',
  output: './tmp/figma.tokens.json',
  themes: ['DigiD'],
});
