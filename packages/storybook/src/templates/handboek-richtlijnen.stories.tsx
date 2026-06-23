import type { Meta, StoryObj } from '@storybook/react-vite';
import Page from './handboek/Richtlijnen';
import './globals.css';

const meta: Meta = {
  title: 'Handboek/richtlijnen',
  id: 'rhc-templates-handboek-richtlijnen',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    isPage: true,
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};
