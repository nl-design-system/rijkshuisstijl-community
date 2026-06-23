import type { Meta, StoryObj } from '@storybook/react-vite';
import Page from './handboek/huisstijl-vastleggen/basis-tokens/lettertypen';
import './globals.css';

const meta: Meta = {
  title: 'Handboek/huisstijl vastleggen/basis tokens/lettertypen',
  id: 'rhc-templates-handboek-huisstijl-vastleggen-basis-tokens-lettertypen',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    isPage: true,
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};
