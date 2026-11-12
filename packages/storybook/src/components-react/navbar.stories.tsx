import {
  Heading,
  Icon,
  LinkList,
  LinkListLink,
  NavBar,
  NavBarIdentity,
  NavBarItem,
  NavBarMegaMenu,
  NavBarMegaMenuSeparator,
  NavBarMegaMenuTagline,
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
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/navigation-bar-react/src/NavBar.tsx',
  },
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

const items = (
  <>
    <NavBarItem href="/" id="first-link" label="Link" />
    <NavBarItem href="/" id="second-link" label="Link" />
    <NavBarItem href="/" id="third-link" label="Link" />
  </>
);

const endItems = (
  <>
    <NavBarItem href="/" id="end-first-link" label="Link" />
    <NavBarItem href="/" id="end-second-link" label="Link" />
  </>
);

export const Default: Story = {
  args: { startItems: items },
};

export const WithIdentity: Story = {
  args: {
    startItems: (
      <>
        <NavBarIdentity href="/">Identity</NavBarIdentity>
        {items}
      </>
    ),
  },
};

export const WithEndItems: Story = {
  args: { startItems: items, endItems },
};

export const WithCurrentPage: Story = {
  args: {
    startItems: (
      <>
        <NavBarItem currentPage href="/" id="first-link" label="Link" />
        <NavBarItem href="/" id="second-link" label="Link" />
      </>
    ),
  },
};

export const WithIcons: Story = {
  args: {
    startItems: (
      <>
        <NavBarItem href="/" icon={<Icon icon="zoek" />} id="search" label="Zoeken" />
        <NavBarItem iconOnly href="/" icon={<Icon icon="inloggen" />} id="login" label="Inloggen" />
      </>
    ),
  },
};

export const WithSubList: Story = {
  args: {
    startItems: (
      <NavBarItem
        contentId="topics"
        href="/"
        id="topics"
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
      />
    ),
  },
};

export const WithMegaMenu: Story = {
  args: {
    startItems: (
      <>
        <NavBarIdentity primary href="/">
          Overheid.nl
        </NavBarIdentity>
        <NavBarMegaMenu>
          <NavBarMegaMenuTagline>Ingang naar informatie en diensten van alle overheden</NavBarMegaMenuTagline>
          <NavBarMegaMenuSeparator />
          <div className="rhc-grid">
            <div className="rhc-grid__cell rhc-grid__cell-d-3">
              <Heading appearanceLevel={5} className="rhc-nav-bar__megamenu-column-heading" level={3}>
                Diensten van de overheid
              </Heading>
              <LinkList className="rhc-nav-bar__megamenu__link-list">
                <LinkListLink className="rhc-nav-bar__megamenu-column-link" href="/">
                  Dienstenoverzicht
                </LinkListLink>
                <LinkListLink className="rhc-nav-bar__megamenu-column-link" href="/">
                  Levensgebeurtenissen
                </LinkListLink>
              </LinkList>
            </div>
          </div>
        </NavBarMegaMenu>
      </>
    ),
    endItems: <NavBarItem href="/" id="contact" label="Contact" />,
  },
};
