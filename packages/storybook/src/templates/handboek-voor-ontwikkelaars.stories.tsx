import type { Meta, StoryObj } from '@storybook/react-vite';
import Page from './handboek/VoorOntwikkelaars';
import './globals.css';

const meta: Meta = {
  title: 'Handboek/voor ontwikkelaars',
  id: 'rhc-templates-handboek-voorontwikkelaars',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    isPage: true,
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};
