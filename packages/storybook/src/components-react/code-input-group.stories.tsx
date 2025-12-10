import { CodeInputGroup } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './code-input-group.md?raw';

const meta = {
  title: 'Code Input Group',
  id: 'rhc-codeInput-group',
  component: CodeInputGroup,
  parameters: {
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add NL Design System link when there is a page for CodeInput
    figma:
      'https://www.figma.com/design/H4hSqpPbvFMLklDZgswwgd/NLDS---Rijkshuisstijl---Templates?node-id=4652-10195&node-type=frame&t=b4RSbycsPxEdIHZ6-0',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/CodeInputGroup.tsx',
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
  },
  argTypes: {
    codeLength: {
      name: 'codeLength',
      type: { name: 'number', required: true },
      table: {
        category: 'API',
      },
    },
    invalid: {
      name: 'invalid',
      type: { name: 'boolean', required: false },
      table: {
        category: 'API',
        defaultValue: { summary: 'false' },
      },
    },
    pattern: {
      name: 'pattern',
      type: { name: 'string', required: false },
      table: {
        category: 'API',
        defaultValue: { summary: "'[a-zA-Z0-9]'" },
      },
    },
    capitalize: {
      name: 'capitalize',
      type: { name: 'boolean', required: false },
      table: {
        category: 'API',
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      name: 'label',
      type: { name: 'string', required: false },
      table: {
        category: 'API',
      },
    },
  },
  args: {
    codeLength: 6,
    invalid: false,
    pattern: '[a-zA-Z0-9]',
    capitalize: false,
  },
} satisfies Meta<typeof CodeInputGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Label',
  },
};

export const CapitalizedLetters: Story = {
  args: {
    capitalize: true,
    pattern: '[a-zA-Z]',
    codeLength: 4,
  },
};

export const OnlyNumbers: Story = {
  args: {
    pattern: '[0-9]',
    inputMode: 'numeric',
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
  },
};
