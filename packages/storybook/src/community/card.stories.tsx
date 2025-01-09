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
    href: '#',
    title: 'Card Title',
    heading: 'Default Card',
    description: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *',
    metadata: 'Metadata',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
    docs: {
      description: {
        // TODO: use readme
        component: 'Card component for displaying content in various styles.',
      },
    },
    // TODO: add Figma, GitHub and NL DesignSystem links
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
  },
} as Meta<typeof Card>;

export default meta;

export const Default = {
  args: {
    linkLabel: 'Label',
    imageAlt: 'Placeholder Image',
  },
};

export const FullBleed = {
  args: {
    heading: 'Full Bleed Card',
    appearance: 'full-bleed',
    description: 'This card has a background image.',
    imageAlt: 'Placeholder Image',
  },
};

export const Horizontal = {
  args: {
    heading: 'Heading',
    appearance: 'horizontal',
    imageAlt: 'Placeholder Image',
  },
};
