import { Icon, LinkListLink } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react/*';

const meta = {
  title: 'Rijkshuisstijl/Link List/Link List Link',
  id: 'rijkshuisstijl-link-list-link',
  component: LinkListLink,
  args: {
    children: 'Label',
    href: '#',
    icon: <Icon icon={'chevron-right'} />,
  },
  argTypes: {
    href: {
      type: { name: 'string', required: true },
      table: {
        category: 'HTML attribute',
      },
    },
  },
} satisfies Meta<typeof LinkListLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Label',
    href: '#',
    icon: <Icon icon={'chevron-right'} />,
  },
};

export const Hover: Story = {
  parameters: {
    pseudo: { hover: true },
  },
};

export const Active: Story = {
  parameters: {
    pseudo: { active: true },
  },
};

export const Focus: Story = {
  parameters: {
    pseudo: { focus: true },
  },
  args: {},
};

export const Visited: Story = {
  parameters: {
    pseudo: { visited: true },
  },
};
