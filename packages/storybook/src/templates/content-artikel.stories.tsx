import type { Meta, StoryObj } from '@storybook/react-vite';
import Page from './content-artikel';
import './globals.css';

const meta: Meta = {
  title: 'Content / Artikel',
  id: 'rhc-templates-content-artikel',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    isPage: true,
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};

export const Mobile: Story = {
  globals: {
    viewport: { value: 'mobiel', isRotated: false },
  },
  parameters: {
    viewport: {
      options: {
        mobiel: { name: 'Mobiel', styles: { height: '812px', width: '375px' } },
      },
    },
  },
};
