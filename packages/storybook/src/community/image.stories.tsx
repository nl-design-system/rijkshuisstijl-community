import { Image } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/img/README.md?raw';
import referenceDocs from '@utrecht/components/img/docs/references.nl.md?raw';
import htmlDocs from '@utrecht/components/img/docs/technology-html.nl.md?raw';
import wcagDocs from '@utrecht/components/img/docs/wcag.nl.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Rijkshuisstijl/Image',
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
    // TODO: add Figma, GitHub and NL DesignSystem links
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
    src: './placeholder.jpg',
  },
  name: 'Image',
};
