import type { Meta, StoryObj } from '@storybook/react/*';
import Page from './developer-overheid/api-overzicht';
import './globals.css';

const meta: Meta = {
  title: 'Templates/API Overzicht',
  component: Page,
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
    isPage: true,
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};
