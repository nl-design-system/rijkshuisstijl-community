import type { Meta, StoryObj } from '@storybook/react-vite';
import Page from './form';
import './globals.css';

const meta: Meta = {
  title: 'Form',
  id: 'rhc-templates-form',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    isPage: true,
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};
