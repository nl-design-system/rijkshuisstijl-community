import { CodeInputGroup } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react/*';
import readme from './code-input-group.md?raw';

const meta = {
  title: 'Rijkshuisstijl/CodeInputGroup',
  id: 'rhc-codeInput-group',
  component: CodeInputGroup,
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
} satisfies Meta<typeof CodeInputGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Invalid: Story = {
  args: {
    inValid: true,
  },
};
