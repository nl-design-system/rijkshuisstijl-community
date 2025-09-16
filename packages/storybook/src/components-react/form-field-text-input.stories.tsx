/* @license CC0-1.0 */

import { FormFieldTextInput } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import readme from './form-field-text-input.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Form Field/Form Field Text Input',
  id: 'rhc-form-field-text-input',
  component: FormFieldTextInput,
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
      description: 'Required (HTML validation)',
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
    autoComplete: {
      description: 'Autocomplete',
      control: 'select',
      options: [
        '',
        'additional-name',
        'address-level1',
        'address-level2',
        'address-level3',
        'address-level4',
        'address-line1',
        'address-line2',
        'address-line3',
        'bday',
        'bday-day',
        'bday-month',
        'bday-year',
        'cc-additional-name',
        'cc-csc',
        'cc-exp',
        'cc-exp-month',
        'cc-exp-year',
        'cc-family-name',
        'cc-given-name',
        'cc-name',
        'cc-number',
        'cc-type',
        'country',
        'country-name',
        'current-password',
        'email',
        'family-name',
        'fax',
        'given-name',
        'home',
        'honorific-prefix',
        'honorific-suffix',
        'impp',
        'language',
        'mobile',
        'name',
        'new-password',
        'nickname',
        'one-time-code',
        'organization',
        'organization-title',
        'pager',
        'photo',
        'postal-code',
        'sex',
        'street-address',
        'tel',
        'tel-area-code',
        'tel-country-code',
        'tel-extension',
        'tel-local',
        'tel-local-prefix',
        'tel-local-suffix',
        'tel-national',
        'transaction-amount',
        'transaction-currency',
        'url',
        'username',
        'work',
      ],
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
    min: {
      control: 'number',
      table: {
        category: 'API',
        defaultValue: { summary: undefined },
      },
    },
    max: {
      control: 'number',
      table: {
        category: 'API',
        defaultValue: { summary: undefined },
      },
    },
    step: {
      control: 'number',
      table: {
        category: 'API',
        defaultValue: { summary: undefined },
      },
    },
    size: {
      control: 'number',
      table: {
        category: 'API',
        defaultValue: { summary: undefined },
      },
    },
    type: {
      description: 'Type',
      control: 'select',
      options: {
        '': null,
        email: 'email',
        number: 'number',
        password: 'password',
        search: 'search',
        tel: 'tel',
        text: 'text',
        url: 'url',
      },
      table: {
        category: 'API',
        defaultValue: { summary: '' },
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
    inputDir: {
      description: 'Text direction',
      control: { type: 'select' },
      options: {
        '': undefined,
        auto: 'auto',
        ltr: 'ltr',
        rtl: 'rtl',
      },
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    description: '',
    disabled: false,
    invalid: false,
    errorMessage: '',
    label: '',
    name: '',
    defaultValue: '',
    value: '',
    required: false,
    inputRequired: false,
    type: undefined,
    autoComplete: '',
    readOnly: false,
    dir: undefined,
    inputDir: undefined,
    placeholder: '',
    size: undefined,
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
      'Dit component is overgenomen van de Gemeente Utrecht (daar heeft het de naam FormFieldTextbox), met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/FormFieldTextInput.tsx',
  },
} satisfies Meta<typeof FormFieldTextInput>;

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
    description: 'Kort maar krachtig.',
  },
};

export const ErrorMessage: Story = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    errorMessage: 'Vul een onderwerp in.',
    invalid: true,
  },
};

export const Status: Story = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    defaultValue: 'Hello, World!',
    status: '13 van de 50 tekens gebruikt.',
  },
};

export const Password: Story = {
  args: {
    autoComplete: 'current-password',
    name: 'subject',
    label: 'Wachtwoord',
    type: 'password',
  },
  render: (args) => (
    <form>
      <input hidden autoComplete="username" type="text" />
      <FormFieldTextInput autoComplete={args.autoComplete} label={args.label} name={args.name} type={args.type} />
    </form>
  ),
};

export const Disabled: Story = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    disabled: true,
    defaultValue: 'Hello, world!',
  },
};

export const ReadOnly: Story = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    readOnly: true,
    defaultValue: 'Hello, world!',
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

export const Placeholder: Story = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    placeholder: 'Type some text...',
  },
};

export const LeftToRightInput: Story = {
  args: {
    dir: 'rtl',
    label: 'رقم الجوال',
    type: 'tel',
    autoComplete: 'mobile tel-national',
    inputDir: 'ltr',
  },
  name: 'Left-to-right input',
};
