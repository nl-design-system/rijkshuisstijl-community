/* @license CC0-1.0 */

import { Paragraph } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import readme from './paragraph.md?raw';

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
    docs: {
      description: {
        component: readme,
      },
    },
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
