import type tokens from '@rijkshuisstijl-community/design-tokens/dist/index.tokens.json';

//TODO: this is a temporary way to get associated tokens with a component as we would prefer to have all the component tokens defined next to the component itself in the future

// Utility type to recursively extract all leaves of an object as strings
type Leaves<T> = T extends object
  ? { [K in keyof T]: `${Exclude<K, symbol>}${Leaves<T[K]> extends never ? '' : `-${Leaves<T[K]>}`}` }[keyof T]
  : never;

// All CSS design tokens in the format `--token-name`
type CSSDesignTokens = `--${Leaves<typeof tokens>}`;

// Extracts all design tokens that start with the given prefix
export type GetComponentDesignTokens<
  prefix extends string,
  tokens extends string = CSSDesignTokens,
> = tokens extends `${prefix}${string}` ? tokens : never;

/**
 * Type for overwriting pre-typed design tokens of a component.
 * @param prefix The prefix of the component design tokens (e.g. '--rhc-button-')
 * @param extraTokens Additional custom tokens that can be added beyond the pre-typed ones in case there are helper tokens used that are not defined in the theme (optional)
 */
export type OverwriteTokens<prefix extends string, extraTokens extends string = ''> = Partial<
  Record<GetComponentDesignTokens<prefix> | extraTokens, string | number>
>;
