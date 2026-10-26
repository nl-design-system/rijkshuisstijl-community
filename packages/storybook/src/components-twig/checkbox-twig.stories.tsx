import TwigCheckbox from '@rijkshuisstijl-community/components-twig/src/Checkbox.twig';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from '../components-react/checkbox.md?raw';

const meta = {
  title: 'Checkbox',
  id: 'rhc-twig-checkbox',
  component: TwigCheckbox,
  argTypes: {
    ariaLabel: {
      description: 'aria-label',
      control: { type: 'text' as const },
      table: {
        defaultValue: { summary: 'checkbox-label' },
      },
    },
    checked: {
      description: 'checked',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'disabled',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    indeterminate: {
      description: 'indeterminate',
      control: 'boolean',
      table: {
        defaultValue: { summary: '' },
      },
    },
    invalid: {
      description: 'invalid',
      control: 'boolean',
      table: {
        defaultValue: { summary: '' },
      },
    },
    value: {
      description: 'value',
      control: { type: 'text' as const },
      table: {
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
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=944-1535&node-type=canvas&t=HiNKOQhf1hQtLZrr-0',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Checkbox.tsx',
    nldesignsystem: 'https://www.nldesignsystem.nl/checkbox/',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community.',
  },
} satisfies Meta<typeof TwigCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ariaLabel: 'checkbox-label',
  },
};
export const Disabled: Story = {
  args: {
    ariaLabel: 'checkbox-label',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    name: 'subject',
    readOnly: true,
    placeholder: 'Read only',
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
