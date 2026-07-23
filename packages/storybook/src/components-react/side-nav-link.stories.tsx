import { Icon, SideNavLink, SideNavLinkLabel } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './side-nav-link.md?raw';

const meta = {
  title: 'Side Navigation/Side Navigation Link',
  id: 'rhc-sideNavLink',
  component: SideNavLink,
  argTypes: {
    current: {
      control: { type: 'boolean' },
      description: 'The current state of the link',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    href: '/#',
  },
  render: (args) => (
    <SideNavLink {...args}>
      <Icon icon="user" />
      <SideNavLinkLabel>Mijn gegevens</SideNavLinkLabel>
    </SideNavLink>
  ),
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
} satisfies Meta<typeof SideNavLink>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hover: Story = {
  parameters: {
    pseudo: { hover: true },
  },
};
export const Focus: Story = {
  parameters: {
    pseudo: { focus: true },
  },
};
export const FocusVisible: Story = {
  parameters: {
    pseudo: { focusVisible: true },
  },
};
export const Active: Story = {
  parameters: {
    pseudo: { active: true },
  },
};

export const Current: Story = {
  args: {
    current: true,
  },
};

export const CurrentAndHover: Story = {
  args: {
    current: true,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const CurrentAndActive: Story = {
  args: {
    current: true,
  },
  parameters: {
    pseudo: { active: true },
  },
};
export const CurrentAndFocus: Story = {
  args: {
    current: true,
  },
  parameters: {
    pseudo: { focus: true },
  },
};
export const CurrentAndFocusVisible: Story = {
  args: {
    current: true,
  },
  parameters: {
    pseudo: { focusVisible: true, focus: true },
  },
};
