import { RhcButton } from '@rijkshuisstijl-community/web-components-react';
import { Meta, StoryObj } from '@storybook/react/*';

const meta: Meta = {
  title: 'Web Components Stencil/Button',
  component: RhcButton,
  argTypes: {
    appearance: {
      description: 'Button appearance',
      control: { type: 'select' },
      options: ['', 'primary-action', 'secondary-action', 'subtle'],
      table: {
        category: 'Property',
      },
      defaultValue: '',
    },
    label: {
      description: 'Button Label',
      type: {
        name: 'string',
      },
      table: {
        type: { summary: 'demo' },
      },
    },
  },
  args: {
    label: 'Label',
  },
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
  },
};
export default meta;

type Story = StoryObj<typeof RhcButton>;

export const Default: Story = {} satisfies Story;

export const PrimaryAction: StoryObj<typeof meta> = {
  args: {
    label: 'Label',
    appearance: 'primary-action',
  },
};

export const SecondaryAction: StoryObj<typeof meta> = {
  args: {
    label: 'Label',
    appearance: 'secondary-action',
  },
};

export const Subtle: StoryObj<typeof meta> = {
  args: {
    label: 'Label',
    appearance: 'subtle',
  },
};
