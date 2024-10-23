import { Hero } from '@rijkshuisstijl-community/components-react';
import { LinkListCard } from '@rijkshuisstijl-community/components-react';
import { LinkList } from '@rijkshuisstijl-community/components-react';
import { LinkListLink } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './hero.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Hero',
  id: 'rhc-hero',
  component: Hero,
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
    imageSrc:
      'https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/main/proprietary/assets/src/placeholder.jpg',
    imageAlt: 'Tullip field',
    heading: 'Heading',
    subHeading: 'Subtext',
    heroMessage: true,
  },
} satisfies Story;

export const CustomLinkListCard: Story = {
  args: {
    imageSrc:
      'https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/main/proprietary/assets/src/placeholder.jpg',
    imageAlt: 'Tullip field',
    heroMessage: false,
    children: (
      <LinkListCard heading="Hello World" headingLevel={2}>
        <LinkList>
          <LinkListLink href="#">Link 1</LinkListLink>
          <LinkListLink href="#">Link 2</LinkListLink>
          <LinkListLink href="#">Link 3</LinkListLink>
        </LinkList>
      </LinkListCard>
    ),
  },
} satisfies Story;
