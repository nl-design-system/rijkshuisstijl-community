/* @license CC0-1.0 */

import readme from '@rijkshuisstijl-community/components-css/button/README.md?raw';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import '@rijkshuisstijl-community/components-css/button/index.scss';

const Button = ({ textContent }) => (
  <button className="rhc-button" type="button">
    <span className="rhc-button__text">{textContent}</span>
  </button>
);

const meta = {
  title: 'CSS Component/Button',
  id: 'css-button',
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
