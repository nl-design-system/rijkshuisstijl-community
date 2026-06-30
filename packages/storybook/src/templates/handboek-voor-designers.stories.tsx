import type { Meta, StoryObj } from '@storybook/react-vite';
import Page from './handboek/voordesigners';
import './globals.css';

const meta: Meta = {
  title: 'Handboek/voor designers',
  id: 'rhc-templates-handboek-voor-designers',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    isPage: true,
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};
