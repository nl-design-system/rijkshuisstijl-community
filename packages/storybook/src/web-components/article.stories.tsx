import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { ArticleWebComponent } from '@rijkshuisstijl-community/web-components';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import readme from '../components-react/article.md?raw';

ArticleWebComponent.define();

const meta = {
  title: 'Article',
  id: 'rhc-article-web',
  component: 'rhc-article',
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
  parameters: {
    docs: {
      description: {
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add Figma link
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/Article.tsx',
    nldesignsystem: 'https://www.nldesignsystem.nl/article/',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met alleen overgeschreven design tokens van de Rijkshuisstijl Community.',
  },
} as Meta<typeof ArticleWebComponent>;

export default meta;

export const Default = {
  args: {},
} as StoryObj<typeof meta>;
