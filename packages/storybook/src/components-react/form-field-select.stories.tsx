import { FormFieldSelect, SelectOption } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import readme from './form-field-select.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Form Field/Form Field Select',
  id: 'rhc-form-field-select',
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
      options: ['ltr', 'rtl'],
      control: {
        type: 'select',
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
        defaultValue={defaultValue || undefined}
        description={description || undefined}
        dir={dir || undefined}
        disabled={disabled || undefined}
        errorMessage={errorMessage || undefined}
        invalid={invalid || undefined}
        label={label || undefined}
        name={name || undefined}
        options={options || undefined}
        required={required || undefined}
      >
        {!options?.length && children}
      </FormFieldSelect>
    );
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add Figma and NL DesignSystem links
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/FormFieldSelect.tsx',
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
      <SelectOption id="optie1" key="option-1" value="optie 1">
        optie 1
      </SelectOption>,
      <SelectOption id="optie2" key="option-2" value="optie 2">
        optie 2
      </SelectOption>,
      <SelectOption id="optie3" key="option-3" value="optie 3">
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
