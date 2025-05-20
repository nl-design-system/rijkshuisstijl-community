/* @license CC0-1.0 */

import { AlertWebComponent } from '@rijkshuisstijl-community/web-components';
import type { Meta, StoryObj } from '@storybook/web-components';
import { mergeMarkdown } from '../../helpers/merge-markdown';
import readme from '../community/alert.md?raw';

AlertWebComponent.define();

const meta = {
  title: 'Web Components/Alert',
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
      options: [1, 2, 3, 4, 5],
      table: {
        category: 'Demo',
      },
    },
    messageText: {
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
    messageText: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *',
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
    type: 'info',
    heading: 'Heading',
    messageText: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *',
  },
} as StoryObj<typeof meta>;

export const Negative = {
  args: {
    type: 'error',
    heading: 'Heading',
    messageText: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *',
  },
} as StoryObj<typeof meta>;

export const Positive = {
  args: {
    type: 'ok',
    heading: 'Heading',
    messageText: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *',
  },
} as StoryObj<typeof meta>;

export const Warning = {
  args: {
    type: 'warning',
    heading: 'Heading',
    messageText: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *',
  },
} as StoryObj<typeof meta>;
