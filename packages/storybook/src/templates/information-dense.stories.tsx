import type { Meta, StoryObj } from '@storybook/react-vite';
import Page from './information-dense';
import './globals.css';

const meta: Meta<typeof Page> = {
  title: 'Information Dense',
  id: 'rhc-templates-information-dense',
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
