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
      options: ['', 'primary-action', 'secondary-action', 'subtle'],
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
        name: 'string',
      },
      table: {
        category: 'Property',
      },
    },
  },
  args: {
    children: 'Label',
    appearance: '',
    disabled: null,
    iconLeft: false,
    iconRight: false,
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Button',
      },
    },
  },
} as Meta<typeof RHCButton>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
