import type { Meta, StoryObj } from '@storybook/react-vite';
import Page from './handboek';
import './globals.css';

const meta: Meta = {
  title: 'Handboek',
  id: 'rhc-templates-handboek-introductie',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    isPage: true,
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};
