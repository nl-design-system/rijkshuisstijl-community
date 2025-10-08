import { HeroWebComponent } from '@rijkshuisstijl-community/web-components';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import readme from '../components-react/hero.md?raw';
import { mergeMarkdown } from '../helpers/merge-markdown';

HeroWebComponent.define();

const meta = {
  title: 'Hero',
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
    imageAlt: 'image alt text',
    subHeading: 'sub heading text',
    textAlign: 'start',
    borderRadiusCorner: 'start-start',
    headingLevel: 3,
    imageSrc: '/placeholder.jpg',
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
    // TODO: add NL DesignSystem link
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=15708-524&node-type=canvas&t=fXG4KjJRXbo2PG2J-0',
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/Hero.tsx',
  },
} as Meta<typeof HeroWebComponent>;

export default meta;

export const Default = {} as StoryObj<typeof meta>;
