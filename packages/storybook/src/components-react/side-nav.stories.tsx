import {
  Icon,
  NumberBadge,
  SideNav,
  SideNavItem,
  SideNavLink,
  SideNavLinkLabel,
  SideNavList,
} from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './side-nav.md?raw';

const meta = {
  title: 'Side Navigation',
  id: 'rhc-sideNav',
  component: SideNav,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    componentOrigin: 'Dit component is overgenomen van Gemeente Den Haag Side Navigation',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/side-nav-react/src/SideNav.tsx',
  },
} satisfies Meta<typeof SideNav>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <SideNavList key="ul-1">
        <SideNavItem>
          <SideNavLink current href="/#">
            <Icon icon="home" />
            <SideNavLinkLabel>Dashboard</SideNavLinkLabel>
          </SideNavLink>
        </SideNavItem>
      </SideNavList>,
      <SideNavList key="ul-2">
        <SideNavItem>
          <SideNavLink href="/#">
            <Icon icon="mail" />
            <SideNavLinkLabel>
              Berichtenbox
              <NumberBadge>9</NumberBadge>
            </SideNavLinkLabel>
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink href="/#">
            <Icon icon="comment" />
            <SideNavLinkLabel>MijnZaken</SideNavLinkLabel>
          </SideNavLink>
        </SideNavItem>
      </SideNavList>,
      <SideNavList key="ul-3">
        <SideNavItem>
          <SideNavLink href="/#">
            <Icon icon="user" />
            <SideNavLinkLabel>Identiteit</SideNavLinkLabel>
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink href="/#">
            <Icon icon="currency-euro" />
            <SideNavLinkLabel>Financiën</SideNavLinkLabel>
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink href="/#">
            <Icon icon="hashtag" />
            <SideNavLinkLabel>Werk</SideNavLinkLabel>
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink href="/#">
            <Icon icon="favoriet" />
            <SideNavLinkLabel>Gezondheid</SideNavLinkLabel>
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink href="/#">
            <Icon icon="home" />
            <SideNavLinkLabel>Wonen</SideNavLinkLabel>
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink href="/#">
            <Icon icon="car" />
            <SideNavLinkLabel>Vervoer</SideNavLinkLabel>
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink href="/#">
            <Icon icon="school" />
            <SideNavLinkLabel>Onderwijs</SideNavLinkLabel>
          </SideNavLink>
        </SideNavItem>
      </SideNavList>,
      <SideNavList key="ul-4">
        <SideNavItem>
          <SideNavLink href="/#">
            <Icon icon="instellingen" />
            <SideNavLinkLabel>Instellingen</SideNavLinkLabel>
          </SideNavLink>
        </SideNavItem>
      </SideNavList>,
    ],
  },
};
