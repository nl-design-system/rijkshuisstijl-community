import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { FormFieldSelectWebComponent } from '@rijkshuisstijl-community/web-components';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { createElement } from 'react';
import readme from '../components-react/form-field-select.md?raw';

FormFieldSelectWebComponent.define();

const SelectWrapper = ({
  label,
  description,
  disabled,
  status,
  invalid,
  options,
  dir,
  defaultvalue,
  value,
  name,
  ...restProps
}: any) => {
  return createElement('rhc-form-select', {
    label,
    description,
    status,
    options: JSON.stringify(options),
    dir,
    defaultvalue,
    value,
    name,
    disabled: disabled?.toString(),
    invalid: invalid?.toString(),
    ...restProps,
  });
};

const meta = {
  title: 'Form Field/Form Field Select',
  id: 'rhc-form-field-select-web',
  component: SelectWrapper,
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
    disabled: false,
    invalid: false,
    children: [],
    options: [],
    defaultValue: '',
    dir: '',
  },
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
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/FormFieldSelect.tsx',
  },
} as Meta<typeof FormFieldSelectWebComponent>;

export default meta;

export const Default = {
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
} as StoryObj<typeof meta>;

export const Description = {
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
} as StoryObj<typeof meta>;

export const Required = {
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
} as StoryObj<typeof meta>;

export const Disabled = {
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
} as StoryObj<typeof meta>;

export const Invalid = {
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
} as StoryObj<typeof meta>;

export const RightToLeft = {
  args: {
    label: 'حدد خياراً',
    name: 'select',
    options: ['خيار  1', 'خيار  2', 'خيار  3'],
    dir: 'rtl',
  },
} as StoryObj<typeof meta>;
