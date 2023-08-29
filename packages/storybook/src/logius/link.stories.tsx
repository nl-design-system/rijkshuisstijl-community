/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import { UtrechtLink } from '@utrecht/web-component-library-react';
import readme from './link.md?raw';

const meta = {
  title: 'Logius/Link',
  id: 'logius-link',
  component: UtrechtLink,
  argTypes: {
    children: {
      description: 'Link text',
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
} as Meta<typeof UtrechtLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: 'https://example.com/',
    children: 'Aliquam non enim auctor',
  },
};
