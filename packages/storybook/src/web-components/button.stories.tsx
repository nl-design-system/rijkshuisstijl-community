import { RHCButton } from '@rijkshuisstijl-community/web-components';
import type { Meta, StoryObj } from '@storybook/web-components';
RHCButton.define();

const meta = {
  title: 'Web Components/Button',
  id: 'rhc-button-web',
  component: 'rhc-button',
  argTypes: {
    appearance: {
      description: 'Button appearance',
      control: { type: 'select' },
      options: ['button', 'primary-action', 'secondary-action', 'subtle'],
      table: {
        category: 'Property',
      },
    },
    children: {
      description: 'Button text - default webcomponent slot',
      type: {
        name: 'string',
        required: true,
      },
      table: {
        category: 'Webcomponent Slot',
      },
    },
    disabled: {
      type: {
        name: 'boolean',
      },
      table: {
        category: 'Property',
      },
    },
  },
  args: {
    children: 'Label',
    appearance: 'button',
    disabled: false,
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
    docs: {
      description: {
        component: 'Button',
      },
    },
  },
} as Meta<typeof RHCButton>;

export default meta;

export const Default: StoryObj<typeof meta> = {};

export const PrimaryAction = {
  args: {
    appearance: 'primary-action',
  },
};

export const SecondaryAction = {
  args: {
    appearance: 'secondary-action',
  },
};

export const Subtle = {
  args: {
    appearance: 'subtle',
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};
