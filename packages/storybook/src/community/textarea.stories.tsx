import { Textarea } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import readme from './textarea.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Textarea',
  id: 'rijkshuisstijl-textarea',
  component: Textarea,
  argTypes: {
    required: {
      description: 'Required',
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
      options: {
        '': undefined,
        auto: 'auto',
        ltr: 'ltr',
        rtl: 'rtl',
      },
      table: {
        category: 'DOM',
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    disabled: false,
    invalid: false,
    name: '',
    defaultValue: '',
    value: '',
    required: false,
    readOnly: false,
    placeholder: '',
    minLength: undefined,
    maxLength: undefined,
    dir: undefined,
    cols: undefined,
    rows: undefined,
  },
  render: (args) => {
    const {
      readOnly,
      disabled,
      id,
      invalid,
      name,
      required,
      defaultValue,
      value,
      placeholder,
      minLength,
      maxLength,
      dir,
      cols,
      rows,
    } = args;
    return (
      <Textarea
        cols={cols || undefined}
        defaultValue={defaultValue || undefined}
        dir={dir || undefined}
        disabled={disabled}
        id={id || undefined}
        invalid={invalid}
        maxLength={maxLength || undefined}
        minLength={minLength || undefined}
        name={name || undefined}
        placeholder={placeholder || undefined}
        readOnly={readOnly || undefined}
        required={required}
        rows={rows || undefined}
        value={value || undefined}
      />
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
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'subject',
  },
};

export const ReadOnly: Story = {
  args: {
    name: 'subject',
    readOnly: true,
    placeholder: 'Read Only',
  },
};

export const Disabled: Story = {
  args: {
    name: 'subject',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    name: 'subject',
    required: true,
  },
};

export const Invalid: Story = {
  args: {
    name: 'subject',
    invalid: true,
  },
};

export const Placeholder: Story = {
  args: {
    name: 'subject',
    placeholder: 'Placeholder',
  },
};
export const RightToLeft: Story = {
  args: {
    name: 'subject',
    placeholder: 'الموضوع',
    dir: 'rtl',
  },
};
