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
