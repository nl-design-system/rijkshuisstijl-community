import { NavBar, SubNavBar, type NavBarItemProps } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './navbar.md?raw';

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

export const WithIdentity: Story = {
  args: {
    identity: 'Identity',
    items,
    endItems,
  },
};

export const WithMegamenu: Story = {
  args: {
    identity: 'Identity',
    endItems,
  },
  render: (args) => (
    <NavBar
      {...args}
      megamenu={
        <SubNavBar
          columns={[
            [
              { id: 'mm-1', label: 'Onderwerp 1', href: '/' },
              { id: 'mm-2', label: 'Onderwerp 2', href: '/' },
              { id: 'mm-3', label: 'Onderwerp 3', href: '/' },
            ],
            [
              { id: 'mm-4', label: 'Onderwerp 4', href: '/' },
              { id: 'mm-5', label: 'Onderwerp 5', href: '/' },
            ],
            [
              { id: 'mm-6', label: 'Onderwerp 6', href: '/' },
              { id: 'mm-7', label: 'Onderwerp 7', href: '/' },
              { id: 'mm-8', label: 'Onderwerp 8', href: '/' },
            ],
          ]}
        />
      }
    />
  ),
};

export const WithEndItems: Story = {
  args: {
    items,
    endItems,
  },
};

const itemsWithSubList: NavBarItemProps[] = [
  {
    id: 'sublist-link',
    label: 'Onderwerpen',
    href: '/',
    subList: {
      sections: [
        {
          id: 'section-1',
          heading: 'Categorie A',
          items: [
            { id: 'sub-1', label: 'Onderwerp 1', href: '/' },
            { id: 'sub-2', label: 'Onderwerp 2', href: '/' },
            { id: 'sub-3', label: 'Onderwerp 3', href: '/' },
          ],
        },
        {
          id: 'section-2',
          heading: 'Categorie B',
          items: [
            { id: 'sub-4', label: 'Onderwerp 4', href: '/' },
            { id: 'sub-5', label: 'Onderwerp 5', href: '/' },
          ],
        },
      ],
    },
  },
  {
    id: 'plain-link',
    label: 'Link',
    href: '/',
  },
];

export const WithSubList: Story = {
  args: {
    identity: 'Identity',
    items: itemsWithSubList,
    endItems,
  },
};
