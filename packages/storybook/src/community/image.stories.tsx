import { Image } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import readme from './image.md?raw';

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
    docs: {
      description: {
        component: readme,
      },
    },
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
