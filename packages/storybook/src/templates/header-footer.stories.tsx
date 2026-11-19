import type { Meta, StoryObj } from '@storybook/react-vite';
import Page from './overheid-nl';
import './globals.css';

const meta: Meta = {
  title: 'Overheid.nl',
  id: 'rhc-templates-overheid-nl',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    isPage: true,
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};
