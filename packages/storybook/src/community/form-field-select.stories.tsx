import { FormFieldSelect, SelectOption } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import readme from './form-field-select.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Form Field Select',
  id: 'rijkshuisstijl-form-field-select',
  component: FormFieldSelect,
  argTypes: {
    label: {
      description: 'The label of the form field',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"Select option"' },
      },
    },
    disabled: {
      description: 'Disables the form field',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      description: 'Makes the form field required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      description: 'The options of the select',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '' },
      },
    },
    options: {
      description: 'The options of the select',
      table: {
        type: { summary: 'string[]' },
        defaultValue: { summary: '' },
      },
    },
    errorMessage: {
      description: 'Adds an error message',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    invalid: {
      description: 'Adds an error message',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    name: {
      description: 'The name of the form field',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    description: {
      description: 'The description of the form field',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    defaultValue: {
      description: 'The default value of the form field',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    dir: {
      description: 'The direction of the form field',
      control: {
        type: 'select',
        options: ['ltr', 'rtl'],
      },
    },
  },
  args: {
    label: '',
    name: '',
    description: '',
    errorMessage: '',
    required: false,
    disabled: false,
    invalid: false,
    children: [],
    options: [],
    defaultValue: '',
    dir: '',
  },
  render: (args) => {
    const {
      dir,
      label,
      defaultValue,
      options,
      children,
      name,
      description,
      errorMessage,
      required,
      disabled,
      invalid,
    } = args;
    return (
      <FormFieldSelect
        label={label || undefined}
        name={name || undefined}
        description={description || undefined}
        errorMessage={errorMessage || undefined}
        required={required || undefined}
        disabled={disabled || undefined}
        invalid={invalid || undefined}
        defaultValue={defaultValue || undefined}
        options={options || undefined}
        dir={dir || undefined}
      >
        {!options?.length && children}
      </FormFieldSelect>
    );
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof FormFieldSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'kies een optie',
    name: 'select',
    errorMessage: '',
    required: false,
    disabled: false,
    invalid: false,
    options: ['optie 1', 'optie 2', 'optie 3'],
    defaultValue: 'optie 2',
  },
};

export const CustomOptions: Story = {
  args: {
    label: 'kies een optie',
    name: 'select',
    errorMessage: '',
    description: '',
    required: false,
    disabled: false,
    invalid: false,
    children: [
      <SelectOption value="optie 1" id="optie1">
        optie 1
      </SelectOption>,
      <SelectOption value="optie 2" id="optie2">
        optie 2
      </SelectOption>,
      <SelectOption value="optie 3" id="optie3">
        optie 3
      </SelectOption>,
    ],
  },
};

export const Description: Story = {
  args: {
    label: 'kies een optie',
    name: 'select',
    description: 'Dit is een beschrijving',
    errorMessage: '',
    required: false,
    disabled: false,
    invalid: false,
    options: ['optie 1', 'optie 2', 'optie 3'],
  },
};

export const Required: Story = {
  args: {
    label: 'kies een optie',
    name: 'select',
    description: '',
    errorMessage: '',
    required: true,
    disabled: false,
    invalid: false,
    options: ['optie 1', 'optie 2', 'optie 3'],
  },
};

export const Disabled: Story = {
  args: {
    label: 'kies een optie',
    name: 'select',
    description: '',
    errorMessage: '',
    required: false,
    disabled: true,
    invalid: false,
    options: ['optie 1', 'optie 2', 'optie 3'],
  },
};

export const Invalid: Story = {
  args: {
    label: 'kies een optie',
    name: 'select',
    description: '',
    errorMessage: 'U moet een optie kiezen',
    required: false,
    disabled: false,
    invalid: true,
    options: ['', 'optie 1', 'optie 2', 'optie 3'],
  },
};

export const RightToLeft: Story = {
  args: {
    label: 'حدد خياراً',
    name: 'select',
    options: ['خيار  1', 'خيار  2', 'خيار  3'],
    dir: 'rtl',
  },
};
