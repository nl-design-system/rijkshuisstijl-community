/* @license CC0-1.0 */

import { Radio, type RadioProps } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';

interface RadioStoryProps extends RadioProps {
  focus?: boolean;
  focusVisible?: boolean;
  hover?: boolean;
  active?: boolean;
}

const RadioStory = ({ active, focus, focusVisible, hover, name, ...args }: RadioStoryProps) => (
  <Radio
    name={name || undefined}
    className={clsx({
      'utrecht-radio-button--active': active,
      'utrecht-radio-button--focus': focus,
      'utrecht-radio-button--focus-visible': focusVisible,
      'utrecht-radio-button--hover': hover,
    })}
    {...args}
  />
);

const meta = {
  title: 'Rijkshuisstijl/Radio',
  id: 'rijkshuisstijl-radio',
  component: RadioStory,
  args: {
    checked: false,
    disabled: false,
    active: false,
    hover: false,
    focus: false,
    focusVisible: false,
    invalid: false,
    name: '',
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
    hover: {
      description: 'Hover',
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

export const Default: Story = {};

export const Hover: Story = {
  name: 'Hover',
  args: {
    hover: true,
  },
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

export const DisabledAndHover: Story = {
  name: 'Disabled and Hover',
  args: {
    disabled: true,
    hover: true,
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

export const CheckedAndHover: Story = {
  name: 'Checked and Hover',
  args: {
    checked: true,
    hover: true,
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

export const CheckedDisabledAndHover: Story = {
  name: 'Checked, Disabled and Hover',
  args: {
    checked: true,
    disabled: true,
    hover: true,
  },
  parameters: {
    docs: {
      description: {
        story: `Should be identical to "Checked + disabled"`,
      },
    },
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

export const CheckedAndInvalid: Story = {
  name: 'Checked and Invalid',
  args: {
    checked: true,
    invalid: true,
  },
};
