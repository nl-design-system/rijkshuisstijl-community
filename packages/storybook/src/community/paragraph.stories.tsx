/* @license CC0-1.0 */

import { Paragraph } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import readme from './paragraph.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Rijkshuisstijl/Paragraph',
  id: 'rhc-paragraph',
  component: Paragraph,
  argTypes: {
    lead: {
      description: 'Lead paragraph',
      type: {
        name: 'boolean',
      },
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
    // TODO: add Figma, GitHub and NL DesignSystem links
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met alleen overgeschreven design tokens van de Rijkshuisstijl Community.',
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
    lead: true,
  },
};

export const Small: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    small: true,
  },
};
