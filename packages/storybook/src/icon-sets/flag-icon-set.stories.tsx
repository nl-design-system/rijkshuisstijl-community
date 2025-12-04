import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import IconSet from './flag-icon-set-page';
import readme from './flag-icon-set.md?raw';

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
