/* @license CC0-1.0 */

import { Alert } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import readme from './alert.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Alert',
  id: 'rijkshuisstijl-alert',
  component: Alert,
  argTypes: {
    type: {
      description: 'Alert type',
      control: { type: 'select' },
      options: ['info', 'error', 'warning', 'ok'],
      table: {
        category: 'Property',
      },
    },
    heading: {
      description: 'Alert heading - used in default webcomponent slot',
      type: {
        name: 'string',
      },
      table: {
        category: 'Demo',
      },
    },
    headingLevel: {
      description: 'Alert heading level',
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      table: {
        category: 'Demo',
      },
    },
    textContent: {
      description: 'Alert content - used in default webcomponent slot',
      type: {
        name: 'string',
      },
      table: {
        category: 'Demo',
      },
    },
  },
  args: {
    type: 'info',
    heading: 'Heading',
    headingLevel: 3,
    textContent: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *',
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Alert>;

export default meta;

export const Informative: StoryObj<typeof meta> = {
  args: {
    type: 'info',
    heading: 'Heading',
    textContent: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *',
  },
};

export const Negative: StoryObj<typeof meta> = {
  args: {
    type: 'error',
    heading: 'Heading',
    textContent: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *',
  },
};

export const Positive: StoryObj<typeof meta> = {
  args: {
    type: 'ok',
    heading: 'Heading',
    textContent: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *',
  },
};

export const Warning: StoryObj<typeof meta> = {
  args: {
    type: 'warning',
    heading: 'Heading',
    textContent: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *',
  },
};
