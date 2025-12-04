import { FormFieldCheckboxOption } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from './form-field-checkbox-option.md?raw';

const meta = {
  title: 'Form Field/Form Field Checkbox Option',
  id: 'rhc-form-field-checkbox-option',
  component: FormFieldCheckboxOption,
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
      if: { arg: 'invalid', eq: true },
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

    nldesignsystem: 'https://nldesignsystem.nl/checkbox',
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=944-1535&p=f&t=2e0BRXk8XeiTCHGA-0',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/FormFieldCheckboxOption.tsx',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht (daar heet het FormFieldCheckbox), met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
  },
} satisfies Meta<typeof FormFieldCheckboxOption>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Checkbox',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Checkbox',
    disabled: true,
  },
};

export const InputInvalid: Story = {
  args: {
    label: 'Checkbox',
    inputInvalid: true,
  },
};

export const Invalid: Story = {
  args: {
    label: 'Checkbox',
    invalid: true,
  },
};

export const WithErrorMessage: Story = {
  args: {
    label: 'Checkbox',
    invalid: true,
    errorMessage: 'This is an error message',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Checkbox',
    description: 'This is a description',
  },
};

export const WithStatus: Story = {
  args: {
    label: 'Checkbox',
    description: 'This is a description',
    status: 'This is a status message',
  },
};

export const InputDir: Story = {
  args: {
    label: 'مربع الاختيار',
    description: 'هذا هو الوصف',
    status: 'هذه هي رسالة الحالة',
    dir: 'rtl',
  },
};
