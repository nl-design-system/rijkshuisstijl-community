import { type NavBarLinkProps, SubNavBar } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Rijkshuisstijl/NavBar/SubNavBar',
  id: 'rhc-sub-nav-bar',
  component: SubNavBar,
} satisfies Meta<typeof SubNavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

const columns: NavBarLinkProps[][] = [
  [
    {
      label: 'Label',
      href: '#',
      id: 'li-1',
    },
    {
      label: 'Label',
      href: '#',
      id: 'li-2',
    },
    {
      label: 'Label',
      href: '#',
      id: 'li-3',
    },
  ],
  [
    {
      label: 'Label',
      href: '#',
      id: 'li-4',
    },
  ],
];

export const Default: Story = {
  args: {
    columns,
  },
};
