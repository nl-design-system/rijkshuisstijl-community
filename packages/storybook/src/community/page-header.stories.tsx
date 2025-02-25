/* @license CC0-1.0 */

import { Heading, PageHeader } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import readme from './page-header.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Rijkshuisstijl/PageHeader',
  id: 'rhc-page-header',
  component: PageHeader,
  args: {
    children: <Heading level={2}>Header Area</Heading>,
  },
  parameters: {
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add Figma, GitHub and NL DesignSystem links
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, voor dit component zijn (nog) geen specifieke design tokens gedefinieerd.',
  },
} satisfies Meta<typeof PageHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
