import type { ReactNode } from 'react';

export const navigation: { label: ReactNode; href: string; current?: boolean }[] = [
  {
    href: '/design-tokens/',
    label: 'Design Tokens',
  },
  {
    href: '/design-tokens/color/',
    label: 'Kleuren',
  },
  {
    href: '/design-tokens/space/',
    label: 'Ruimte',
  },
  {
    href: '/design-tokens/font/',
    label: 'Lettertypes',
  },
  {
    href: '/design-tokens/border-radius/',
    label: 'Afrondingen',
  },
];
