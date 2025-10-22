import { FormFieldTextarea } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/internal-tooling/markdownUtils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from './form-field-textarea.md?raw';

const meta = {
  title: 'Form Field/Form Field Textarea',
  id: 'rhc-form-field-textarea',
  component: FormFieldTextarea,
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
  render: (args) => {
    const {
      required,
      inputRequired,
      disabled,
      readOnly,
      id,
      invalid,
      name,
      defaultValue,
      value,
      placeholder,
      label,
      errorMessage,
      description,
      minLength,
      maxLength,
      dir,
      status,
      cols,
      rows,
    } = args;
    return (
      <FormFieldTextarea
        cols={cols || undefined}
        defaultValue={defaultValue || undefined}
        description={description || undefined}
        dir={dir || undefined}
        disabled={disabled || undefined}
        errorMessage={errorMessage || undefined}
        id={id || undefined}
        inputRequired={inputRequired || undefined}
        invalid={invalid || undefined}
        label={label || undefined}
        maxLength={maxLength || undefined}
        minLength={minLength || undefined}
        name={name || undefined}
        placeholder={placeholder || undefined}
        readOnly={readOnly || undefined}
        required={required || undefined}
        rows={rows || undefined}
        status={status || undefined}
        value={value || undefined}
        onChange={() => {}}
      />
    );
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
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/FormFieldTextarea.tsx',
  },
} satisfies Meta<typeof FormFieldTextarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
  },
};

export const Description: Story = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    description: 'Beschrijving van het onderwerp',
  },
};

export const ErrorMessage: Story = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    errorMessage: 'Onderwerp is verplicht',
    invalid: true,
  },
};

export const Status: Story = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    defaultValue: 'Hello world!',
    maxLength: 50,
    status: '12 van de 50 tekens ingevuld',
  },
};
export const Placeholder: Story = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    placeholder: 'Onderwerp',
  },
};

export const Value: Story = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    value: 'Onderwerp',
  },
};

export const RightToLeft: Story = {
  args: {
    name: 'subject',
    label: 'الموضوع',
    dir: 'rtl',
  },
};

export const ReadOnly: Story = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    readOnly: true,
    placeholder: 'Read Only',
  },
};

export const Disabled: Story = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    required: true,
  },
};

export const InputRequired: Story = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    inputRequired: true,
  },
};
