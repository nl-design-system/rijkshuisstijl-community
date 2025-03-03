/* @license CC0-1.0 */

import TwigAlert from '@rijkshuisstijl-community/components-twig/src/Alert.twig';
import type { Meta, StoryObj } from '@storybook/react';
import DrupalAttribute from 'drupal-attribute';
import { mergeMarkdown } from '../../helpers/merge-markdown';
import readme from '../community/alert.md?raw';

const meta = {
  title: 'Twig Components/Alert',
  id: 'rhc-twig-alert',
  component: TwigAlert,
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
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1195-4201&t=n1djYpmvDCKmAEUi-0',
    nldesignsystem: 'https://www.nldesignsystem.nl/alert/',
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
  },
} satisfies Meta<typeof TwigAlert>;

export default meta;

export const TwigInformative: StoryObj<typeof meta> = {
  args: {
    type: 'info',
    heading: 'Heading',
    textContent: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *',
    attributes: new DrupalAttribute(),
  },
  name: "Informative"
};

export const TwigNegative: StoryObj<typeof meta> = {
  args: {
    type: 'error',
    heading: 'Heading',
    textContent: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *',
    attributes: new DrupalAttribute(),
  },
  name: "Negative"
};

export const TwigPositive: StoryObj<typeof meta> = {
  args: {
    type: 'ok',
    heading: 'Heading',
    textContent: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *',
    attributes: new DrupalAttribute(),
  },
  name: "Positive"
};

export const TwigWarning: StoryObj<typeof meta> = {
  args: {
    type: 'warning',
    heading: 'Heading',
    textContent: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *',
    attributes: new DrupalAttribute(),
  },
  name: "Warning"
};
