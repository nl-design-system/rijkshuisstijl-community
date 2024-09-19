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
      description: 'Active (demo property)',
      control: 'boolean',
    },
    focus: {
      description: 'Focus (demo property)',
      control: 'boolean',
    },
    focusVisible: {
      description: 'Focus-visible (demo property)',
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
