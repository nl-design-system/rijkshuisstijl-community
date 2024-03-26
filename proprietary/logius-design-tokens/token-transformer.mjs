import { tokenTransformer } from './src/token-transformer.mjs';

tokenTransformer({
  input: new URL('./src/figma.tokens.json', import.meta.url).pathname,
  output: new URL('./tmp/figma.tokens.json', import.meta.url).pathname,
  themes: ['Logius'],
});
