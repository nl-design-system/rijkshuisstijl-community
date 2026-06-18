import components from './componenten';

const knownFrameworks = ['react', 'angular', 'twig', 'web component'];

const normalise = (name) => name.replace(/\s+/g, '-').toLowerCase();
const normaliseSystem = (name) => name.replace(/\s+/g, '_').toLowerCase();

const readableFrameworkNames = {
  react: 'React',
  angular: 'Angular',
  twig: 'Twig',
  ['web component']: 'Web Components',
};

const descriptions = {
  accordion: 'Secties met de mogelijkheid om gerelateerde content te tonen en weer te verbergen.',
  actiongroup: 'Groepeert één of meer gerelateerde acties en verzorgt de lay-out van de content.',
  alert: 'Belangrijk bericht dat informeert over de huidige activiteit van de gebruiker.',
  blockquote: 'Toont een citaat dat afwijkt van de hoofdtekst.',
  breadcrumb_navigation:
    'Toont de locatie van de pagina binnen de hiërarchie van een website en biedt de mogelijkheid om tussen niveaus te navigeren.',
  button: 'Biedt de mogelijkheid om een actie uit te voeren.',
  checkbox_group: 'Biedt de mogelijkheid om geen, één of meerdere opties te selecteren uit een lijst.',
  card_as_link: 'Korte sectie die als geheel een link is naar een gerelateerde pagina.',
  checkbox: 'https://rijkshuisstijl-community.vercel.app/?path=/docs/rhc-checkbox--docs',
  dot_badge: 'Stip bij een Link of Button die zonder zichtbaar label de aandacht trekt bij een statuswijziging.',
};

export default components.items.map((comp) => ({
  id: comp.id,
  heading: comp.content.title,
  title: `Bekijk de ${comp.content.title} component in Storybook`,
  description: descriptions[normaliseSystem(comp.content.title)] || '',
  href: `https://rijkshuisstijl-community.vercel.app/?path=/docs/rhc-${normalise(comp.content.title)}--docs`,
  linkLabel: 'Bekijk in Storybook',
  frameworks: [
    'CSS',
    ...knownFrameworks.filter((fw) => comp[fw] === 'Available').map((fw) => readableFrameworkNames[fw] || fw),
  ],
  nlStatus: comp['nL Status'],
  oorsprong: (comp.oorsprong ?? '').split(', '),
}));
