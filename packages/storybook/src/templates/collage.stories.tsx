import type { Meta, StoryObj } from '@storybook/react';
import Page from './collage';
import './globals.css';

const meta: Meta = {
  title: 'Collage',
  id: 'rhc-templates-collage',
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
