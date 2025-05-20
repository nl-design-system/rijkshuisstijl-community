import type { Meta, StoryObj } from '@storybook/react/*';
import Componenten from './componenten';
import './globals.css';

const meta: Meta = {
  title: 'Templates/Componenten',
  component: Componenten,
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
    isPage: true,
  },
};
export default meta;

type Story = StoryObj<typeof Componenten>;

export const Default: Story = {};
