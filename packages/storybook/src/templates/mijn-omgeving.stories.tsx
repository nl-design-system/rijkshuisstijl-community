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

/*
 * GAP: the Side Navigation has no mobile (menu bar/drawer) variant yet, so at 375px the
 * two-column layout persists and the main content overflows the viewport, while the
 * mobile design shows a stacked layout with a bottom menu bar.
 */
export const Mobile: Story = {
  globals: {
    viewport: { value: 'mobiel', isRotated: false },
  },
};
