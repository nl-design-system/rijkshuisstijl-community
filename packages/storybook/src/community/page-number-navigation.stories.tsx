import { PageNumberNavigation } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import readme from './page-number-navigation.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Rijkshuisstijl/PageNumberNavigation',
  component: PageNumberNavigation,
  args: {
    linkTemplate: (page: number) => `/${page}`,
    maxVisiblePages: 5,
    page: 1,
    totalPages: 10,
  },
  argTypes: {
    page: {
      control: {
        type: 'number',
        min: 1,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PageNumberNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
