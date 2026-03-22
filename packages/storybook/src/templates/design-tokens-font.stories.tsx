import type { Meta, StoryObj } from '@storybook/react-vite';
import Page from './design-tokens/font';
import './globals.css';

const meta: Meta = {
  title: 'Design Tokens/Lettertypes',
  id: 'rhc-templates-design-tokens-font',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    isPage: true,
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};
