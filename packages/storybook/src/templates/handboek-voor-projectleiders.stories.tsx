import type { Meta, StoryObj } from '@storybook/react-vite';
import Page from './handboek/VoorProjectleiders';
import './globals.css';

const meta: Meta = {
  title: 'Handboek/voor projectleiders',
  id: 'rhc-templates-handboek-voor-projectleiders',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    isPage: true,
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};
