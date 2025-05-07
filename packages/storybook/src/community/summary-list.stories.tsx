import { SummaryList } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './summary-list.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Form Summary',
  id: 'rhc-summary-list',
  component: SummaryList,
  args: {
    'aria-label': '',
    'list-item-key': 'Richard',
    'list-item-value': 'Richard Mille horloge.',
    'list-item-action': 'Klik hier om naar de website te gaan...',
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
} satisfies Meta<typeof SummaryList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
