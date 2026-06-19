import type { Meta, StoryObj } from '@storybook/react-vite';
import Page from './handboek/voordesigners/introductie';
import './globals.css';

const meta: Meta = {
  title: 'Handboek/voor designers/introductie',
  id: 'rhc-templates-handboek-voor-designers-introductie',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    isPage: true,
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};
