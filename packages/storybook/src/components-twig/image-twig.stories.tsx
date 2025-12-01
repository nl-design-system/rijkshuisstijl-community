/* @license CC0-1.0 */

import TwigImage from '@rijkshuisstijl-community/components-twig/src/Image.twig';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import referenceDocs from '@utrecht/components/img/docs/references.nl.md?raw';
import htmlDocs from '@utrecht/components/img/docs/technology-html.nl.md?raw';
import wcagDocs from '@utrecht/components/img/docs/wcag.nl.md?raw';
import DrupalAttribute from 'drupal-attribute';
import readme from '../components-react/image.md?raw';

const meta = {
  title: 'Image',
  id: 'rhc-twig-image',
  component: TwigImage,
  argTypes: {
    src: {
      description: 'Image source',
      control: { type: 'text' },
      table: {
        category: 'Property',
      },
    },
    alt: {
      description: 'Image alt text',
      control: { type: 'text' },
      table: {
        category: 'Property',
      },
    },
    width: {
      description: 'Image width',
      control: { type: 'number' },
      table: {
        category: 'Property',
      },
    },
    height: {
      description: 'Image height',
      control: { type: 'number' },
      table: {
        category: 'Property',
      },
    },
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme, htmlDocs, referenceDocs, wcagDocs]),
      },
    },
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, maar de photo property altijd geset, daardoor is hij altijd max-height en max-width 100%.',
    //Todo: voeg NL-Design system & Figma links toe
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-twig/src/Image.twig',
  },
} satisfies Meta<typeof TwigImage>;

export default meta;

export const TwigImage1: StoryObj<typeof meta> = {
  args: {
    attributes: new DrupalAttribute(),
    width: 763,
    height: 640,
    src: '/placeholder.jpg',
    alt: 'Multicolored tulip field',
  },
  name: 'Image',
};
