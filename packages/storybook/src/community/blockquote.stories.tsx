/* @license CC0-1.0 */

import { Blockquote } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './blockquote.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Blockquote',
  id: 'rijkshuisstijl-blockquote',
  component: Blockquote,
  argTypes: {
    attribution: {
      name: 'attribution',
      type: { name: 'string', required: false },
    },
  },
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *',
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Blockquote>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Attribution: Story = {
  name: 'Attribution',
  args: {
    children: '"Ik heb het nog nooit gedaan dus ik denk dat ik het wel kan"',
    attribution: '— Pippi Langkous',
  },
};
