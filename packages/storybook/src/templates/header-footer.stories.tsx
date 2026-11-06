import type { Meta, StoryObj } from '@storybook/react-vite';
import Page from './header-footer';
import { PopoverMegaMenu } from './shared/popover-mega-menu';
import './globals.css';

const meta: Meta = {
  title: 'HeaderFooter',
  id: 'rhc-templates-header-footer',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    isPage: true,
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};

export const PopoverMegaMenuExample: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => <PopoverMegaMenu />,
};
