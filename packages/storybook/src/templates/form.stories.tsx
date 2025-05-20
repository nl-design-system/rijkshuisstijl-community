import type { Meta, StoryObj } from '@storybook/react/*';
import Page from './form';
import './globals.css';

const meta: Meta = {
  title: 'Templates/Form',
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
