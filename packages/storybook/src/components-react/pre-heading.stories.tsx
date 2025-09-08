/* @license CC0-1.0 */

import { Heading, PreHeading } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import readme from './pre-heading.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Pre-heading',
  id: 'rhc-pre-heading',
  component: PreHeading,
  argTypes: {},
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
    docs: {
      description: {
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add Figma and NL DesignSystem links
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/PreHeading.tsx',
  },
} satisfies Meta<typeof PreHeading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    children: 'Stap 1 van 8',
    heading: <Heading level={2}>Introductie</Heading>,
  },
};
