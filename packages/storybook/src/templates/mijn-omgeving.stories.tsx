import { Meta, StoryObj } from '@storybook/react-vite';
import './globals.css';
import MijnOmgeving from './mijn-omgeving';

const meta = {
  title: 'Mijn Omgeving',
  id: 'rhc-templates-mijn-omgeving',
  component: MijnOmgeving,
  parameters: {
    layout: 'fullscreen',
    isPage: true,
  },
} satisfies Meta<typeof MijnOmgeving>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  globals: {
    viewport: { value: 'mobiel', isRotated: false },
  },
  parameters: {
    viewport: {
      options: {
        mobiel: { name: 'Mobiel', styles: { height: '812px', width: '375px' } },
      },
    },
  },
};
