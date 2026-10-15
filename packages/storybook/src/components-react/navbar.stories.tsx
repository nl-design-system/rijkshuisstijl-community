import {
  Icon,
  NavBar,
  NavBarItem,
  type NavBarItemProps,
  NavBarMegaMenu,
} from '@rijkshuisstijl-community/components-react';
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
    // TODO: add Figma and GitHub links
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/NavBar.tsx',
  },
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

const items: NavBarItemProps[] = [
  { id: 'first-link', label: 'Link', href: '/' },
  { id: 'second-link', label: 'Link', href: '/' },
  { id: 'third-link', label: 'Link', href: '/' },
];

const endItems = [
  <NavBarItem href="/" id="end-first-link" key="end-first-link" label="Link" />,
  <NavBarItem href="/" id="end-second-link" key="end-second-link" label="Link" />,
];

export const Default: Story = {
  args: { items },
};

export const WithIdentity: Story = {
  args: {
    items,
    identity: { value: 'Identity', href: '/' },
  },
};

export const WithEndItems: Story = {
  args: { items, endItems },
};

export const WithCurrentPage: Story = {
  args: {
    items: [{ ...items[0], currentPage: true }, ...items.slice(1)],
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { id: 'search', label: 'Zoeken', href: '/', icon: <Icon icon="zoek" /> },
      { id: 'login', label: 'Inloggen', href: '/', icon: <Icon icon="inloggen" />, iconOnly: true },
    ],
  },
};

export const WithSubList: Story = {
  args: {
    items: [
      {
        id: 'topics',
        label: 'Onderwerpen',
        href: '/',
        contentId: 'topics',
        subList: {
          sections: [
            {
              id: 'section-a',
              heading: 'Sectie A',
              items: [
                { id: 'a-1', label: 'Link', href: '/' },
                { id: 'a-2', label: 'Link', href: '/' },
              ],
            },
          ],
        },
      },
    ],
  },
};

export const WithMegaMenu: Story = {
  args: {
    identity: { value: 'Overheid.nl', href: '/', appearance: 'primary' },
    megamenu: (
      <NavBarMegaMenu
        tagline="Ingang naar informatie en diensten van alle overheden"
        columns={[
          {
            id: 'col-1',
            heading: 'Diensten van de overheid',
            items: [
              { id: 'mm-1', label: 'Diensten overzicht', href: '/' },
              { id: 'mm-2', label: 'Levensgebeurtenissen', href: '/' },
            ],
          },
        ]}
      />
    ),
  },
};
