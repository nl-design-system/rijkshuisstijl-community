import {
  Heading,
  Icon,
  LinkList,
  LinkListLink,
  NavBar,
  NavBarEnd,
  NavBarIdentity,
  NavBarItem,
  NavBarLink,
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
    <NavBarItem>
      <NavBarLink href="/">Link</NavBarLink>§
    </NavBarItem>
    <NavBarItem>
      <NavBarLink href="/">Link</NavBarLink>§
    </NavBarItem>
    <NavBarItem>
      <NavBarLink href="/">Link</NavBarLink>§
    </NavBarItem>
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
          <NavBarItem>
            <NavBarLink href="/">Link</NavBarLink>§
          </NavBarItem>
          <NavBarItem>
            <NavBarLink href="/">Link</NavBarLink>§
          </NavBarItem>
        </NavBarEnd>
      </>
    ),
  },
};

export const WithCurrentPage: Story = {
  args: {
    children: (
      <NavBarStart>
        <NavBarItem>
          <NavBarLink current href="/">
            Link
          </NavBarLink>
        </NavBarItem>
        <NavBarItem>
          <NavBarLink href="/">Link</NavBarLink>
        </NavBarItem>
      </NavBarStart>
    ),
  },
};

export const WithIcons: Story = {
  args: {
    children: (
      <NavBarStart>
        <NavBarItem>
          <NavBarLink href="/" icon={<Icon icon="zoek" />}>
            Zoeken
          </NavBarLink>
        </NavBarItem>
        <NavBarItem>
          <NavBarLink iconOnly href="/" iconEnd={<Icon icon="inloggen" />}>
            Inloggen
          </NavBarLink>
        </NavBarItem>
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
          <NavBarItem>
            <NavBarLink href="/">Contact</NavBarLink>§
          </NavBarItem>
        </NavBarEnd>
      </>
    ),
  },
};
