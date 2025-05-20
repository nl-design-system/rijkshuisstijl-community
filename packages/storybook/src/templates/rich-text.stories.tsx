import type { Meta, StoryObj } from '@storybook/react';
import Page from './rich-text';
import './globals.css';

const meta: Meta = {
  title: 'Templates/Rich Text',
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
