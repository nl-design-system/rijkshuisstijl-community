import TwigTextInput from '@rijkshuisstijl-community/components-twig/src/Text-input.twig';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from '../components-react/text-input.md?raw';

const meta: Meta<typeof TwigTextInput> = {
  title: 'Text Input',
  id: 'rhc-twig-text-input',
  component: TwigTextInput,
  argTypes: {
    name: {
      description: 'Name',
      control: { type: 'text' },
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
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
    defaultValue: {
      description: 'Value',
      control: { type: 'text' },
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
    value: {
      description: 'Value',
      control: { type: 'text' },
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
    placeholder: {
      description: 'Placeholder',
      control: { type: 'text' },
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
    autoComplete: {
      description: 'Autocomplete',
      control: 'select',
      options: [
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
      options: [null, 'email', 'number', 'password', 'search', 'tel', 'text', 'url'],
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
    dir: {
      description: 'Text direction',
      control: { type: 'select' },
      options: [undefined, 'auto', 'ltr', 'rtl'],
      table: {
        category: 'DOM',
        defaultValue: { summary: '' },
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
    spellCheck: {
      description: 'Spellcheck',
      control: 'boolean',
      table: {
        category: 'API',
        defaultValue: { summary: 'false' },
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
  },
  parameters: {
    docs: {
      description: {
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source (including with usage and wcag documentation)
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add Github issue link
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=859-981&node-type=CANVAS&t=VGu5hA1sXPDhCUwB-0',
    nldesignsystem: 'https://www.nldesignsystem.nl/text-input/',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht (daar heet het Textbox), met styling van de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/TextInput.tsx',
  },
} satisfies Meta<typeof TwigTextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'subject',
  },
};

export const Required: Story = {
  args: {
    name: 'subject',
    required: true,
  },
};

export const InputRequired: Story = {
  args: {
    name: 'subject',
    inputRequired: true,
  },
};

export const Disabled: Story = {
  args: {
    name: 'subject',
    disabled: true,
    defaultValue: 'Hello, world!',
  },
};

export const ReadOnly: Story = {
  args: {
    name: 'subject',
    readOnly: true,
    defaultValue: 'Hello, world!',
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
    placeholder: 'Type some text...',
  },
};

export const AutoComplete: Story = {
  args: {
    name: 'subject',
    autoComplete: 'current-password',
    type: 'password',
  },
  decorators: [
    (Story) => (
      <form>
        <input hidden autoComplete="username" type="text" />
        {Story()}
      </form>
    ),
  ],
};

export const LeftToRightInput: Story = {
  args: {
    dir: 'rtl',
    type: 'text',
    autoComplete: 'username',
    placeholder: 'اسم المستخدم',
  },
  name: 'Left-to-right input',
};
