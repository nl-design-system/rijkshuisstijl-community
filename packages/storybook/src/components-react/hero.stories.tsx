import { Hero, LinkListCard, LinkListLink } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './hero.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Hero',
  id: 'rhc-hero',
  component: Hero,
  argTypes: {
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
    imageSrc: {
      description: 'Image source URL',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    imageAlt: {
      description: 'Image alt text',
      control: { type: 'text' },
      defaultValue: '',
      table: {
        type: { summary: 'string' },
      },
    },
    imagePresentation: {
      description: 'Image is decorative',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add nldesignsystem page when it's available (not yet available on 25/03/25).
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=15708-524&node-type=canvas&t=fXG4KjJRXbo2PG2J-0',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Hero.tsx',
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
  },
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    imageSrc: '/placeholder.jpg',
    imageAlt: 'Tullip field',
    heading: 'Heading',
    subHeading: 'Subtext',
  },
} satisfies Story;

export const CustomChildren: Story = {
  args: {
    imageSrc: '/placeholder.jpg',
    imageAlt: 'Tullip field',
    children: (
      <LinkListCard heading="Hello World" headingLevel={2}>
        <LinkListLink href="#">Link 1</LinkListLink>
        <LinkListLink href="#">Link 2</LinkListLink>
        <LinkListLink href="#">Link 3</LinkListLink>
      </LinkListCard>
    ),
  },
} satisfies Story;

export const TextAlignRight: Story = {
  args: {
    imageSrc: '/placeholder.jpg',
    imageAlt: 'Tullip field',
    heading: 'Heading',
    subHeading: 'Hero with the text area aligned to the right (end)',
    textAlign: 'end',
  },
} satisfies Story;

export const AspectRatioFourToThree: Story = {
  args: {
    aspectRatio: '4 / 3',
    imageSrc: '/placeholder.jpg',
    imageAlt: 'Tullip field',
    heading: 'Heading',
    subHeading: 'Hero with the aspect ratio of 4:3',
  },
} satisfies Story;
