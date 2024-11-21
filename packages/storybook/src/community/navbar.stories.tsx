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
    id: 'first-link',
    label: 'Link',
    href: '/',
  },
  {
    id: 'second-link',
    label: 'Link',
    href: '/',
  },
  {
    id: 'third-link',
    label: 'Link',
    href: '/',
  },
];

const endItems: NavBarItemProps[] = [
  {
    id: 'end-first-link',
    label: 'Link',
    href: '/',
  },
  {
    id: 'end-second-link',
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
    headingItem: {
      id: 'heading',
      label: 'Heading',
      href: '/',
    },
  },
};

export const WithEndItems: Story = {
  args: {
    items,
    endItems,
  },
};
