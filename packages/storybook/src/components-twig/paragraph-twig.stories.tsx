/* @license CC0-1.0 */

import TwigParagraph from '@rijkshuisstijl-community/components-twig/src/Paragraph.twig';
import '@rijkshuisstijl-community/components-css/src/paragraph/index.scss';
import type { Meta, StoryObj } from '@storybook/react';
import DrupalAttribute from 'drupal-attribute';
import { mergeMarkdown } from '../../helpers/merge-markdown';
import readme from '../community/paragraph.md?raw';

const meta = {
  title: 'Twig Components/Paragraph',
  id: 'rhc-twig-paragraph',
  component: TwigParagraph,
  argTypes: {
    purpose: {
      description: 'Lead paragraph',
      control: { type: 'select' },
      options: [undefined, 'lead'],
      table: {
        category: 'API',
      },
      defaultValue: false,
    },
    small: {
      description: 'Small paragraph',
      type: {
        name: 'boolean',
      },
      table: {
        category: 'API',
      },
    },
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
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
    //Todo: voeg NL-Design system & Figma links toe
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-twig/src/Paragraph.twig',
  },
} satisfies Meta<typeof TwigParagraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TwigDefault: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    attributes: new DrupalAttribute(),
  },
  name: 'Paragraph',
};

export const TwigLead: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    purpose: 'lead',
    attributes: new DrupalAttribute(),
  },
  name: 'Lead',
};
