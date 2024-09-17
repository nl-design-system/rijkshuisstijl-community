import { Hero } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './hero.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Hero',
  id: 'rhc-hero',
  component: Hero,
  argTypes: {
    headingLevel: {
      description: 'Heading level',
      control: { type: 'select' },
      options: [undefined, 1, 2, 3, 4, 5, 6],
      table: {
        type: { summary: 'number' },
      },
    },
    alignment: {
      description: 'Alignment',
      control: { type: 'select' },
      options: [undefined, 'inline-start', 'inline-end'],
      table: {
        type: { summary: 'string' },
      },
    },
    aspectRatio: {
      description: 'Aspect ratio',
      control: { type: 'select' },
      options: [undefined, '16:9', '1:1', '4:3'],
      table: {
        type: { summary: 'string' },
      },
    },
    roundedCornerLocation: {
      description: 'Rounded corner location',
      control: { type: 'select' },
      options: [undefined, 'start-start', 'start-end', 'end-start', 'end-end'],
      table: {
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    alignment: 'inline-start',
    imageSrc:
      'https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/main/proprietary/assets/src/placeholder.jpg',
    imageAlt: 'Tullip field',
    heading: 'Heading',
    subtext: 'Subtext',
  },
} satisfies Story;
