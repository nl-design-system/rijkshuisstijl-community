/* @license CC0-1.0 */

import { Alert, Heading, Paragraph } from '@rijkshuisstijl-community/components-react';
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
    icon: {
      description: 'Alert icon',
      type: { name: 'string' },
      table: {
        category: 'Property',
      },
    },
  },
  args: {
    type: 'info',
    children: [
      <Heading key="heading" level={3}>
        Heading
      </Heading>,
      <Paragraph key="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </Paragraph>,
    ],
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
    children: [
      <Heading key="heading" level={3}>
        Heading
      </Heading>,
      <Paragraph key="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </Paragraph>,
    ],
  },
};

export const Negative: StoryObj<typeof meta> = {
  args: {
    type: 'error',
    children: [
      <Heading key="heading" level={3}>
        Heading
      </Heading>,
      <Paragraph key="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </Paragraph>,
    ],
  },
};
export const Positive: StoryObj<typeof meta> = {
  args: {
    type: 'ok',
    children: [
      <Heading key="heading" level={3}>
        Heading
      </Heading>,
      <Paragraph key="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </Paragraph>,
    ],
  },
};

export const Warning: StoryObj<typeof meta> = {
  args: {
    type: 'warning',
    children: [
      <Heading key="heading" level={3}>
        Heading
      </Heading>,
      <Paragraph key="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </Paragraph>,
    ],
  },
};
