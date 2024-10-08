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
    onChange={() => {}}
    {...args}
  />
);

const meta = {
  title: 'Rijkshuisstijl/Radio button',
  id: 'rhc-radio',
  component: RadioStory,
  args: {
    checked: false,
    disabled: false,
    active: false,
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
      table: {
        category: 'Demo',
      },
    },
    focus: {
      description: 'Focus',
      control: 'boolean',
      table: {
        category: 'Demo',
      },
    },
    focusVisible: {
      description: 'Focus-visible',
      control: 'boolean',
      table: {
        category: 'Demo',
      },
    },
    invalid: {
      description: 'Invalid',
      control: 'boolean',
      table: {
        category: 'Demo',
      },
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

export const Hover: Story = {
  name: 'Hover',
  parameters: {
    pseudo: { hover: true },
  },
};

export const Focus: Story = {
  name: 'Focus',
  parameters: {
    pseudo: { focus: true },
  },
};

export const FocusVisible: Story = {
  name: 'Focus Visible',
  parameters: {
    pseudo: { focus: true, focusVisible: true },
  },
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    disabled: true,
  },
};

export const Invalid: Story = {
  name: 'Invalid',
  args: {
    invalid: true,
  },
};
