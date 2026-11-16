import { Icon, NavBar, NavBarIdentity, NavBarItem, NavBarMegaMenu } from '@rijkshuisstijl-community/components-react';
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

const items = [
  <NavBarItem href="/" id="first-link" key="first-link" label="Link" />,
  <NavBarItem href="/" id="second-link" key="second-link" label="Link" />,
  <NavBarItem href="/" id="third-link" key="third-link" label="Link" />,
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
    identity: <NavBarIdentity href="/">Identity</NavBarIdentity>,
  },
};

export const WithEndItems: Story = {
  args: { items, endItems },
};

export const WithCurrentPage: Story = {
  args: {
    items: [<NavBarItem currentPage href="/" id="first-link" key="first-link" label="Link" />, ...items.slice(1)],
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      <NavBarItem href="/" icon={<Icon icon="zoek" />} id="search" key="search" label="Zoeken" />,
      <NavBarItem iconOnly href="/" icon={<Icon icon="inloggen" />} id="login" key="login" label="Inloggen" />,
    ],
  },
};

export const WithSubList: Story = {
  args: {
    items: [
      <NavBarItem
        contentId="topics"
        href="/"
        id="topics"
        key="topics"
        label="Onderwerpen"
        subList={{
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
        }}
      />,
    ],
  },
};

export const WithMegaMenu: Story = {
  args: {
    identity: (
      <NavBarIdentity primary href="/">
        Overheid.nl
      </NavBarIdentity>
    ),

    megamenu: (
      <NavBarMegaMenu
        tagline="Ingang naar informatie en diensten van alle overheden"
        columns={[
          {
            id: 'col-1',
            heading: 'Diensten van de overheid',
            items: [
              { id: 'mm-1', label: 'Dienstenoverzicht', href: '/' },
              { id: 'mm-2', label: 'Levensgebeurtenissen', href: '/' },
            ],
          },
        ]}
      />
    ),
  },
};
