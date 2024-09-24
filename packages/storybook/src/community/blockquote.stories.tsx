/* @license CC0-1.0 */

import { Blockquote } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import { CSSProperties } from 'react';
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

export const blueCornerBorder: Story = {
  args: {
    children: '"Ik heb het nog nooit gedaan dus ik denk dat ik het wel kan"',
    attribution: '— Pippi Langkous',
    style: {
      '--utrecht-blockquote-border-color': '#154273',
      '--utrecht-blockquote-border-block-end-width': '0.125rem',
      '--utrecht-blockquote-border-inline-end-width': '0.125rem',
      '--utrecht-blockquote-border-end-end-radius': '3rem',
    } as unknown as CSSProperties,
  },
};

export const pinkBackground: Story = {
  args: {
    children: '"Ik heb het nog nooit gedaan dus ik denk dat ik het wel kan"',
    attribution: '— Pippi Langkous',
    style: {
      '--utrecht-blockquote-background-color': '#f6bde1',
      '--utrecht-blockquote-border-end-start-radius': '3rem',
      '--utrecht-blockquote-padding': '2.5rem',
    } as unknown as CSSProperties,
  },
};

export const pinkLeftBorder: Story = {
  args: {
    children: '"Ik heb het nog nooit gedaan dus ik denk dat ik het wel kan"',
    attribution: '— Pippi Langkous',
    style: {
      '--utrecht-blockquote-border-color': '#f6bde1',
      '--utrecht-blockquote-border-inline-start-width': '0.75rem',
      '--utrecht-blockquote-padding-inline-start': '2.5rem',
      '--utrecht-blockquote-padding-inline-end': '2.5rem',
      '--utrecht-blockquote-padding-block-start': '1.5rem',
      '--utrecht-blockquote-padding-block-end': '1.5rem',
    } as unknown as CSSProperties,
  },
};

export const pinkCornerBorder: Story = {
  args: {
    children: '"Ik heb het nog nooit gedaan dus ik denk dat ik het wel kan"',
    attribution: '— Pippi Langkous',
    style: {
      '--utrecht-blockquote-border-color': '#f6bde1',
      '--utrecht-blockquote-border-block-start-width': '0.25rem',
      '--utrecht-blockquote-border-inline-start-width': '0.25rem',
      '--utrecht-blockquote-border-start-start-radius': '3rem',
      '--utrecht-blockquote-padding': '2.5rem',
    } as unknown as CSSProperties,
  },
};
