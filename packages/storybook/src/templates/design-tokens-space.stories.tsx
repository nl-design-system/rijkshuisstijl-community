import type { Meta, StoryObj } from '@storybook/react-vite';
import Page from './design-tokens/space';
import './globals.css';

const meta: Meta = {
  title: 'Design Tokens/Ruimte',
  id: 'rhc-templates-design-tokens-space',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    isPage: true,
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};
