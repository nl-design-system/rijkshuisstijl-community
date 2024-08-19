import { Checkbox } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react/*';
import readme from './checkbox.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Checkbox',
  id: 'rijkshuisstijl-checkbox',
  component: Checkbox,
  parameters: {
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
      //   table: { defaultValue: { summary: false } },
    },
    disabled: {
      name: 'disabled',
      type: { name: 'boolean', required: false },
      //   table: { defaultValue: { summary: false } },
    },
    value: {
      name: 'value',
      type: { name: 'string', required: false },
    },
  },
  args: {
    appearance: 'custom',
  },
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
  },
};

export const CheckedAndActive: Story = {
  args: {
    checked: true,
  },
  parameters: {
    pseudo: { active: true },
  },
};

export const CheckedAndHover: Story = {
  args: {
    checked: true,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const CheckedAndFocus: Story = {
  args: {
    checked: true,
  },
  parameters: {
    pseudo: { focusVisible: true, focus: true },
  },
};

export const CheckedAndDisabled: Story = {
  args: {
    checked: true,
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