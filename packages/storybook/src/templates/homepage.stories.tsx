import { Meta, StoryObj } from '@storybook/react-vite';
import './globals.css';
import Homepage from './homepage';

const meta = {
  title: 'Homepage',
  id: 'rhc-templates-homepage',
  component: Homepage,
  parameters: {
    layout: 'fullscreen',
    isPage: true,
  },
} satisfies Meta<typeof Homepage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
};
