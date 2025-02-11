import { FormFieldCheckboxOption } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import readme from './form-field-checkbox-option.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Rijkshuisstijl/Form Field/Form Field Checkbox Option',
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
    // TODO: add GitHub issue and NL DesignSystem links
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1031-2917&node-type=canvas&t=HiNKOQhf1hQtLZrr-0',
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
