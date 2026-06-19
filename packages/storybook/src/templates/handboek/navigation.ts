import type { ReactNode } from 'react';

export interface NavItem {
  label: ReactNode;
  href: string;
  current?: boolean;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    href: '/handboek/',
    label: 'Introductie',
  },
  {
    href: '/handboek/huisstijl-vastleggen/',
    label: 'Huisstijl vastleggen',
    children: [
      {
        href: '/handboek/huisstijl-vastleggen/design-tokens/',
        label: 'Design tokens',
      },
      {
        href: '/handboek/huisstijl-vastleggen/basis-tokens/',
        label: 'Basis tokens',
        children: [
          {
            href: '/handboek/huisstijl-vastleggen/basis-tokens/kleuren',
            label: 'Kleuren',
          },
          {
            href: '/handboek/huisstijl-vastleggen/basis-tokens/ruimte',
            label: 'Ruimte',
          },
          {
            href: '/handboek/huisstijl-vastleggen/basis-tokens/lettertypen',
            label: 'Lettertypen',
          },
          {
            href: '/handboek/huisstijl-vastleggen/basis-tokens/afrondingen',
            label: 'Afrondingen',
          },
        ],
      },
      {
        href: '/handboek/huisstijl-vastleggen/themas/',
        label: 'Themas',
        children: [
          {
            href: '/handboek/huisstijl-vastleggen/themas/start-thema',
            label: 'Start-thema',
          },
          {
            href: '/handboek/huisstijl-vastleggen/themas/Voorbeeld-thema',
            label: 'Voorbeeld-thema',
          },
        ],
      },
    ],
  },
  {
    href: '/handboek/voor-designers/',
    label: 'Voor designers',
    children: [
      {
        href: '/handboek/voor-designers/introductie/',
        label: 'Introductie',
      },
      {
        href: '/handboek/voor-designers/figma-changelog/',
        label: 'Figma changelog',
      },
    ],
  },
  {
    href: '/handboek/voor-ontwikkelaars/',
    label: 'Voor ontwikkelaars',
  },
  {
    href: '/handboek/voor-projectleiders/',
    label: 'Voor projectleiders',
  },
  {
    href: '/handboek/voor-contentbeheerders/',
    label: 'Voor contentbeheerders',
  },
];
