/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import readme from './paragraph.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Paragraph',
  id: 'rijkshuisstijl-paragraph',
  component: Paragraph,
  argTypes: {
    lead: {
      description: 'Lead paragraph',
      type: {
        name: 'boolean',
      },
      table: {
        category: 'Property',
      },
      defaultValue: false,
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
