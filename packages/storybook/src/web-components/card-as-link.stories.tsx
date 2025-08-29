import { CardAsLinkWebComponent } from '@rijkshuisstijl-community/web-components';
import type { Meta } from '@storybook/web-components';
import { mergeMarkdown } from '../../helpers/merge-markdown';
import readme from '../community/card-as-link.md?raw';

CardAsLinkWebComponent.define();

const meta = {
  title: 'Card as Link',
  id: 'rhc-card-as-link-web',
  component: 'rhc-card-as-link',
  argTypes: {
    appearance: {
      description: 'Card appearance',
      control: { type: 'select' },
      options: ['default', 'full-bleed', 'horizontal'],
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
      defaultValue: '',
      table: {
        category: 'Props',
      },
    },
    imageAlt: {
      description: 'Image alt text',
      control: { type: 'text' },
      defaultValue: '',
      table: {
        category: 'Props',
      },
    },
    description: {
      description: 'Card content',
      control: { type: 'text' },
      defaultValue: '',
      if: { arg: 'appearance', neq: 'horizontal' },
      table: {
        category: 'Props',
      },
    },
    linkLabel: {
      description: 'Link label',
      control: { type: 'text' },
      defaultValue: '',
      if: { arg: 'appearance', eq: 'default' },
      table: {
        category: 'Props',
      },
    },
    metaData: {
      description: 'Metadata',
      control: { type: 'text' },
      defaultValue: '',
      if: { arg: 'appearance', neq: 'horizontal' },
      table: {
        category: 'Props',
      },
    },
    title: {
      description: 'Anchor title (hover text) and aria-label attributes',
      control: { type: 'text' },
      defaultValue: '',
      table: {
        category: 'Props',
      },
    },
    href: {
      description: 'Link',
      control: { type: 'text' },
      defaultValue: '',
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
    imageSrc: '/placeholder.jpg',
    linkLabel: 'Link label',
    metaData: 'Metadata',
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
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/CardAsLink.tsx',
    figma:
      'https://www.figma.com/design/Nv5EsCW9ioWBUSi9m9JqOa/Local---Rijkshuisstijl---Bibliotheek?node-id=472-1420&p=f&t=fuaKEQHb4FZ444xP-0',
    nldesignsystem: 'https://nldesignsystem.nl/card-as-link',
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
  },
} as Meta<typeof CardAsLinkWebComponent>;

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
