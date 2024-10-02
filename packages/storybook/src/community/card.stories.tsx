import { Card } from '@rijkshuisstijl-community/components-react';
import type { Meta } from '@storybook/react';

const meta = {
  title: 'Rijkshuisstijl/Card',
  id: 'rhc-card',
  component: Card,
  argTypes: {
    heading: {
      description: 'Card heading',
      control: { type: 'text' },
      defaultValue: 'Card Heading',
    },
    appearance: {
      description: 'Card appearance',
      control: { type: 'select' },
      options: ['default', 'full-bleed', 'horizontal'],
      defaultValue: 'default',
    },
    imageSrc: {
      description: 'Image source URL',
      control: { type: 'text' },
      defaultValue: '',
    },
    imageAlt: {
      description: 'Image alt text',
      control: { type: 'text' },
      defaultValue: '',
    },
    description: {
      description: 'Card content',
      control: { type: 'text' },
      defaultValue: '',
    },
  },
  args: {
    imageSrc: './placeholder.jpg',
    imageAlt: 'Placeholder Image',
    href: '#',
    title: 'Card Title',
    description: '',
    linkLabel: '',
    metadata: '',
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Card component for displaying content in various styles.',
      },
    },
  },
} as Meta<typeof Card>;

export default meta;

export const Default = {
  args: {
    heading: 'Default Card',
    appearance: 'default',
  },
};

export const FullBleed = {
  args: {
    heading: 'Full Bleed Card',
    appearance: 'full-bleed',
    description: 'This card has a background image.',
  },
};

export const Horizontal = {
  args: {
    heading: 'Heading',
    appearance: 'horizontal',
  },
};
