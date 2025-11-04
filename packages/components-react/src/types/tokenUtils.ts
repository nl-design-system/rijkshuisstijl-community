import type tokens from '@rijkshuisstijl-community/design-tokens/dist/index.tokens.json';

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

// Type to overwrite design tokens for a specific component
export type OverwriteTokens<prefix extends string, extraTokens extends string = ''> = Partial<
  Record<GetComponentDesignTokens<prefix> | extraTokens, string | number>
>;
