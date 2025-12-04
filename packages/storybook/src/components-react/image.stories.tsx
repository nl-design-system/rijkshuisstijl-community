import { Image } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import referenceDocs from '@utrecht/components/img/docs/references.nl.md?raw';
import htmlDocs from '@utrecht/components/img/docs/technology-html.nl.md?raw';
import wcagDocs from '@utrecht/components/img/docs/wcag.nl.md?raw';
import readme from './image.md?raw';

const meta = {
  title: 'Image',
  id: 'rhc-image',
  component: Image,
  argTypes: {
    src: {
      description: 'Image source',
      control: { type: 'text' },
      table: {
        category: 'Property',
      },
    },
    alt: {
      description: 'Image alt text',
      control: { type: 'text' },
      table: {
        category: 'Property',
      },
    },
    presentation: {
      description: 'Image is decorative',
      type: { name: 'boolean' },
      control: 'boolean',
      table: {
        category: 'Property',
      },
    },
    width: {
      description: 'Image width',
      control: { type: 'number' },
      table: {
        category: 'Property',
      },
    },
    height: {
      description: 'Image height',
      control: { type: 'number' },
      table: {
        category: 'Property',
      },
    },
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme, htmlDocs, referenceDocs, wcagDocs]),
      },
    },
    nldesignsystem: 'https://nldesignsystem.nl/image',
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1303-6078&p=f&t=qOUC6V0a7o4DPaSw-0',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Image.tsx',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, maar de photo property altijd geset, daardoor is hij altijd max-height en max-width 100%.',
  },
} as Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: 'Multicolored tulip field',
    height: 763,
    width: 640,
    src: '/placeholder.jpg',
  },
  name: 'Image',
};

export const Decorative: Story = {
  args: {
    alt: '',
    presentation: true,
    height: 763,
    width: 640,
    src: './placeholder.jpg',
  },
};
