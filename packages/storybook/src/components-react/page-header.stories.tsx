/* @license CC0-1.0 */

import { Heading, PageHeader } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from './page-header.md?raw';

const meta = {
  title: 'Page Header',
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
    // TODO: add Figma and NL DesignSystem links
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, voor dit component zijn (nog) geen specifieke design tokens gedefinieerd.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/PageHeader.tsx',
  },
} satisfies Meta<typeof PageHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
