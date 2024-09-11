import { Icon, LinkListLink } from '@rijkshuisstijl-community/components-react';
import { ChevronRightIcon } from '@rijkshuisstijl-community/components-react/src/icons';
import { Meta, StoryObj } from '@storybook/react/*';

const meta = {
  title: 'Rijkshuisstijl/Link List/Link List Link',
  id: 'rijkshuisstijl-link-list-link',
  component: LinkListLink,
  args: {
    children: '',
  },
  argTypes: {
    href: {
      type: { name: 'string', required: true },
      table: {
        category: 'HTML attribute',
      },
    },
    icon: {},
  },
} satisfies Meta<typeof LinkListLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Label',
    href: '#',
    icon: (
      <Icon>
        <ChevronRightIcon />
      </Icon>
    ),
  },
};

export const NoIcon: Story = {
  args: {
    children: 'Label',
    href: '#',
  },
};

export const Active: Story = {
  parameters: {
    pseudo: { active: true },
  },
  args: {
    children: 'Label',
    href: '#',
    icon: (
      <Icon>
        <ChevronRightIcon />
      </Icon>
    ),
  },
};

export const Focus: Story = {
  parameters: {
    pseudo: { focus: true },
  },
  args: {
    children: 'Label',
    href: '#',
    icon: (
      <Icon>
        <ChevronRightIcon />
      </Icon>
    ),
  },
};

export const Visited: Story = {
  parameters: {
    pseudo: { visited: true },
  },
  args: {
    children: 'Label',
    href: 'https://example.com/',
    icon: (
      <Icon>
        <ChevronRightIcon />
      </Icon>
    ),
  },
};
