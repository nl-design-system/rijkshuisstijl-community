import { Meta, StoryObj } from '@storybook/react';
import './globals.css';
import DevOvhHomepage from './developer-overheid/homepage';

const meta = {
  title: 'Templates/Mijn Omgeving',
  id: 'rhc-templates-mijn-omgeving',
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
