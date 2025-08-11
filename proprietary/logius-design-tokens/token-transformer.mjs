import { tokenTransformer } from '../token-transformer.mjs';

tokenTransformer({
  input: './src/figma.tokens.json',
  output: './tmp/figma.tokens.json',
  themes: ['Logius'],
});
