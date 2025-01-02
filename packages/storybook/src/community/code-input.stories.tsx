import { CodeInput } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react/*';
import readme from './code-input.md?raw';

const meta = {
  title: 'Rijkshuisstijl/CodeInput',
  id: 'rhc-codeInput',
  component: CodeInput,
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
    docs: {
      description: {
        component: readme,
      },
    },
    // TODO: add NL Design System link when there is a page for CodeInput
    figma:
      'https://www.figma.com/design/H4hSqpPbvFMLklDZgswwgd/NLDS---Rijkshuisstijl---Templates?node-id=4652-10195&node-type=frame&t=b4RSbycsPxEdIHZ6-0',
    github: 'https://github.com/nl-design-system/rijkshuisstijl-community/issues/823',
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
  },
  argTypes: {},
  args: {
    numberOfDigits: 6,
    inValid: false,
  },
} satisfies Meta<typeof CodeInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PrivateMode: Story = {
  args: {
    numberOfDigits: 6,
    privateMode: true,
  },
};

export const Invalid: Story = {
  args: {
    numberOfDigits: 6,
    inValid: true,
  },
};
