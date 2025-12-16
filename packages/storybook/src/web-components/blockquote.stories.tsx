import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { BlockquoteWebComponent } from '@rijkshuisstijl-community/web-components';
import { Meta, StoryObj } from '@storybook/web-components-vite';
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
  },
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *',
  },
  parameters: {
    docs: {
      description: {
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source
        component: mergeMarkdown([readme]),
      },
    },
    figma:
      'https://www.figma.com/design/Q5Imc7Xi9KnBQhcYI3Hytj/NL-Design-System---RHC-Bibliotheek?node-id=1349-6340&p=f&t=FF0eLCbwS26n6eDF-0',
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
