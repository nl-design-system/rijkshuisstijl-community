import type { Meta, StoryObj } from '@storybook/react-vite';
import Page from './handboek/huisstijl-vastleggen';
import './globals.css';

const meta: Meta = {
  title: 'Handboek/huisstijl vastleggen',
  id: 'rhc-templates-handboek-huisstijl-vastleggen',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    isPage: true,
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};
