import { Meta } from '@storybook/react-vite';
import { merge } from 'lodash-es';

/**
 * Merges React component metadata with CSS-specific overrides.
 * @param reactMeta The original React component metadata.
 * @param OverwriteMeta Optional metadata to overwrite the original.
 * @returns The merged metadata.
 */
export const mergeCssMeta = <Base extends Meta<any>, Overwrite extends Meta<any>>(
  reactMeta: Base,
  OverwriteMeta?: Overwrite,
) =>
  merge(
    {},
    reactMeta,
    {
      parameters: {
        chromatic: { disableSnapshot: true }, // as these are reexports of react components
        docs: {
          codePanel: false,
          canvas: {
            sourceState: 'none',
          },
        },
      },
    },
    OverwriteMeta,
  );
