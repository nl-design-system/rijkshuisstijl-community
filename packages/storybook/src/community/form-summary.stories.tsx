import { FormSummary } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './form-summary.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Form Summary',
  id: 'rhc-form-summary',
  component: FormSummary,
  args: {
    'aria-label': '',
  },
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof FormSummary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
