import type { Meta, StoryObj } from '@storybook/react-vite';
import Page from './componenten';
import './globals.css';

const meta: Meta = {
  title: 'Componenten',
  id: 'rhc-templates-componenten',
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
