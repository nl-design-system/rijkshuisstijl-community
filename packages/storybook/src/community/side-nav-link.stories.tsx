import { iconOptions, SideNavLink } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './side-nav-link.md?raw';

const meta = {
  title: 'Rijkshuisstijl/SideNav/SideNavLink',
  id: 'rhc-sideNavLink',
  component: SideNavLink,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: iconOptions,
      description: 'The icon to use',
      table: {
        type: { summary: 'string' },
      },
    },
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
    children: 'Label',
    icon: 'activiteit',
  },
  render: (args) => {
    return <SideNavLink {...args} />;
  },

  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        component: readme,
      },
    },
    // TODO: add Figma, GitHub and NL DesignSystem links
    componentOrign: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
  },
} satisfies Meta<typeof SideNavLink>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Mijn gegevens',
    icon: 'user',
  },
};

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

export const WithoutIcon: Story = {
  args: {
    icon: undefined,
  },
};
