import { Checkbox } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react/*';
import readme from './checkbox.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Checkbox',
  id: 'rhc-checkbox',
  component: Checkbox,
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        component: readme,
      },
    },
  },
  argTypes: {
    checked: {
      name: 'checked',
      type: { name: 'boolean', required: false },
    },
    onChange: {
      name: 'onChange',
      type: { name: 'function', required: false },
    },
    disabled: {
      name: 'disabled',
      type: { name: 'boolean', required: false },
    },
    value: {
      name: 'value',
      type: { name: 'string', required: false },
    },
  },
  args: {},
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Active: Story = {
  parameters: {
    pseudo: { active: true },
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
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    onChange: () => {},
  },
};

export const CheckedAndActive: Story = {
  args: {
    checked: true,
    onChange: () => {},
  },
  parameters: {
    pseudo: { active: true },
  },
};

export const CheckedAndHover: Story = {
  args: {
    checked: true,
    onChange: () => {},
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const CheckedAndFocus: Story = {
  args: {
    checked: true,
    onChange: () => {},
  },
  parameters: {
    pseudo: { focus: true },
  },
};

export const CheckedAndFocusVisible: Story = {
  args: {
    checked: true,
    onChange: () => {},
  },
  parameters: {
    pseudo: { focusVisible: true },
    controls: { exclude: ['appearance'] },
  },
};

export const CheckedAndDisabled: Story = {
  args: {
    checked: true,
    onChange: () => {},
    disabled: true,
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};

export const IndeterminateAndActive: Story = {
  args: {
    indeterminate: true,
  },
  parameters: {
    pseudo: { active: true },
  },
};

export const IndeterminateAndHover: Story = {
  args: {
    indeterminate: true,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const IndeterminateAndFocus: Story = {
  args: {
    indeterminate: true,
  },
  parameters: {
    pseudo: { focus: true },
  },
};

export const IndeterminateAndFocusVisible: Story = {
  args: {
    indeterminate: true,
  },
  parameters: {
    pseudo: { focusVisible: true, focus: true },
  },
};

export const IndeterminateAndDisabled: Story = {
  args: {
    indeterminate: true,
    disabled: true,
  },
};
