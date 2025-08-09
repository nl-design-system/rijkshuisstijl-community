import type { Meta, StoryObj } from '@storybook/react/*';
import DevOvhAPIoverzicht from './developer-overheid/api-overzicht';
import './globals.css';

const meta: Meta = {
  title: 'Templates/API Overzicht',
  component: DevOvhAPIoverzicht,
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
    isPage: true,
  },
};
export default meta;

type Story = StoryObj<typeof DevOvhAPIoverzicht>;

export const Default: Story = {};
