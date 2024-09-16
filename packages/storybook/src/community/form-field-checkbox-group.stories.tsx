import { FormFieldCheckbox, FormFieldCheckboxGroup } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import readme from './form-field-checkbox-group.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Form Field/Form Field Checkbox Group',
  id: 'rhc-form-field-checkbox-group',
  component: FormFieldCheckboxGroup,
  argTypes: {
    label: {
      description: 'The label of the form field',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"Select option"' },
      },
    },
    children: {
      description: 'The options of the select',
      table: {
        type: { summary: 'ReactNode' },
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
    description: {
      description: 'The description of the form field',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    dir: {
      description: 'The direction of the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'auto' },
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
} satisfies Meta<typeof FormFieldCheckboxGroup>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    label: 'Select option',
    children: [
      <FormFieldCheckbox key="1" label="Checkbox 1" />,
      <FormFieldCheckbox key="2" label="Checkbox 2" />,
      <FormFieldCheckbox key="3" label="Checkbox 3" />,
    ],
  },
};

export const Error: StoryObj<typeof meta> = {
  args: {
    label: 'Select option',
    children: [
      <FormFieldCheckbox invalid key="1" label="Checkbox 1" />,
      <FormFieldCheckbox invalid key="2" label="Checkbox 2" />,
      <FormFieldCheckbox invalid key="3" label="Checkbox 3" />,
    ],
    errorMessage: 'This is an error message',
    invalid: true,
  },
};

export const Description: StoryObj<typeof meta> = {
  args: {
    ...Default.args,
    description: 'This is a description',
  },
};

export const Status: StoryObj<typeof meta> = {
  args: {
    ...Default.args,
    status: 'This is a status',
  },
};

export const InputDir: StoryObj<typeof meta> = {
  args: {
    label: 'حدد خياراً',
    description: 'هذا هو الوصف',
    status: 'هذه هي رسالة الحالة',
    children: [
      <FormFieldCheckbox key="1" label="خيار 1" />,
      <FormFieldCheckbox key="2" label="خيار 2" />,
      <FormFieldCheckbox key="3" label="خيار 3" />,
    ],
    dir: 'rtl',
  },
};
