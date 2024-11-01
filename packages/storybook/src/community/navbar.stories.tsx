import { NavBar, type NavBarItemProps } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Rijkshuisstijl/NavBar',
  id: 'rhc-nav-bar',
  component: NavBar,
  parameters: {
    status: {
      type: 'STABLE',
    },
  },
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

const items: NavBarItemProps[] = [
  {
    label: 'Link',
    href: '/',
  },
  {
    label: 'Link',
    href: '/',
  },
  {
    label: 'Link',
    href: '/',
  },
];

const endItems: NavBarItemProps[] = [
  {
    label: 'Link',
    href: '/',
  },
  {
    label: 'Link',
    href: '/',
  },
];

export const Default: Story = {
  args: {
    items,
  },
};

export const WithHeading: Story = {
  args: {
    items,
    headingItem: { label: 'Heading', href: '/' },
  },
};

export const WithEndItems: Story = {
  args: {
    items,
    endItems,
  },
};
