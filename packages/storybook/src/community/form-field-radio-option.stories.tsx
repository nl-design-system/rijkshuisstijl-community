import { FormFieldRadioOption } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import '@rijkshuisstijl-community/components-css/index.scss';

const meta = {
  title: 'Rijkshuisstijl/Form field/Form field Radio Option',
  id: 'rhc-form-field-radio-option',
  component: FormFieldRadioOption,
  parameters: {},
  args: {
    checked: false,
    disabled: false,
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
    invalid: {
      description: 'Invalid',
      control: 'boolean',
    },
    name: {
      description: 'Radio group name. Use the same name for each radio option in a group.',
    },
  },
} satisfies Meta<typeof FormFieldRadioOption>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Radio option',
    name: 'radio-option',
    description: 'This is a radio option',
    errorMessage: '',
    required: false,
    disabled: false,
    invalid: false,
  },
};
