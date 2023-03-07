/* @license CC0-1.0 */

import readme from '@rijkshuisstijl-community/components-css/button/README.md';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const Button = ({ textContent }) => <rhc-button>{textContent}</rhc-button>;

const meta = {
  title: 'Web Component/Button',
  id: 'web-component-button',
  component: Button,
  argTypes: {
    textContent: {
      description: 'Button text',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: '',
    },
  },
  args: {
    textContent: 'Opslaan en verder',
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Button>;

export default meta;

export const Default: StoryObj<typeof Button> = {
  name: 'Example button',
};
