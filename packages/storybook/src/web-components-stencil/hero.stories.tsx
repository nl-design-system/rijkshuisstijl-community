import { RhcHero } from '@rijkshuisstijl-community/web-components-react';
import { Meta, StoryObj } from '@storybook/react/*';

const meta: Meta = {
  title: 'Web Components Stencil/Hero',
  component: RhcHero,
  argTypes: {
    heroMessage: {
      description: 'Hero Message Visible',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
      },
    },
    headingLevel: {
      description: 'Heading level',
      control: { type: 'select' },
      options: [undefined, 1, 2, 3, 4, 5],
      table: {
        type: { summary: 'number' },
      },
    },
    textAlign: {
      description: 'Alignment of the message box',
      control: { type: 'select' },
      options: [undefined, 'start', 'end'],
      table: {
        type: { summary: 'string' },
      },
    },
    aspectRatio: {
      description: 'Aspect ratio',
      control: { type: 'select' },
      options: [undefined, '16 / 9', '1 / 1', '4 / 3'],
      table: {
        type: { summary: 'string' },
      },
    },
    borderRadiusCorner: {
      description: 'Border radius corner',
      control: { type: 'select' },
      options: [undefined, 'start-start', 'start-end', 'end-start', 'end-end'],
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    imageSrc:
      'https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/main/proprietary/assets/src/placeholder.jpg',
    imageAlt: 'Tullip field',
    heading: 'Heading',
    subHeading: 'Subtext',
    heroMessage: true,
    headingLevel: 3,
    textAlign: 'start',
    aspectRatio: '16 / 9',
    borderRadiusCorner: 'start-start',
  },
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
  },
};
export default meta;

type Story = StoryObj<typeof RhcHero>;

export const Default: Story = {} satisfies Story;
