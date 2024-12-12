import {
  BadgeCounter,
  Separator,
  SideNav,
  SideNavItem,
  SideNavLink,
  SideNavList,
} from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './side-nav.md?raw';

const meta = {
  title: 'Rijkshuisstijl/SideNav',
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
        component: readme,
      },
    },
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
            <BadgeCounter>2</BadgeCounter>
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
