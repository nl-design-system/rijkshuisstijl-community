import type { Meta, StoryObj } from '@storybook/react-vite';
import Page from './handboek/huisstijl-vastleggen/themas/start-thema';
import './globals.css';

const meta: Meta = {
  title: 'Handboek/huisstijl vastleggen/themas/start thema',
  id: 'rhc-templates-handboek-huisstijl-vastleggen-themas-start-thema',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    isPage: true,
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};
