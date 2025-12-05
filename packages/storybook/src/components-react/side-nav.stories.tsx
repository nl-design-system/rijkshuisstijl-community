import {
  NumberBadge,
  Separator,
  SideNav,
  SideNavItem,
  SideNavLink,
  SideNavList,
} from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './side-nav.md?raw';

const meta = {
  title: 'Side Navigation',
  id: 'rhc-sideNav',
  component: SideNav,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add Figma and NL DesignSystem links
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/SideNav.tsx',
  },
} satisfies Meta<typeof SideNav>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <SideNavList key="ul-1">
        <SideNavItem>
          <SideNavLink current href="/#" icon="tegelweergave">
            Overzicht
          </SideNavLink>
        </SideNavItem>
      </SideNavList>,
      <Separator invisible key="separator-1" />,
      <SideNavList key="ul-2">
        <SideNavItem>
          <SideNavLink href="/#" icon="activiteit">
            Mijn taken
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink href="/#" icon="mail">
            Mijn berichten
            <NumberBadge>2</NumberBadge>
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink href="/#" icon="bewerken">
            Mijn lopende zaken
          </SideNavLink>
        </SideNavItem>
      </SideNavList>,
      <Separator invisible key="separator-2" />,
      <SideNavList key="ul-3">
        <SideNavItem>
          <SideNavLink href="/#" icon="user">
            Mijn gegevens
          </SideNavLink>
        </SideNavItem>
      </SideNavList>,
    ],
  },
};
