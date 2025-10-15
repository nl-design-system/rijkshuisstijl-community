/* @license CC0-1.0 */

import { Heading, Paragraph } from '@rijkshuisstijl-community/components-react';
import { AlertWebComponent } from '@rijkshuisstijl-community/web-components';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { mergeMarkdown } from '../../helpers/merge-markdown';
import readme from '../components-react/alert.md?raw';

AlertWebComponent.define();

const meta = {
  title: 'Alert',
  id: 'rhc-alert-web',
  component: 'rhc-alert',
  argTypes: {
    type: {
      description: 'Alert type',
      control: { type: 'select' },
      options: ['info', 'error', 'warning', 'ok'],
      table: {
        category: 'Property',
      },
    },
  },
  args: {
    type: 'info',
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
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/Alert.tsx',
    nldesignsystem: 'https://www.nldesignsystem.nl/alert/',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
  },
} as Meta<typeof AlertWebComponent>;

export default meta;

export const Informative = {
  args: {
    children: [
      <Heading appearanceLevel={5} level={3}>
        Heading
      </Heading>,
      <Paragraph>Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *</Paragraph>,
    ],
  },
} as StoryObj<typeof meta>;

export const Negative = {
  args: {
    type: 'error',
    children: [
      <Heading appearanceLevel={5} level={3}>
        Heading
      </Heading>,
      <Paragraph>Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *</Paragraph>,
    ],
  },
} as StoryObj<typeof meta>;

export const Positive = {
  args: {
    type: 'ok',
    children: [
      <Heading appearanceLevel={5} level={3}>
        Heading
      </Heading>,
      <Paragraph>Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *</Paragraph>,
    ],
  },
} as StoryObj<typeof meta>;

export const Warning = {
  args: {
    type: 'warning',
    children: [
      <Heading appearanceLevel={5} level={3}>
        Heading
      </Heading>,
      <Paragraph>Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *</Paragraph>,
    ],
  },
} as StoryObj<typeof meta>;
