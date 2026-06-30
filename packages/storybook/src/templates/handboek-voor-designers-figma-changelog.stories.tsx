import type { Meta, StoryObj } from '@storybook/react-vite';
import Page from './handboek/voordesigners/figma-changelog';
import './globals.css';

const meta: Meta = {
  title: 'Handboek/voor designers/figma changelog',
  id: 'rhc-templates-handboek-voor-designers-figma-changelog',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    isPage: true,
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};
