import { FooterComponent } from '@rijkshuisstijl-community/components-angular';
import { type Meta, type StoryObj } from '@storybook/angular';

const meta: Meta<FooterComponent> = {
  title: 'Rijkshuisstijl/Footer',
  id: 'rhc-angular-footer',
  component: FooterComponent,
  argTypes: {
    heading: {
      description: 'Heading',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    appearanceLevel: {
      description: 'Het uiterlijk van de heading in de footer.',
      defaultValue: 3,
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      table: {
        type: { summary: 'number' },
      },
    },

    background: {
      description: 'De achtergrondkleur van de footer.',
      control: { type: 'select' },
      options: ['primary-filled', 'primary-outlined'],
      table: {
        type: { summary: 'string' },
      },
    },

    backtotop: {
      description: 'Toon de "Terug naar boven" knop.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
      },
    },

    preFooter: {
      description: 'Het balkje die boven de footer wordt getoond.',
      defaultValue: false,
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
      },
    },

    preFooterMessage: {
      description: 'De tekst die in het balkje boven de footer wordt getoond.',
      control: { type: 'text' },
      if: { arg: 'preFooter', eq: true },
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    heading: 'Heading',
    preFooter: true,
    preFooterMessage: 'Pre Footer Message',
    background: 'primary-filled',
    backtotop: true,
  },
  render: ({ heading, background, backtotop, preFooter, preFooterMessage }) => ({
    template: `
      <footer rhc-footer
        [preFooter]="'${preFooter}'"
        [preFooterMessage]="'${preFooterMessage}'"
        [background]="'${background}'"
        [backtotop]="'${backtotop}'"
        [heading]="'${heading}'"
        [columns]="[
          {
            heading: 'Column 1',
            appearanceLevel: 4,
            items: [
              { href: 'https://www.google.com', label: 'Google' },
              { href: 'https://www.google.com', label: 'Google' },
              { href: 'https://www.google.com', label: 'Google' },
              { href: 'https://www.google.com', label: 'Google' },
              
            ]
          },
          {
            heading: 'Column 2',
            appearanceLevel: 4,
            items: [
              { href: 'https://nldesignsystem.nl/', label: 'Nl Design System' },
              { href: 'https://nldesignsystem.nl/', label: 'Nl Design System' },
              { href: 'https://nldesignsystem.nl/', label: 'Nl Design System' },
              { href: 'https://nldesignsystem.nl/', label: 'Nl Design System' },
            ]
          }
        ]"
        [subFooter]="{
          items: [
            { href: 'https://nldesignsystem.nl/', label: 'Nl Design System' }
          ]
        }"
      >
      </footer>
    `,
    props: {
      heading,
      background,
      backtotop,
      preFooter,
      preFooterMessage,
    },
  }),
};

export default meta;

export const Default: StoryObj<FooterComponent> = {
  args: {},
};
