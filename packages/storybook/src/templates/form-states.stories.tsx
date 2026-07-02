import type { Meta, StoryObj } from '@storybook/react-vite';
import Page from './form-states';
import './globals.css';

const meta: Meta = {
  title: 'Form States',
  id: 'rhc-templates-form-states',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    isPage: true,
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};
