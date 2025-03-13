/* @license CC0-1.0 */

import TwigImage from '@rijkshuisstijl-community/components-twig/src/Image.twig';
import type { Meta, StoryObj } from '@storybook/react';
import DrupalAttribute from 'drupal-attribute';
import { mergeMarkdown } from '../../helpers/merge-markdown';
import readme from '../community/image.md?raw';

const meta = {
  title: 'Twig Components/Image',
  id: 'rhc-twig-image',
  component: TwigImage,
  argTypes: {},
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
  },
} satisfies Meta<typeof TwigImage>;

export default meta;

export const TwigImage1: StoryObj<typeof meta> = {
  args: {
    attributes: new DrupalAttribute([
      ['width', 763],
      ['height', 640],
      ['src', './placeholder.jpg'],
      ['alt', 'Multicolored tulip field'],
    ]),
  },
  name: 'Image 1',
};
