/* @license CC0-1.0 */

import { Alert } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import readme from './alert.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Rijkshuisstijl/Alert',
  id: 'rhc-alert',
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
      description: 'Alert heading',
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
      options: [1, 2, 3, 4, 5],
      table: {
        category: 'Demo',
      },
    },
    textContent: {
      description: 'Alert content',
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
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        // TODO: disconnect "Usage" from the current readme, import the readme from Utrecht afterwards and combine with our own Usage
        component: mergeMarkdown([readme]),
      },
    },
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1195-4201&t=n1djYpmvDCKmAEUi-0',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Alert.tsx',
    nldesignsystem: 'https://www.nldesignsystem.nl/alert/',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
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
