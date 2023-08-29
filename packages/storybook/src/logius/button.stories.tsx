/* @license CC0-1.0 */

import readme from '@rijkshuisstijl-community/components-css/button/README.md?raw';
import type { Meta, StoryObj } from '@storybook/react';
import { UtrechtButton } from '@utrecht/web-component-library-react';

const meta = {
  title: 'Logius/Button',
  id: 'logius-button',
  component: UtrechtButton,
  argTypes: {
    children: {
      description: 'Button text',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: '',
    },
  },
  args: {
    children: '',
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof UtrechtButton>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    children: 'Opslaan en verder',
  },
};
