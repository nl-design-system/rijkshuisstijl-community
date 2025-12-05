import TwigAlert from '@rijkshuisstijl-community/components-twig/src/Alert.twig';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import DrupalAttribute from 'drupal-attribute';
import readme from '../components-react/alert.md?raw';

const meta = {
  title: 'Alert',
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
    children: {
      description: 'Alert content - heading and paragraph content',
      type: {
        name: 'string',
      },
      table: {
        category: 'Property',
      },
    },
  },
  args: {
    type: 'info',
    children:
      '<h3 class="nl-heading rhc-heading nl-heading--level-5">Heading</h3><p class="nl-paragraph">Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *</p>',
  },
  parameters: {
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1195-4201&t=n1djYpmvDCKmAEUi-0',
    nldesignsystem: 'https://www.nldesignsystem.nl/alert/',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-twig/src/Alert.twig',
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
  },
} satisfies Meta<typeof TwigAlert>;

export default meta;

export const TwigInformative: StoryObj<typeof meta> = {
  args: {
    type: 'info',
    children:
      '<h3 class="nl-heading rhc-heading nl-heading--level-5">Heading</h3><p class="nl-paragraph">Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *</p>',
    attributes: new DrupalAttribute(),
  },
  name: 'Informative',
};

export const TwigNegative: StoryObj<typeof meta> = {
  args: {
    type: 'error',
    children:
      '<h3 class="nl-heading rhc-heading nl-heading--level-5">Heading</h3><p class="nl-paragraph">Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *</p>',
    attributes: new DrupalAttribute(),
  },
  name: 'Negative',
};

export const TwigPositive: StoryObj<typeof meta> = {
  args: {
    type: 'ok',
    children:
      '<h3 class="nl-heading rhc-heading nl-heading--level-5">Heading</h3><p class="nl-paragraph">Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *</p>',
    attributes: new DrupalAttribute(),
  },
  name: 'Positive',
};

export const TwigWarning: StoryObj<typeof meta> = {
  args: {
    type: 'warning',
    children:
      '<h3 class="nl-heading rhc-heading nl-heading--level-5">Heading</h3><p class="nl-paragraph">Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *</p>',
    attributes: new DrupalAttribute(),
  },
  name: 'Warning',
};
