import { Card } from '@rijkshuisstijl-community/components-react';
import type { Meta } from '@storybook/react';
import readme from './card.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

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
      if: { arg: 'appearance', neq: 'horizontal' },
    },
    linkLabel: {
      description: 'Link label',
      control: { type: 'text' },
      defaultValue: '',
      if: { arg: 'appearance', eq: 'default' },
    },
    metaData: {
      description: 'Metadata',
      control: { type: 'text' },
      defaultValue: '',
      if: { arg: 'appearance', neq: 'horizontal' },
    },
    title: {
      description: 'Anchor title (hover text) and aria-label attributes',
      control: { type: 'text' },
      defaultValue: '',
    },
    href: {
      description: 'Link',
      control: { type: 'text' },
      defaultValue: '',
    },
  },
  args: {
    imageSrc: './placeholder.jpg',
    href: '#',
    title: 'Card Title',
    heading: 'Card Heading',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    linkLabel: 'Link label',
    metaData: 'Metadata',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    github: 'https://github.com/nl-design-system/rijkshuisstijl-community/issues/561',
    figma:
      'https://www.figma.com/design/Nv5EsCW9ioWBUSi9m9JqOa/Local---Rijkshuisstijl---Bibliotheek?node-id=472-1420&p=f&t=fuaKEQHb4FZ444xP-0',
    nldesignsystem: 'https://nldesignsystem.nl/card-as-link',
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
  },
} as Meta<typeof Card>;

export default meta;

export const Default = {
  args: {
    appearance: 'default',
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
    heading: 'Horizontal Card',
    appearance: 'horizontal',
    imageAlt: 'Placeholder Image',
  },
};
