import type { Meta, StoryObj } from '@storybook/react-vite';
import Page from './rich-text';
import './globals.css';

const meta: Meta = {
  title: 'Rich Text',
  id: 'rhc-templates-rich-text',
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
