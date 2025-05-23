import type { Meta, StoryObj } from '@storybook/react';
import Page from './details';
import './globals.css';

const meta: Meta = {
  title: 'Templates/Details',
  id: 'rhc-templates-details',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    status: {
      type: 'UNSTABLE',
    },
    isPage: true,
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};
