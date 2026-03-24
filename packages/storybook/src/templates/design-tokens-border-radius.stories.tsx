import type { Meta, StoryObj } from '@storybook/react-vite';
import Page from './design-tokens/border-radius';
import './globals.css';

const meta: Meta = {
  title: 'Design Tokens/Afrondingen',
  id: 'rhc-templates-design-tokens-border-radius',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    isPage: true,
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};
