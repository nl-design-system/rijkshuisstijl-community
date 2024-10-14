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
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof SideNavLink>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Mijn gegevens',
  },
};

export const Current: Story = {
  args: {
    children: 'Label',
    current: true,
  },
};
export const Hover: Story = {
  args: {
    children: 'Label',
  },
  parameters: {
    pseudo: { hover: true },
  },
};
export const Focus: Story = {
  args: {
    children: 'Label',
  },
  parameters: {
    pseudo: { focus: true },
  },
};
export const FocusVisible: Story = {
  args: {
    children: 'Label',
  },
  parameters: {
    pseudo: { focusVisible: true },
  },
};
export const Active: Story = {
  args: {
    children: 'Label',
  },
  parameters: {
    pseudo: { active: true },
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Label',
    icon: 'activiteit',
  },
};

export const CurrentAndHover: Story = {
  args: {
    children: 'Label',
    current: true,
    icon: 'activiteit',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const CurrentAndFocus: Story = {
  args: {
    children: 'Label',
    current: true,
    icon: 'activiteit',
  },
  parameters: {
    pseudo: { focus: true },
  },
};

export const CurrentAndFocusVisible: Story = {
  args: {
    children: 'Label',
    current: true,
    icon: 'activiteit',
  },
  parameters: {
    pseudo: {
      focusVisible: true,
    },
  },
};

export const CurrentAndActive: Story = {
  args: {
    children: 'Label',
    current: true,
    icon: 'activiteit',
  },
  parameters: {
    pseudo: { active: true },
  },
};
