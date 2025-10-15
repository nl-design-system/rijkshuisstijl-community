import { type NavBarLinkProps, SubNavBar } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Navigation Bar/Sub Navigation Bar',
  id: 'rhc-sub-nav-bar',
  component: SubNavBar,
  parameters: {
    // TODO: add documentation
    status: {
      type: 'STABLE',
    },
    // TODO: add Figma, GitHub and NL DesignSystem links
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
  },
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
