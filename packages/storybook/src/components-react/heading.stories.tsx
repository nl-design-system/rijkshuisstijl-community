/* @license CC0-1.0 */

import { Heading, headingLevels } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from './heading.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Heading',
  id: 'rhc-heading',
  component: Heading,
  argTypes: {
    level: {
      description: 'Heading level',
      control: { type: 'select' },
      options: headingLevels,
    },
    appearanceLevel: {
      description: 'Appearance level',
      control: { type: 'select' },
      options: headingLevels,
    },
  },
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source
        component: mergeMarkdown([readme]),
      },
    },
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=153-1039&t=9KlJWkn6GEOm2sN1-11',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Heading.tsx',
    nldesignsystem: 'https://nldesignsystem.nl/heading/',
    componentOrigin:
      'Dit component is overgenomen van de NL Design System Heading Candidate met extra functionaliteit, en met overgeschreven design tokens van de Rijkshuisstijl Community.',
  },
} satisfies Meta<typeof Heading>;

export default meta;

export const Heading1: StoryObj<typeof meta> = {
  args: {
    level: 1,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
  },
  name: 'Heading 1',
};

export const Heading2: StoryObj<typeof meta> = {
  args: {
    level: 2,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
  },
  name: 'Heading 2',
};

export const Heading3: StoryObj<typeof meta> = {
  args: {
    level: 3,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
  },
  name: 'Heading 3',
};

export const Heading4: StoryObj<typeof meta> = {
  args: {
    level: 4,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
  },
  name: 'Heading 4',
};

export const Heading5: StoryObj<typeof meta> = {
  args: {
    level: 5,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
  },
  name: 'Heading 5',
};

export const Heading5Appearance: StoryObj<typeof meta> = {
  args: {
    level: 1,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    appearanceLevel: 5,
  },
  name: 'Heading 5 (in appearance)',
};
