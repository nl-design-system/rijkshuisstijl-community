import { PageNumberNavigation } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from './page-number-navigation.md?raw';

const meta = {
  title: 'Page Number Navigation',
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
} satisfies Meta<typeof PageNumberNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
