import { Heading, Icon, LinkList, LinkListLink, NavBar } from '@rijkshuisstijl-community/components-react';
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
    <NavBar.Item href="/" id="first-link" label="Link" />
    <NavBar.Item href="/" id="second-link" label="Link" />
    <NavBar.Item href="/" id="third-link" label="Link" />
  </>
);

export const Default: Story = {
  args: {
    children: <NavBar.Start>{items}</NavBar.Start>,
  },
};

export const WithIdentity: Story = {
  args: {
    children: (
      <NavBar.Start>
        <NavBar.Identity href="/">Identity</NavBar.Identity>
        {items}
      </NavBar.Start>
    ),
  },
};

export const WithEndItems: Story = {
  args: {
    children: (
      <>
        <NavBar.Start>{items}</NavBar.Start>
        <NavBar.End>
          <NavBar.Item href="/" id="end-first-link" label="Link" />
          <NavBar.Item href="/" id="end-second-link" label="Link" />
        </NavBar.End>
      </>
    ),
  },
};

export const WithCurrentPage: Story = {
  args: {
    children: (
      <NavBar.Start>
        <NavBar.Item currentPage href="/" id="first-link" label="Link" />
        <NavBar.Item href="/" id="second-link" label="Link" />
      </NavBar.Start>
    ),
  },
};

export const WithIcons: Story = {
  args: {
    children: (
      <NavBar.Start>
        <NavBar.Item href="/" icon={<Icon icon="zoek" />} id="search" label="Zoeken" />
        <NavBar.Item iconOnly href="/" icon={<Icon icon="inloggen" />} id="login" label="Inloggen" />
      </NavBar.Start>
    ),
  },
};

export const WithSubList: Story = {
  args: {
    children: (
      <NavBar.Start>
        <NavBar.Item
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
      </NavBar.Start>
    ),
  },
};

export const WithMegaMenu: Story = {
  args: {
    children: (
      <>
        <NavBar.Start>
          <NavBar.Identity primary href="/">
            Overheid.nl
          </NavBar.Identity>
          <NavBar.MegaMenu>
            <NavBar.MegaMenu.Trigger target="onderwerpen">Kies een onderwerp of dienst</NavBar.MegaMenu.Trigger>
            <NavBar.MegaMenu.Panel id="onderwerpen">
              <NavBar.MegaMenu.Tagline>Ingang naar informatie en diensten van alle overheden</NavBar.MegaMenu.Tagline>
              <NavBar.MegaMenu.Separator />
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

              <NavBar.MegaMenu.Close target="onderwerpen" />
            </NavBar.MegaMenu.Panel>
          </NavBar.MegaMenu>
        </NavBar.Start>
        <NavBar.End>
          <NavBar.Item href="/" id="contact" label="Contact" />
        </NavBar.End>
      </>
    ),
  },
};
