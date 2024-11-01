import type { Meta, StoryObj } from '@storybook/react/*';
import Page from './collage';
import './globals.css';

const meta: Meta = {
  title: 'Templates/Collage',
  component: Page,
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};
