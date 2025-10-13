import { NavBar, type NavBarItemProps } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './navbar.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Navigation Bar',
  id: 'rhc-nav-bar',
  component: NavBar,
  parameters: {
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    status: {
      type: 'UNSTABLE',
    },
    // TODO: add Figma, GitHub and NL DesignSystem links
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/NavBar.tsx',
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
