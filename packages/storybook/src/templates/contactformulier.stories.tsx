import type { Meta, StoryObj } from '@storybook/react-vite';
import Page from './contactformulier';
import './globals.css';

const meta: Meta<typeof Page> = {
  title: 'Contactformulier',
  id: 'rhc-templates-contactformulier',
  component: Page,
  // NederlandWereldwijd voert het hemelblauw-thema; de rijkslint blijft lintblauw (zie index.css).
  globals: {
    theme: 'Hemelblauw',
  },
  parameters: {
    layout: 'fullscreen',
    isPage: true,
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {
  args: {
    showNotification: true,
  },
};

export const MetFoutmeldingen: Story = {
  args: {
    showErrors: true,
    // Conform de Figma-foutvariant: de informatieve alert is daar verborgen.
    showNotification: false,
  },
};

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
