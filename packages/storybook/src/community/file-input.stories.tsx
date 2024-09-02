import { FileInput } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './file-input.md?raw';

const meta = {
  title: 'Rijkshuisstijl/File Input',
  id: 'rijkshuisstijl-file-input',
  component: FileInput,
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  args: {
    accept: undefined,
    multiple: false,
    disabled: false,
  },
  argTypes: {
    accept: {
      control: {
        type: 'text',
      },
    },
    multiple: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof FileInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Multiple: Story = {
  args: { multiple: true },
};

export const Accept: Story = {
  args: { accept: 'application/pdf' },
};

export const Disabled: Story = {
  args: { disabled: true },
};
