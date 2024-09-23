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

export const WithHeading: Story = {
  args: {
    items,
    headingItem: { label: 'My Site', href: '/' },
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
        subList: {
          sections: [
            {
              heading: 'More',
              headingLevel: 3,
              items: [
                { label: 'More 1', href: '/more/more1' },
                { label: 'More 2', href: '/more/more2' },
              ],
            },
          ],
        },
      },
    ],
    endItems,
  },
};
