export type ComponentData = {
  id: string;
  title: string;
  heading: string;
  description: string;
  href: string;
  linkLabel: string;
  frameworks: string[];
};

export const allComponentsData: ComponentData[] = [
  {
    id: 'accordion',
    title: 'Bekijk de Accordion component in Storybook',
    heading: 'Accordion',
    description: 'Secties met de mogelijkheid om gerelateerde content te tonen en weer te verbergen.',
    href: 'https://rijkshuisstijl-community.vercel.app/?path=/docs/rhc-accordion--docs',
    linkLabel: 'Bekijk in Storybook',
    frameworks: ['CSS', 'React', 'Web Components'],
  },
  {
    id: 'action-group',
    title: 'Bekijk de Action Group component in Storybook',
    heading: 'Action Group',
    description: 'Groepeert één of meer gerelateerde acties en verzorgt de lay-out van de content.',
    href: 'https://rijkshuisstijl-community.vercel.app/?path=/docs/rhc-action-group--docs',
    linkLabel: 'Bekijk in Storybook',
    frameworks: ['CSS', 'React', 'Web Components', 'Angular'],
  },
  {
    id: 'alert',
    title: 'Bekijk de Alert component in Storybook',
    heading: 'Alert',
    description: 'Belangrijk bericht dat informeert over de huidige activiteit van de gebruiker.',
    href: 'https://rijkshuisstijl-community.vercel.app/?path=/docs/rhc-alert--docs',
    linkLabel: 'Bekijk in Storybook',
    frameworks: ['CSS', 'React', 'Web Components', 'Twig'],
  },
  {
    id: 'blockquote',
    title: 'Bekijk de Blockquote component in Storybook',
    heading: 'Blockquote',
    description: 'Toont een citaat dat afwijkt van de hoofdtekst.',
    href: 'https://rijkshuisstijl-community.vercel.app/?path=/docs/rhc-blockquote--docs',
    linkLabel: 'Bekijk in Storybook',
    frameworks: ['CSS', 'React', 'Web Components'],
  },
  {
    id: 'breadcrumb-navigation',
    title: 'Bekijk de Breadcrumb Navigation component in Storybook',
    heading: 'Breadcrumb Navigation',
    description:
      'Toont de locatie van de pagina binnen de hiërarchie van een website en biedt de mogelijkheid om tussen niveaus te navigeren.',
    href: 'https://rijkshuisstijl-community.vercel.app/?path=/docs/rhc-breadcrumb-nav--docs',
    linkLabel: 'Bekijk in Storybook',
    frameworks: ['CSS', 'React', 'Web Components'],
  },
  {
    id: 'button',
    title: 'Bekijk de Button component in Storybook',
    heading: 'Button',
    description: 'Biedt de mogelijkheid om een actie uit te voeren.',
    href: 'https://rijkshuisstijl-community.vercel.app/?path=/docs/rhc-button--docs',
    linkLabel: 'Bekijk in Storybook',
    frameworks: ['CSS', 'React', 'Web Components', 'Angular'],
  },
  {
    id: 'checkbox-group',
    title: 'Bekijk de Checkbox Group component in Storybook',
    heading: 'Checkbox Group',
    description: 'Biedt de mogelijkheid om geen, één of meerdere opties te selecteren uit een lijst.',
    href: 'https://rijkshuisstijl-community.vercel.app/?path=/docs/rhc-checkbox-group--docs',
    linkLabel: 'Bekijk in Storybook',
    frameworks: ['CSS', 'React', 'Web Components'],
  },
  {
    id: 'card-as-link',
    title: 'Bekijk de Card as Link component in Storybook',
    heading: 'Card as Link',
    description: 'Korte sectie die als geheel een link is naar een gerelateerde pagina.',
    href: 'https://rijkshuisstijl-community.vercel.app/?path=/docs/rhc-card-as-link--docs',
    linkLabel: 'Bekijk in Storybook',
    frameworks: ['CSS', 'React', 'Web Components'],
  },
  {
    id: 'checkbox',
    title: 'Bekijk de Checkbox component in Storybook',
    heading: 'Checkbox',
    description: 'Toont meta-informatie over een zaak en biedt de mogelijkheid hier naartoe te navigeren.', // Description seems off, copied from your code.
    href: 'https://rijkshuisstijl-community.vercel.app/?path=/docs/rhc-checkbox--docs',
    linkLabel: 'Bekijk in Storybook',
    frameworks: ['CSS', 'React', 'Web Components'],
  },
  {
    id: 'dot-badge',
    title: 'Bekijk de Dot Badge component in Storybook',
    heading: 'Dot Badge',
    description: 'Stip bij een Link of Button die zonder zichtbaar label de aandacht trekt bij een statuswijziging.',
    href: 'https://rijkshuisstijl-community.vercel.app/?path=/docs/rhc-dot-badge--docs',
    linkLabel: 'Bekijk in Storybook',
    frameworks: ['CSS', 'React'],
  },
  // Add more components if you have more than 10
];
