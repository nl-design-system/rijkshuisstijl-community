import { Meta, StoryObj } from '@storybook/react';
import './globals.css';
import DevOvhHomepage from './developer-overheid/homepage';

const meta = {
  title: 'Templates/Developer Overheid Homepage',
  component: DevOvhHomepage,
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
    isPage: true,
  },
} satisfies Meta<typeof DevOvhHomepage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
