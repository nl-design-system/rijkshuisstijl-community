import { NavBar, type NavBarItemProps } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Rijkshuisstijl/NavBar',
  id: 'rhc-nav-bar',
  component: NavBar,
  argTypes: {
    items: {
      name: 'items',
    },
    endItems: {
      name: 'endItems',
    },
  },
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

const items: NavBarItemProps[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    subItems: [
      { label: 'Consulting', href: '/services/consulting' },
      { label: 'Development', href: '/services/development' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

const endItems: NavBarItemProps[] = [
  { label: 'Login', href: '/login' },
  { label: 'Register', href: '/register' },
];

export const Default: Story = {
  args: {
    items,
  },
};

export const WithEndItems: Story = {
  args: {
    items,
    endItems,
  },
};

export const WithSubMenu: Story = {
  args: {
    items: [
      ...items,
      {
        label: 'More',
        href: '/more',
        subItems: [
          { label: 'Option 1', href: '/more/option1' },
          { label: 'Option 2', href: '/more/option2' },
        ],
      },
    ],
    endItems,
  },
};
