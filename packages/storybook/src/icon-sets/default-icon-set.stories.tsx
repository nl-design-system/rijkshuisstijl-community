import { Meta, StoryObj } from '@storybook/react';
import IconSet from './default-icon-set-page';
import readme from './default-icon-set.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Icon Sets/Default Icon Set',
  id: 'rhc-templates-default-icon-set',
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
    isPage: true,
  },
} satisfies Meta<typeof IconSet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
