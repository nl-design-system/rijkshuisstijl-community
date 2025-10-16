import { mergeMarkdown } from '@rijkshuisstijl-community/internal-tooling/markdownUtils';
import { FormFieldCheckboxOptionWebComponent } from '@rijkshuisstijl-community/web-components';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { createElement } from 'react';
import readme from '../components-react/form-field-checkbox-option.md?raw';

FormFieldCheckboxOptionWebComponent.define();

const CheckboxWrapper = ({ label, description, invalid, errorMessage, disabled, ...restProps }: any) => {
  return createElement('rhc-form-checkbox-option', {
    label,
    description,
    invalid: invalid?.toString(),
    disabled: disabled?.toString(),
    errorMessage,
    ...restProps,
  });
};

const meta = {
  title: 'Form Field/Form Field Checkbox Option',
  id: 'rhc-form-field-checkbox-option-web',
  component: CheckboxWrapper,
  argTypes: {
    label: {
      description: 'The label of the form field',
      table: {
        control: 'text',
        type: { summary: 'string' },
        table: {
          category: 'API',
          defaultValue: { summary: '"Select option"' },
        },
      },
    },
    description: {
      control: 'text',
      description: 'The description of the form field',
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
    invalid: {
      control: 'boolean',
      description: 'Adds an error message',
      table: {
        category: 'API',
        defaultValue: { summary: 'false' },
      },
    },
    errorMessage: {
      control: 'text',
      description: 'Adds an error message',
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled',
      table: {
        category: 'API',
        defaultValue: { summary: 'false' },
      },
    },
    name: {
      control: 'text',
      description: 'The name of the form field',
      table: {
        category: 'API',
        defaultValue: { summary: 'checkbox' },
      },
    },
    value: {
      control: 'boolean',
      description: 'The value of the form field',
      table: {
        category: 'API',
        defaultValue: { summary: 'checkbox' },
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
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add NL DesignSystem link
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1031-2917&node-type=canvas&t=HiNKOQhf1hQtLZrr-0',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht (daar heet het FormFieldCheckbox), met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/FormFieldCheckboxOption.tsx',
  },
} as Meta<typeof FormFieldCheckboxOptionWebComponent>;

export default meta;

export const Primary = {
  args: {
    label: 'Checkbox',
  },
} as StoryObj<typeof meta>;

export const Disabled = {
  args: {
    label: 'Checkbox',
    disabled: true,
  },
} as StoryObj<typeof meta>;

export const Invalid = {
  args: {
    label: 'Checkbox',
    invalid: true,
  },
} as StoryObj<typeof meta>;

export const WithErrorMessage = {
  args: {
    label: 'Checkbox',
    invalid: true,
    errorMessage: 'This is an error message',
  },
} as StoryObj<typeof meta>;

export const WithDescription = {
  args: {
    label: 'Checkbox',
    description: 'This is a description',
  },
} as StoryObj<typeof meta>;

export const WithStatus = {
  args: {
    label: 'Checkbox',
    description: 'This is a description',
    status: 'This is a status message',
  },
} as StoryObj<typeof meta>;

export const InputDir = {
  args: {
    label: 'مربع الاختيار',
    description: 'هذا هو الوصف',
    status: 'هذه هي رسالة الحالة',
    dir: 'rtl',
  },
} as StoryObj<typeof meta>;
