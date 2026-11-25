import TwigTextarea from '@rijkshuisstijl-community/components-twig/src/Textarea.twig';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from '../components-react/textarea.md?raw';

const meta = {
  title: 'Text Area',
  id: 'rhc-twig-textarea',
  component: TwigTextarea,
  argTypes: {
    disabled: {
      description: 'Disabled',
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
      control: { type: 'text' as const },
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
    defaultValue: {
      description: 'Value',
      control: { type: 'text' as const },
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
    value: {
      description: 'Value',
      control: { type: 'text' as const },
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
    inputRequired: {
      description: 'Input Required',
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
    placeholder: {
      description: 'Placeholder',
      control: { type: 'text' as const },
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
      control: { type: 'select' as const },
      options: [undefined, 'auto', 'ltr', 'rtl'],
      table: {
        category: 'DOM',
        defaultValue: { summary: '' },
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
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=969-2047&node-type=CANVAS&t=VGu5hA1sXPDhCUwB-0',
    nldesignsystem: 'https://www.nldesignsystem.nl/textarea/',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Textarea.tsx',
  },
} satisfies Meta<typeof TwigTextarea>;

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
    placeholder: 'Read only',
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

export const InputRequired: Story = {
  args: {
    name: 'subject',
    inputRequired: true,
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

export const RightToLeftInput: Story = {
  args: {
    dir: 'rtl',
    placeholder: 'الموضوع',
  },
  name: 'Right To Left',
};
