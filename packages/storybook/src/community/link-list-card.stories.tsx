import { LinkListCard, LinkListLink } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import readme from './link-list-card.md?raw';

type StoryProps = ComponentProps<typeof LinkListCard>;
const meta: Meta<StoryProps> = {
  title: 'Rijkshuisstijl/Link List Card',
  id: 'rijkshuisstijl-link-list-card',
  component: LinkListCard,
  argTypes: {
    headingLevel: {
      description: 'Link List Card heading level',
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      table: {
        category: 'Demo',
      },
    },
    heading: {
      description: 'Heading Text - used in heading slot',
      type: {
        name: 'string',
      },
      table: {
        category: 'Demo',
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
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    headingLevel: 3,
    heading: 'Heading',
    // links: [
    //   { href: 'https://www.example.com', body: 'Link 1' },
    //   { href: 'https://www.example.com', body: 'Link 2' },
    //   { href: 'https://www.example.com', body: 'Link 3' },
    // ],
    children: [
      <LinkListLink href="#">Link 1</LinkListLink>,
      <LinkListLink href="#">Link 2</LinkListLink>,
      <LinkListLink href="#">Link 3</LinkListLink>,
    ],
  },
};
