/* @license CC0-1.0 */

import { Radio, type RadioProps } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';

interface RadioStoryProps extends RadioProps {
  focus?: boolean;
  focusVisible?: boolean;
  active?: boolean;
}

const RadioStory = ({ active, focus, focusVisible, name, ...args }: RadioStoryProps) => (
  <Radio
    name={name || undefined}
    className={clsx({
      'utrecht-radio-button--active': active,
      'utrecht-radio-button--focus': focus,
      'utrecht-radio-button--focus-visible': focusVisible,
    })}
    {...args}
  />
);

const meta = {
  title: 'Rijkshuisstijl/Radio',
  id: 'rhc-radio',
  component: RadioStory,
  args: {
    checked: false,
    disabled: false,
    active: false,
    focus: false,
    focusVisible: false,
    invalid: false,
    name: 'meta',
  },
  argTypes: {
    checked: {
      description: 'Checked',
      control: 'boolean',
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    active: {
      description: 'Active',
      control: 'boolean',
    },
    focus: {
      description: 'Focus',
      control: 'boolean',
    },
    focusVisible: {
      description: 'Focus-visible',
      control: 'boolean',
    },
    invalid: {
      description: 'Invalid',
      control: 'boolean',
    },
    name: {
      description: 'Radio group name. Use the same name for each radio in a group.',
    },
  },
} satisfies Meta<typeof RadioStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
};

export const Focus: Story = {
  name: 'Focus',
  args: {
    focus: true,
  },
};

export const FocusVisible: Story = {
  name: 'Focus Visible',
  args: {
    focus: true,
    focusVisible: true,
  },
};

export const Active: Story = {
  name: 'Active',
  args: {
    active: true,
    focus: true,
  },
  parameters: {
    docs: {
      description: {
        story: `When the component is \`active\`, it always has \`focus\` too. Test these states together for accurate results.`,
      },
    },
  },
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    disabled: true,
  },
};

export const DisabledAndFocussed: Story = {
  name: 'Disabled and Focus',
  args: {
    disabled: true,
    focus: true,
  },
};

export const DisabledAndFocusVisible: Story = {
  name: 'Disabled and Focus-Visible',
  args: {
    disabled: true,
    focus: true,
    focusVisible: true,
  },
};

export const DisabledAndActive: Story = {
  name: 'Disabled and Active',
  args: {
    disabled: true,
    active: true,
  },
};

export const Checked: Story = {
  name: 'Checked',
  args: {
    checked: true,
  },
};

export const CheckedAndFocus: Story = {
  name: 'Checked and Focus',
  args: {
    checked: true,
    focus: true,
  },
};

export const CheckedAndFocusVisible: Story = {
  name: 'Checked and Focus-Visible',
  args: {
    checked: true,
    focus: true,
    focusVisible: true,
  },
};

export const CheckedAndActive: Story = {
  name: 'Checked and Active',
  args: {
    checked: true,
    active: true,
  },
};

export const CheckedAndDisabled: Story = {
  name: 'Checked and Disabled',
  args: {
    checked: true,
    disabled: true,
  },
};

export const CheckedDisabledAndFocus: Story = {
  name: 'Checked, Disabled and Focus',
  args: {
    checked: true,
    disabled: true,
    focus: true,
  },
  parameters: {
    docs: {
      description: {
        story: `Should be identical to "Checked + disabled"`,
      },
    },
  },
};

export const CheckedDisabledAndFocusVisible: Story = {
  name: 'Checked, Disabled and Focus-visible',
  args: {
    checked: true,
    disabled: true,
    focus: true,
    focusVisible: true,
  },
  parameters: {
    docs: {
      description: {
        story: `Should be identical to "Checked + disabled"`,
      },
    },
  },
};

export const CheckedDisabledAndActive: Story = {
  name: 'Checked, Disabled and Active',
  args: {
    checked: true,
    disabled: true,
    active: true,
    focus: true,
  },
  parameters: {
    docs: {
      description: {
        story: `Should be identical to "Checked + disabled"`,
      },
    },
  },
};

export const Invalid: Story = {
  name: 'Invalid',
  args: {
    invalid: true,
  },
};
