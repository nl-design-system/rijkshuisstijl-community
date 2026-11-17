import {
  Heading,
  Icon,
  LinkList,
  LinkListLink,
  NavBar,
  NavBarEnd,
  NavBarIdentity,
  NavBarItem,
  NavBarMegaMenu,
  NavBarMegaMenuClose,
  NavBarMegaMenuPanel,
  NavBarMegaMenuSeparator,
  NavBarMegaMenuTagline,
  NavBarMegaMenuTrigger,
  NavBarStart,
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

export const Default: Story = {
  args: {
    children: <NavBarStart>{items}</NavBarStart>,
  },
};

export const WithIdentity: Story = {
  args: {
    children: (
      <NavBarStart>
        <NavBarIdentity href="/">Identity</NavBarIdentity>
        {items}
      </NavBarStart>
    ),
  },
};

export const WithEndItems: Story = {
  args: {
    children: (
      <>
        <NavBarStart>{items}</NavBarStart>
        <NavBarEnd>
          <NavBarItem href="/" id="end-first-link" label="Link" />
          <NavBarItem href="/" id="end-second-link" label="Link" />
        </NavBarEnd>
      </>
    ),
  },
};

export const WithCurrentPage: Story = {
  args: {
    children: (
      <NavBarStart>
        <NavBarItem currentPage href="/" id="first-link" label="Link" />
        <NavBarItem href="/" id="second-link" label="Link" />
      </NavBarStart>
    ),
  },
};

export const WithIcons: Story = {
  args: {
    children: (
      <NavBarStart>
        <NavBarItem href="/" icon={<Icon icon="zoek" />} id="search" label="Zoeken" />
        <NavBarItem iconOnly href="/" icon={<Icon icon="inloggen" />} id="login" label="Inloggen" />
      </NavBarStart>
    ),
  },
};

export const WithMegaMenu: Story = {
  args: {
    children: (
      <>
        <NavBarStart>
          <NavBarIdentity primary href="/">
            Overheid.nl
          </NavBarIdentity>
          <NavBarMegaMenu>
            <NavBarMegaMenuTrigger target="onderwerpen">Kies een onderwerp of dienst</NavBarMegaMenuTrigger>
            <NavBarMegaMenuPanel id="onderwerpen">
              <NavBarMegaMenuTagline>Ingang naar informatie en diensten van alle overheden</NavBarMegaMenuTagline>
              <NavBarMegaMenuSeparator />
              <div className="rhc-grid">
                <div className="rhc-grid__cell rhc-grid__cell-d-3">
                  <Heading appearanceLevel={5} level={3}>
                    Diensten van de overheid
                  </Heading>
                  <LinkList>
                    <LinkListLink href="/">Dienstenoverzicht</LinkListLink>
                    <LinkListLink href="/">Levensgebeurtenissen</LinkListLink>
                  </LinkList>
                </div>
              </div>

              <NavBarMegaMenuClose target="onderwerpen" />
            </NavBarMegaMenuPanel>
          </NavBarMegaMenu>
        </NavBarStart>
        <NavBarEnd>
          <NavBarItem href="/" id="contact" label="Contact" />
        </NavBarEnd>
      </>
    ),
  },
};
