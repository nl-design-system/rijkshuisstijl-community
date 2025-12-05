import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import IconSet from './default-icon-set-page';
import readme from './default-icon-set.md?raw';

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
  },
} satisfies Meta<typeof IconSet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
