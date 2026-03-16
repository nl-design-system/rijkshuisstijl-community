import { register } from '@tokens-studio/sd-transforms';
import type StyleDictionaryClass from 'style-dictionary';
import type { Config, PlatformConfig, TransformedToken } from 'style-dictionary';

const CSS_SIZE_KEYWORDS = new Set([
  'auto',
  'fit-content',
  'max-content',
  'min-content',
  'stretch',
  'inherit',
  'initial',
  'revert',
  'revert-layer',
  'unset',
]);

// Checks if a value should skip the "size/rem" transform by determining if it's a CSS function or keyword that should be preserved as-is.
export function skipRemTransform(rawValue: unknown): boolean {
  if (typeof rawValue !== 'string') {
    return false;
  }

  const trimmedValue = rawValue.trim();

  if (trimmedValue === '') {
    return false;
  }

  return CSS_SIZE_KEYWORDS.has(trimmedValue) || trimmedValue.includes('(');
}

// Wraps the original "size/rem" transform to safely handle values that should not be converted to rem units, such as CSS functions and keywords.
export function transformSizeRemSafely(
  originalTransform: (...args: [TransformedToken, PlatformConfig, Config, ...any[]]) => unknown,
  token: TransformedToken,
  platform: PlatformConfig,
  options: Config,
  ...rest: any[]
) {
  const rawValue = options?.usesDtcg ? token.$value : token.value;

  if (skipRemTransform(rawValue)) {
    return rawValue;
  }

  return originalTransform(token, platform, options, ...rest);
}

// register token-studio transforms and wrap the "size/rem" transform in "token-studio" transform group to create a "size/rem-safe" transform that can be used in place of the original to prevent unintended conversions of CSS functions and keywords in token values.
export function registerTokenStudioTransformGroup(StyleDictionary: typeof StyleDictionaryClass) {
  // register token-studio transforms
  register(StyleDictionary, { excludeParentKeys: true });

  // wrap the "size/rem" transform to create a "size/rem-safe" transform
  const originalTransform = StyleDictionary.hooks.transforms['size/rem'];

  if (!originalTransform) {
    throw new Error('Expected Style Dictionary to register the "size/rem" transform before wrapping it.');
  }

  if (!StyleDictionary.hooks.transforms['size/rem-safe']) {
    StyleDictionary.registerTransform({
      name: 'size/rem-safe',
      type: originalTransform.type,
      filter: originalTransform.filter,
      transform: (token, platform, options, ...rest) =>
        transformSizeRemSafely(originalTransform.transform, token, platform, options, ...rest),
    });
  }

  const tokensStudioGroup = StyleDictionary.hooks.transformGroups['tokens-studio'];

  if (!tokensStudioGroup) {
    throw new Error('Expected the "tokens-studio" transform group to be registered before wrapping transforms.');
  }

  StyleDictionary.hooks.transformGroups['tokens-studio'] = tokensStudioGroup
    .map((transformName) => (transformName === 'size/rem' ? 'size/rem-safe' : transformName))
    .filter((transformName, index, transforms) => transforms.indexOf(transformName) === index);
}
