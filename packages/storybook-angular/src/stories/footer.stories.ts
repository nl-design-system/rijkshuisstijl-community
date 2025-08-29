import { type Meta, type StoryObj } from '@storybook/angular';
import readme from './footer.md';
import { FooterComponent } from '../../../components-angular/src/public-api';

const meta: Meta<FooterComponent> = {
  title: 'Footer',
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
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: ({ heading, background, backtotop, preFooter, preFooterMessage, appearanceLevel }) => ({
    template: `
      <footer rhc-footer
        [preFooter]="${preFooter}"
        [preFooterMessage]="'${preFooterMessage}'"
        [background]="'${background}'"
        [backtotop]="${backtotop}"
        [heading]="'${heading}'"
        [appearanceLevel] = "${appearanceLevel}"
         [columns]="[
          {
            heading: 'Service',
            appearanceLevel: 3,
            items: [
              { href: '#', label: 'Contact' },
              { href: '#', label: 'Abonneren' },
              { href: '#', label: 'RSS' },
              { href: '#', label: 'Vacatures' },
              { href: '#', label: 'Sitemap' },
              { href: '#', label: 'Help' },
              { href: '#', label: 'Archief' },
            ]
          },
          {
            heading: 'Over deze site',
            appearanceLevel: 3,
            items: [
              { href: '#', label: 'Over deze organisatie' },
              { href: '#', label: 'Wetten en regelingen' },
              { href: '#', label: 'Privacy' },
              { href: '#', label: 'Cookies' },
              { href: '#', label: 'Toegankelijkheid' },
              { href: '#', label: 'Open data' },
              { href: '#', label: 'Kwetsbaarheid melden' },
            ]
          }
        ]"
        [subFooter]="{
          items: [
            { href: '#', label: 'Privacy' }
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
