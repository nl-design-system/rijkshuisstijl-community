import { FormFieldTextInputWebComponent } from '@rijkshuisstijl-community/web-components';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { createElement } from 'react';
import { mergeMarkdown } from '../../helpers/merge-markdown';
import readme from '../components-react/form-field-text-input.md?raw';

FormFieldTextInputWebComponent.define();

const TextInputWrapper = ({
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
  return createElement('rhc-form-textinput', {
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
  title: 'Form Field/Form Field Text Input',
  id: 'rhc-form-field-text-input-web',
  component: TextInputWrapper,
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
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/FormFieldTextInput.tsx',
  },
} as Meta<typeof FormFieldTextInputWebComponent>;

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
    description: 'Kort maar krachtig.',
  },
} as StoryObj<typeof meta>;

export const ErrorMessage = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    errorMessage: 'Vul een onderwerp in.',
    invalid: true,
  },
} as StoryObj<typeof meta>;

export const Status = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    defaultValue: 'Hello, World!',
    status: '13 van de 50 tekens gebruikt.',
  },
} as StoryObj<typeof meta>;

export const Password = {
  args: {
    autoComplete: 'current-password',
    name: 'subject',
    label: 'Wachtwoord',
    type: 'password',
  },
} as StoryObj<typeof meta>;

export const Disabled = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    disabled: true,
    defaultValue: 'Hello, world!',
  },
} as StoryObj<typeof meta>;

export const ReadOnly = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    readOnly: true,
    defaultValue: 'Hello, world!',
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

export const Placeholder = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    placeholder: 'Type some text...',
  },
} as StoryObj<typeof meta>;

export const LeftToRightInput = {
  args: {
    dir: 'rtl',
    label: 'رقم الجوال',
    type: 'tel',
    autoComplete: 'mobile tel-national',
    inputDir: 'ltr',
  },
  name: 'Left-to-right input',
} as StoryObj<typeof meta>;
