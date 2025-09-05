import { BlockquoteWebComponent } from '@rijkshuisstijl-community/web-components';
import { Meta, StoryObj } from '@storybook/web-components';
import { mergeMarkdown } from '../../helpers/merge-markdown';
import readme from '../components-react/blockquote.md?raw';

BlockquoteWebComponent.define();

const meta = {
  title: 'Blockquote',
  id: 'rhc-blockquote-web',
  component: 'rhc-blockquote',
  argTypes: {
    attribution: {
      name: 'attribution',
      type: { name: 'string', required: false },
    },
    variation: {
      name: 'variation',
      type: { name: 'string', required: false },
      control: {
        type: 'select',
      },
      options: ['', 'blue-corner-border', 'pink-background', 'pink-left-border', 'pink-corner-border'],
      defaultValue: '',
    },
  },
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
    docs: {
      description: {
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source
        component: mergeMarkdown([readme]),
      },
    },
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1349-6340&t=9KlJWkn6GEOm2sN1-11',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/Blockquote.tsx',
    nldesignsystem: 'https://www.nldesignsystem.nl/blockquote',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
  },
} as Meta<typeof BlockquoteWebComponent>;

export default meta;

export const Default = {} as StoryObj<typeof meta>;

export const Attribution = {
  name: 'Attribution',
  args: {
    children: '"Ik heb het nog nooit gedaan dus ik denk dat ik het wel kan"',
    attribution: '— Pippi Langkous',
  },
} as StoryObj<typeof meta>;

export const blueCornerBorder = {
  args: {
    children: '"Ik heb het nog nooit gedaan dus ik denk dat ik het wel kan"',
    attribution: '— Pippi Langkous',
    variation: 'blue-corner-border',
  },
} as StoryObj<typeof meta>;

export const pinkBackground = {
  args: {
    children: '"Ik heb het nog nooit gedaan dus ik denk dat ik het wel kan"',
    attribution: '— Pippi Langkous',
    variation: 'pink-background',
  },
} as StoryObj<typeof meta>;

export const pinkLeftBorder = {
  args: {
    children: '"Ik heb het nog nooit gedaan dus ik denk dat ik het wel kan"',
    attribution: '— Pippi Langkous',
    variation: 'pink-left-border',
  },
} as StoryObj<typeof meta>;

export const pinkCornerBorder = {
  args: {
    children: '"Ik heb het nog nooit gedaan dus ik denk dat ik het wel kan"',
    attribution: '— Pippi Langkous',
    variation: 'pink-corner-border',
  },
} as StoryObj<typeof meta>;
