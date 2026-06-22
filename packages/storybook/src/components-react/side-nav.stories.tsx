import {
  Icon,
  NumberBadge,
  Separator,
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
    // TODO: add Figma and NL DesignSystem links
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
            <Icon icon="tegelweergave" />
            <SideNavLinkLabel>Overzicht</SideNavLinkLabel>
          </SideNavLink>
        </SideNavItem>
      </SideNavList>,
      <Separator invisible key="separator-1" />,
      <SideNavList key="ul-2">
        <SideNavItem>
          <SideNavLink href="/#">
            <Icon icon="activiteit" />
            <SideNavLinkLabel>Mijn taken</SideNavLinkLabel>
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink href="/#">
            <Icon icon="mail" />
            <SideNavLinkLabel>
              Mijn berichten
              <NumberBadge>2</NumberBadge>
            </SideNavLinkLabel>
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink href="/#">
            <Icon icon="bewerken" />
            <SideNavLinkLabel>Mijn lopende zaken</SideNavLinkLabel>
          </SideNavLink>
        </SideNavItem>
      </SideNavList>,
      <Separator invisible key="separator-2" />,
      <SideNavList key="ul-3">
        <SideNavItem>
          <SideNavLink href="/#">
            <Icon icon="user" />
            <SideNavLinkLabel>Mijn gegevens</SideNavLinkLabel>
          </SideNavLink>
        </SideNavItem>
      </SideNavList>,
    ],
  },
};
