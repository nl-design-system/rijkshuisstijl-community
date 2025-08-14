import { tokenTransformer } from '../logius-design-tokens/src/token-transformer.mjs';

tokenTransformer({
  input: new URL('../logius-design-tokens/src/figma.tokens.json', import.meta.url).pathname,
  output: new URL('./tmp/figma.tokens.json', import.meta.url).pathname,
  themes: ['MijnOverheid'],
});
