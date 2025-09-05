import { Meta, StoryObj } from '@storybook/react';
import IconSet from './flag-icon-set-page';
import readme from './flag-icon-set.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Icon Sets/Flag Icon Set',
  id: 'rhc-templates-flag-icon-set',
  component: IconSet,
  parameters: {
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    status: {
      type: 'UNSTABLE',
    },
  },
} satisfies Meta<typeof IconSet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
