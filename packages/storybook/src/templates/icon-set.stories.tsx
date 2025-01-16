import { Meta, StoryObj } from '@storybook/react';
// import './globals.css';
import IconSet from './icon-set';

const meta = {
  title: 'Templates/Icon Set',
  id: 'rhc-templates-icon-set',
  component: IconSet,
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
    isPage: true,
  },
} satisfies Meta<typeof IconSet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
