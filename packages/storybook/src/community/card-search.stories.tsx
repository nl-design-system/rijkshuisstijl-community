import { CardSearch } from '@rijkshuisstijl-community/components-react';
import type { Meta } from '@storybook/react';
import readme from './card.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Rijkshuisstijl/CardSearch',
  id: 'rhc-card-search',
  component: CardSearch,
  argTypes: {
    appearance: {
      description: 'Card appearance',
      control: { type: 'select' },
      options: ['default'],
      defaultValue: 'default',
      table: {
        category: 'Variant',
      },
    },
    heading: {
      description: 'Card heading',
      control: { type: 'text' },
      defaultValue: 'Card Heading',
      table: {
        category: 'Props',
      },
    },
    imageSrc: {
      description: 'Image source URL',
      control: { type: 'text' },
      table: {
        category: 'Props',
      },
    },
    imageAlt: {
      description: 'Image alt text',
      control: { type: 'text' },
      table: {
        category: 'Props',
      },
    },
    description: {
      description: 'Card content',
      control: { type: 'text' },
      if: { arg: 'appearance', neq: 'horizontal' },
      table: {
        category: 'Props',
      },
    },
    linkLabel: {
      description: 'Link label',
      control: { type: 'text' },
      if: { arg: 'appearance', eq: 'default' },
      table: {
        category: 'Props',
      },
    },
    metadata: {
      description: 'Metadata',
      control: { type: 'text' },
      if: { arg: 'appearance', neq: 'horizontal' },
      table: {
        category: 'Props',
      },
    },
    title: {
      description: 'Anchor title (hover text) and aria-label attributes',
      control: { type: 'text' },
      table: {
        category: 'Props',
      },
    },
    href: {
      description: 'Link',
      control: { type: 'text' },
      table: {
        category: 'Props',
      },
    },
  },
  args: {
    appearance: 'default',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    heading: 'Card Heading',
    href: '#',
    linkLabel: 'Link label',
    metadata: 'Metadata',
    title: 'Card Title',
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
} as Meta<typeof CardSearch>;

export default meta;

export const Default = {
  args: {
    appearance: 'default',
  },
};
