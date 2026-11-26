'use client';

import {
  addTokenSubTypeExtensions,
  resolveConfigRefs,
  upgradeLegacyTokens,
} from '@nl-design-system-community/design-tokens-schema';
import dtcgTokens from '@rijkshuisstijl-community/design-tokens/dist/lintblauw/tokens.json';
import {
  type DetailedHTMLProps as ReactDetailedHTMLProps,
  type HTMLAttributes as ReactHTMLAttributes,
  useEffect,
} from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'clippy-token-group-table': ReactDetailedHTMLProps<ReactHTMLAttributes<HTMLElement>, HTMLElement> & {
        path?: string;
        theme?: string;
      };
    }
  }
}

// clippy components need DTCG 2025 tokens: color strings upgraded to {colorSpace, components} objects, refs resolved via the `resolved-as` extension, and path-based subtypes (needed for dimension samples)
const tokens = JSON.stringify(
  addTokenSubTypeExtensions(resolveConfigRefs(upgradeLegacyTokens(structuredClone(dtcgTokens)))),
);

export interface TokenGroupTableProps {
  path: string;
}

export const TokenGroupTable = ({ path }: TokenGroupTableProps) => {
  useEffect(() => {
    // Lit elements extend HTMLElement, so only load them in the browser (not during SSR)
    import('@nl-design-system-community/clippy-components/clippy-token-group-table');
  }, []);

  return <clippy-token-group-table path={path} theme={tokens} />;
};
