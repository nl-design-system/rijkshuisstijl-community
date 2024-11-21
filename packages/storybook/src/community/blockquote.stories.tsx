/* @license CC0-1.0 */

import { Blockquote } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './blockquote.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Blockquote',
  id: 'rhc-blockquote',
  component: Blockquote,
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

export const blueCornerBorder: Story = {
  args: {
    children: '"Ik heb het nog nooit gedaan dus ik denk dat ik het wel kan"',
    attribution: '— Pippi Langkous',
    variation: 'blue-corner-border',
  },
};

export const pinkBackground: Story = {
  args: {
    children: '"Ik heb het nog nooit gedaan dus ik denk dat ik het wel kan"',
    attribution: '— Pippi Langkous',
    variation: 'pink-background',
  },
};

export const pinkLeftBorder: Story = {
  args: {
    children: '"Ik heb het nog nooit gedaan dus ik denk dat ik het wel kan"',
    attribution: '— Pippi Langkous',
    variation: 'pink-left-border',
  },
};

export const pinkCornerBorder: Story = {
  args: {
    children: '"Ik heb het nog nooit gedaan dus ik denk dat ik het wel kan"',
    attribution: '— Pippi Langkous',
    variation: 'pink-corner-border',
  },
};
