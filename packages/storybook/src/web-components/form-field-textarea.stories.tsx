import { FormFieldTextareaWebComponent } from '@rijkshuisstijl-community/web-components';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { createElement } from 'react';
import readme from '../components-react/form-field-textarea.md?raw';
import { mergeMarkdown } from '../helpers/merge-markdown';

FormFieldTextareaWebComponent.define();

const TextareaWrapper = ({
  label,
  disabled,
  invalid,
  required,
  inputRequired,
  autoComplete,
  readOnly,
  minLength,
  maxLength,
  ...restProps
}: any) => {
  return createElement('rhc-form-textarea', {
    label,
    required: required?.toString(),
    inputrequired: inputRequired?.toString(),
    autocomplete: autoComplete?.toString(),
    readonly: readOnly?.toString(),
    minlength: minLength?.toString(),
    maxlength: maxLength?.toString(),
    disabled: disabled?.toString(),
    invalid: invalid?.toString(),
    ...restProps,
  });
};

const meta = {
  title: 'Form Field/Form Field Textarea',
  id: 'rhc-form-field-textarea-web',
  component: TextareaWrapper,
  argTypes: {
    required: {
      description: 'Required',
      control: 'boolean',
      table: {
        category: 'API',
        defaultValue: { summary: 'false' },
      },
    },
    inputRequired: {
      description: 'Input Required',
      control: 'boolean',
      table: {
        category: 'API',
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
      table: {
        category: 'API',
        defaultValue: { summary: 'false' },
      },
    },
    readOnly: {
      description: 'Read-only',
      control: 'boolean',
      table: {
        category: 'API',
        defaultValue: { summary: 'false' },
      },
    },
    invalid: {
      description: 'Invalid',
      control: 'boolean',
      table: {
        category: 'API',
        defaultValue: { summary: 'false' },
      },
    },
    name: {
      description: 'Name',
      control: 'text',
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
    defaultValue: {
      description: 'Value',
      control: 'text',
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
    value: {
      description: 'Value',
      control: 'text',
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
    placeholder: {
      description: 'Placeholder',
      control: 'text',
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
    label: {
      name: 'label',
      type: { name: 'string', required: true },
      table: {
        defaultValue: { summary: '' },
        category: 'API',
      },
    },
    errorMessage: {
      name: 'errorMessage',
      description: 'Description for invalid input',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: '' },
        category: 'API',
      },
    },
    description: {
      description: 'Description',
      type: { name: 'string', required: false },
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
    minLength: {
      description: 'Set the minimum length of the input text',
      control: 'number',
      table: {
        category: 'API',
        defaultValue: { summary: undefined },
      },
    },
    maxLength: {
      description: 'Set the maximum length of the input text',
      control: 'number',
      table: {
        category: 'API',
        defaultValue: { summary: undefined },
      },
    },
    cols: {
      description: 'Set the number of visible columns in a text area',
      control: 'number',
      table: {
        category: 'API',
        defaultValue: { summary: undefined },
      },
    },
    rows: {
      description: 'Set the number of visible text lines for the control',
      control: 'number',
      table: {
        category: 'API',
        defaultValue: { summary: undefined },
      },
    },
    dir: {
      description: 'Text direction',
      control: { type: 'select' },
      options: ['', 'auto', 'ltr', 'rtl'],
      table: {
        category: 'DOM',
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    required: false,
    inputRequired: false,
    disabled: false,
    readOnly: false,
    invalid: false,
    name: '',
    defaultValue: '',
    value: '',
    placeholder: '',
    label: '',
    errorMessage: '',
    description: '',
    minLength: undefined,
    maxLength: undefined,
    dir: undefined,
    cols: undefined,
    rows: undefined,
  },
  tags: ['autodocs'],
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
    // TODO: add Figma and NL DesignSystem links
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/FormFieldTextarea.tsx',
  },
} as Meta<typeof FormFieldTextareaWebComponent>;

export default meta;

export const Default = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
  },
} as StoryObj<typeof meta>;

export const Description = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    description: 'Beschrijving van het onderwerp',
  },
} as StoryObj<typeof meta>;

export const ErrorMessage = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    errorMessage: 'Onderwerp is verplicht',
    invalid: true,
  },
} as StoryObj<typeof meta>;

export const Status = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    defaultValue: 'Hello world!',
    maxLength: 50,
    status: '12 van de 50 tekens ingevuld',
  },
} as StoryObj<typeof meta>;

export const Placeholder = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    placeholder: 'Onderwerp',
  },
} as StoryObj<typeof meta>;

export const Value = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    value: 'Onderwerp',
  },
} as StoryObj<typeof meta>;

export const RightToLeft = {
  args: {
    name: 'subject',
    label: 'الموضوع',
    dir: 'rtl',
  },
} as StoryObj<typeof meta>;

export const ReadOnly = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    readOnly: true,
    placeholder: 'Read Only',
  },
} as StoryObj<typeof meta>;

export const Disabled = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    disabled: true,
  },
} as StoryObj<typeof meta>;

export const Required = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    required: true,
  },
} as StoryObj<typeof meta>;

export const InputRequired = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    inputRequired: true,
  },
} as StoryObj<typeof meta>;
