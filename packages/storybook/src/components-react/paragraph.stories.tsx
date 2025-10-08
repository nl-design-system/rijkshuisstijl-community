/* @license CC0-1.0 */

import { Paragraph } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from './paragraph.md?raw';
import { mergeMarkdown } from '../helpers/merge-markdown';

const meta = {
  title: 'Paragraph',
  id: 'rhc-paragraph',
  component: Paragraph,
  argTypes: {
    purpose: {
      description: 'Lead paragraph',
      control: { type: 'select' },
      options: [undefined, 'lead'],
      table: {
        category: 'API',
      },
      defaultValue: false,
    },
    small: {
      description: 'Small paragraph',
      type: {
        name: 'boolean',
      },
      table: {
        category: 'API',
      },
    },
    children: {
      description: 'Paragraph text - default webcomponent slot',
      type: {
        name: 'string',
        required: true,
      },
      table: {
        category: 'Webcomponent Slot',
      },
      defaultValue: '',
    },
  },
  args: {
    children: '',
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
    // TODO: add Figma and NL DesignSystem links
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met alleen overgeschreven design tokens van de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Paragraph.tsx',
  },
} as Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
  },
  name: 'Paragraph',
};

export const Lead: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    purpose: 'lead',
  },
};
