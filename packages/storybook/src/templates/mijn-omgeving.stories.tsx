import { Meta, StoryObj } from '@storybook/react';
import './globals.css';
import MijnOmgeving from './mijn-omgeving';

const meta = {
  title: 'Templates/Mijn Omgeving',
  id: 'rhc-templates-mijn-omgeving',
  component: MijnOmgeving,
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
    isPage: true,
  },
} satisfies Meta<typeof MijnOmgeving>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
