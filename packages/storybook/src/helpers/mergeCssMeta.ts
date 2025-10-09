import { formatHtml } from '@rijkshuisstijl-community/internal-tooling/formatHtml';
import { Meta, StoryContext } from '@storybook/react-vite';
import { merge } from 'lodash-es';
import { createElement, isValidElement } from 'react';
import * as ReactDOMServer from 'react-dom/server';

/**
 * Merges React component metadata with CSS-specific overrides.
 * @param reactMeta The original React component metadata.
 * @param overwriteMeta Optional metadata to overwrite the original.
 * @returns The merged metadata.
 */
export const mergeCssMeta = <Base extends Meta<any>, Overwrite extends Meta<any>>(
  reactMeta: Base,
  overwriteMeta?: Overwrite,
) => {
  // configure generic metadata overwrite for CSS components
  const genericMeta: Meta<any> = {
    parameters: {
      chromatic: { disableSnapshot: true }, // as these are reexports of react components
      docs: {
        codePanel: false, // hide the react code panel by default
        canvas: {
          sourceState: 'shown',
        },
        source: {
          // transform the react code to formatted html
          transform: (code: string, storyContext: StoryContext) => {
            const render = storyContext.component;

            if (render) {
              const element = isValidElement(render) ? render : createElement(render, storyContext.args);
              const html = ReactDOMServer.renderToStaticMarkup(element);
              return formatHtml(html);
            }
            return code;
          },
        },
      },
    },
  };

  return merge({}, reactMeta, genericMeta, overwriteMeta);
};
