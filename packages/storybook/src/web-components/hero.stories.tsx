import { HeroWebComponent } from '@rijkshuisstijl-community/web-components';
import type { Meta, StoryObj } from '@storybook/web-components';
HeroWebComponent.define();

const meta = {
  title: 'Web Components/Hero',
  id: 'rhc-hero-web',
  component: 'rhc-hero',
  argTypes: {
    aspectRatio: {
      name: 'Aspect Ratio',
      type: { name: 'string' },
      control: 'select',
      options: ['16 / 9', '1 / 1', '4 / 3'],
      table: {
        category: 'Attributes',
        defaultValue: { summary: '16 / 9' },
      },
    },
    heading: {
      name: 'Heading Text',
      type: { name: 'string' },
      control: 'text',
      table: {
        category: 'Attributes',
      },
    },
    heroMessage: {
      name: 'Show Hero Message',
      type: { name: 'string' },
      control: 'select',
      options: ['true', 'false'],
      table: {
        category: 'Attributes',
        defaultValue: { summary: 'false' },
      },
    },
    imageAlt: {
      name: 'Image Alt Text',
      type: { name: 'string' },
      control: 'text',
      table: {
        category: 'Attributes',
      },
    },
    subHeading: {
      name: 'Sub Heading Text',
      type: { name: 'string' },
      control: 'text',
      table: {
        category: 'Attributes',
      },
    },
    textAlign: {
      name: 'Text Alignment',
      type: { name: 'string' },
      control: 'select',
      options: ['start', 'end'],
      table: {
        category: 'Attributes',
        defaultValue: { summary: 'start' },
      },
    },
    borderRadiusCorner: {
      name: 'Border Radius Corner',
      type: { name: 'string' },
      control: 'select',
      options: ['start-start', 'start-end', 'end-start', 'end-end'],
      table: {
        category: 'Attributes',
        defaultValue: { summary: 'null' },
      },
    },
    headingLevel: {
      name: 'Heading Level',
      type: { name: 'string' },
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      table: {
        category: 'Attributes',
        defaultValue: { summary: '3' },
      },
    },
    imageSrc: {
      name: 'Image Source URL',
      type: { name: 'string' },
      control: 'text',
      table: {
        category: 'Attributes',
      },
    },
  },
  args: {
    aspectRatio: '16 / 9',
    heading: 'heading text',
    heroMessage: 'true',
    imageAlt: 'image alt text',
    subHeading: 'sub heading text',
    textAlign: 'start',
    borderRadiusCorner: 'start-start',
    headingLevel: 3,
    imageSrc:
      'https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/main/proprietary/assets/src/placeholder.jpg',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
    docs: {
      description: {
        component: 'Hero',
      },
    },
  },
} as Meta<typeof HeroWebComponent>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
