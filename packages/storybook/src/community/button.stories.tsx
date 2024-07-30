/* @license CC0-1.0 */

import { RhcIconArrowRight, RhcIconCalendar } from '@rijkshuisstijl-community/web-components-react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, Icon } from '@utrecht/component-library-react/dist/css-module';
import { PropsWithChildren } from 'react';
import readme from './button.md?raw';

interface ButtonStoryProps {
  appearance: string;
  iconLeft?: boolean;
  iconRight?: boolean;
}

const ButtonStory = ({ appearance, children, iconLeft, iconRight, ...props }: PropsWithChildren<ButtonStoryProps>) => (
  <Button appearance={appearance} {...props} style={{ '--utrecht-icon-inset-block-start': iconLeft ? '-0.1em' : 0 }}>
    {iconLeft && (
      <Icon>
        <RhcIconCalendar></RhcIconCalendar>
      </Icon>
    )}
    {children}
    {iconRight && (
      <Icon>
        <RhcIconArrowRight></RhcIconArrowRight>
      </Icon>
    )}
  </Button>
);

const meta = {
  title: 'Rijkshuisstijl/Button',
  id: 'rijkshuisstijl-button',
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
    children: 'Label',
  },
};

export const PrimaryAction: StoryObj<typeof meta> = {
  args: {
    children: 'Label',
    appearance: 'primary-action-button',
  },
};

export const SecondaryAction: StoryObj<typeof meta> = {
  args: {
    children: 'Label',
    appearance: 'secondary-action-button',
  },
};

export const Subtle: StoryObj<typeof meta> = {
  args: {
    children: 'Label',
    appearance: 'subtle-button',
  },
};

export const IconLeft: StoryObj<typeof meta> = {
  args: {
    children: 'Label',
    appearance: 'secondary-action-button',
    iconLeft: true,
  },
};

export const IconRight: StoryObj<typeof meta> = {
  args: {
    children: 'Label',
    appearance: 'primary-action-button',
    iconRight: true,
  },
  name: 'Button',
};
