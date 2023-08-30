/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
// import { RhcCard } from '@rijkshuisstijl-community/web-components-react';
import { UtrechtButton } from '@utrecht/web-component-library-react';
import { PropsWithChildren } from 'react';
import readme from './button.md?raw';

interface ButtonStoryProps {
  appearance: string;
  iconLeft?: boolean;
  iconRight?: boolean;
}

const ButtonStory = ({ appearance, iconLeft, ...props }: PropsWithChildren<ButtonStoryProps>) => (
  <rhc-card>
    <UtrechtButton
      appearance={appearance}
      {...props}
      style={{ '--utrecht-icon-inset-block-start': iconLeft ? '-0.1em' : 0 }}
    ></UtrechtButton>
  </rhc-card>
);

const meta = {
  title: 'Logius/Card',
  id: 'logius-card',
  component: ButtonStory,
  argTypes: {
    appearance: {
      description: 'Button appearance',
      control: { type: 'select' },
      options: ['', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
      table: {
        category: 'Property',
      },
      defaultValue: '',
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
      defaultValue: '',
    },
    iconLeft: {
      description: 'Icon Left',
      type: {
        name: 'boolean',
      },
      table: {
        category: 'Demo',
      },
      defaultValue: false,
    },
    iconRight: {
      description: 'Icon Right',
      type: {
        name: 'boolean',
      },
      table: {
        category: 'Demo',
      },
      defaultValue: false,
    },
  },
  args: {
    children: '',
    appearance: '',
    iconLeft: false,
    iconRight: false,
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: ButtonStory,
} as Meta<typeof ButtonStory>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    children: 'Card',
  },
};
