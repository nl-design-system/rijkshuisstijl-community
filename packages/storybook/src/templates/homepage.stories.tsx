import { Meta, StoryObj } from '@storybook/react';
import './globals.css';
import Homepage from './homepage';

const meta = {
  title: 'Templates/Homepage',
  id: 'rhc-templates-homepage',
  component: Homepage,
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
    isPage: true,
  },
} satisfies Meta<typeof Homepage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
