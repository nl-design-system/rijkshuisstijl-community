import type { Meta, StoryObj } from '@storybook/react-vite';
import Page from './design-tokens/color';
import './globals.css';

const meta: Meta = {
  title: 'Design Tokens/Kleuren',
  id: 'rhc-templates-design-tokens-color',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    isPage: true,
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};
