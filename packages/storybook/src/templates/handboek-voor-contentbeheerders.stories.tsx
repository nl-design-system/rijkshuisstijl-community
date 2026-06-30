import type { Meta, StoryObj } from '@storybook/react-vite';
import Page from './handboek/VoorContentbeheerders';
import './globals.css';

const meta: Meta = {
  title: 'Handboek/voor contentbeheerders',
  id: 'rhc-templates-handboek-voor-contentbeheerders',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    isPage: true,
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};
