/* @license CC0-1.0 */

import { Article } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import readme from './article.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Rijkshuisstijl/Article',
  id: 'rhc-article',
  component: Article,
  argTypes: {},
  args: {
    children: [
      <p key="article-text">
        Lorem ipsum dolor sit amet. Aut amet quibusdam et atque soluta id unde provident non sequi dolor rem iusto
        expedita eum voluptates asperiores aut quae modi. 33 ipsa recusandae et repudiandae optio est ullam fugit sit
        dolores praesentium sed pariatur aspernatur. Et voluptatibus expedita aut odit sint vel eius dolores et nobis
        tempora et cupiditate rerum. Qui mollitia maiores non unde repellat a totam corrupti et tempore nihil est earum
        facilis hic odio nisi est eligendi quidem? Aut similique quasi non repellat expedita qui magni tempore ab
        aperiam voluptatum sit quia atque et enim alias ea voluptas internos. Qui quia eius vel alias dolores et
        expedita ipsum.
      </p>,
    ],
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add Figma link
    github: 'https://github.com/nl-design-system/rijkshuisstijl-community/issues/566',
    nldesignsystem: 'https://www.nldesignsystem.nl/article/',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met alleen overgeschreven design tokens van de Rijkshuisstijl Community.',
  },
} as Meta<typeof Article>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {},
};
