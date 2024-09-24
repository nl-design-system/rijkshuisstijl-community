/* @license CC0-1.0 */

import { Article } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import readme from './article.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Article',
  id: 'rhc-article',
  component: Article,
  argTypes: {},
  args: {},
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Article>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {},
};
