/* @license CC0-1.0 */
import twigTemplate from '@rijkshuisstijl-community/components-twig/src/Icon.twig?raw';
import type { Meta, StoryObj } from '@storybook/react';
import { createTwigComponent } from './TwigRenderer';

interface TwigIconProps {
  icon: string;
  width?: number;
  height?: number;
}

const TwigIcon = createTwigComponent<TwigIconProps>(twigTemplate);

const icons = {
  'calendar-check': 'Activiteit',
  'arrow-iteration': 'Agile werken',
  api: 'API inrichting',
  'arrows-sort': 'Arrows sort',
  bell: 'Bel',
  edit: 'Bewerken',
  'file-pencil': 'Blog',
  briefcase: 'Briefcase',
  'circle-check': 'Circle check',
  'chevron-right': 'Chevron right',
  'message-dots': ' Comment',
  bubble: 'Communicatie',
  share: 'Delen',
  'caret-left': 'Delta naar links',
  'caret-right': 'Delta naar rechts',
  'arrow-up-right': 'Diagonale pijl',
  download: 'Downloaden',
  inbox: 'Inbox',
  'currency-euro': 'Euro',
  'external-link': 'Externe link',
  heart: 'Favoriet',
  'arrows-diagonal': 'Foto vergroten',
  transfer: 'Gegevensuitwisseling',
  volume: 'Geluid aan',
  'volume-off': 'Geluid uit',
  'corner-left-up': 'Haakse pijl',
  hash: 'Hashtag',
  home: 'Home',
  'info-small': 'Info',
  'info-circle': 'Info circle',
  'info-square': 'Info square',
  'login-2': 'Inloggen',
  settings: 'Instellingen',
  link: 'Interne link',
  clock: 'Klok',
  x: 'Kruis',
  'alert-circle': 'Let op met loep',
  'alert-triangle': 'Let op',
  'map-pin': 'Locatiemarker',
  mail: 'Mail',
  'dots-vertical': 'Meer',
  'menu-2': 'Menu',
  news: 'Nieuws',
  paperclip: 'Paperclip',
  backhoe: 'Permanent beta',
  'arrow-narrow-right': 'Pijl naar rechts',
  'arrow-narrow-left': 'Pijl naar links / Terug',
  'arrow-narrow-up': 'Pijl omhoog',
  'arrow-narrow-down': 'Pijl omlaag',
  plus: 'Plus',
  printer: 'Printer',
  file: 'Publicatie',
  reload: 'Refresh',
  rss: 'RSS',
  'device-floppy': 'Opslaan',
  lock: 'Beveiligde link',
  'device-mobile': 'Smartphone',
  'sort-ascending': 'Sorteer oplopend',
  'sort-descending': 'Sorteer aflopend',
  'grid-dots': 'Tegelweergave',
  eye: 'Toegankelijkheid',
  square: 'Toelichting',
  power: 'Uit-aan knop',
  user: 'Gebruiker',
  'cloud-lock': 'Versleutelen',
  trash: 'Verwijderen',
  send: 'Verzenden',
  'player-play': 'Video',
  check: 'Vinkje',
  'question-mark': 'Vraagteken',
  search: 'Zoek',
};

const meta = {
  title: 'Twig Components/Icon',
  id: 'rhc-twig-icon',
  component: TwigIcon,
  argTypes: {
    icon: {
      options: Object.keys(icons),
      control: {
        type: 'select',
        labels: icons,
      },
    },
    width: {
      control: { type: 'select' },
      options: [24],
    },
    height: {
      control: { type: 'select' },
      options: [24],
    },
  },
  parameters: {
    status: {
      type: 'STABLE',
    },
  },
} satisfies Meta<typeof TwigIcon>;

export default meta;

export const TwigIcon1: StoryObj<typeof meta> = {
  args: {
    icon: 'home',
    width: 24,
    height: 24,
  },
  name: 'Home',
};

export const TwigIcon2: StoryObj<typeof meta> = {
  args: {
    icon: 'brand-x',
    width: 24,
    height: 24,
  },
  name: 'Custom icon',
};
