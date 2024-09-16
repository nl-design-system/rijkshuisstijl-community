/* @license CC0-1.0 */

import { Alert } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import readme from './alert.md?raw';

interface AlertStoryComponentProps {
  type: 'info' | 'error' | 'warning' | 'ok';
  heading: string;
  textContent: string;
  headingLevel: number;
}

const AlertStoryComponent = ({ type, heading, textContent, headingLevel }: AlertStoryComponentProps) => {
  return <Alert heading={heading} headingLevel={headingLevel} textContent={textContent} type={type}></Alert>;
};

const meta = {
  title: 'Rijkshuisstijl/Alert',
  id: 'rijkshuisstijl-alert',
  component: AlertStoryComponent,
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
  render: AlertStoryComponent,
} as Meta<typeof AlertStoryComponent>;

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
