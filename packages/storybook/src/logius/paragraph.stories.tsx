/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import { UtrechtParagraph } from '@utrecht/web-component-library-react';
import readme from './paragraph.md?raw';

const meta = {
  title: 'Logius/Paragraph',
  id: 'logius-paragraph',
  component: UtrechtParagraph,
  argTypes: {
    children: {
      description: 'Paragraph text - default webcomponent slot',
      type: {
        name: 'string',
        required: true,
      },
      table: {
        category: 'Webcomponent Slot',
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
} as Meta<typeof UtrechtParagraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
  },
};
