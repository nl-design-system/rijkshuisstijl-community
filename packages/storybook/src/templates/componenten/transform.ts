import componentsInput, { type ComponentInput } from './componenten';

export type ComponentData = {
  id: string;
  storybookLabel: string;
  heading: string;
  description: string;
  href: string;
  linkLabel: string;
  frameworks: string[];
  nlStatus?: string;
  oorsprong?: string[];
  figmaURL?: string;
  figmaEmbedURL?: string;
  slug: string;
  storybookURL: string;
  nldesignsystemURL?: string;
};

const knownFrameworks: (keyof ComponentInput)[] = ['react', 'angular', 'twig', 'web component'];

const slugify = (arg: string) => arg.toLowerCase().replaceAll(/\W+/g, '-');

const getFigmaEmbedUrl = (url: string): string | null => {
  if (!URL.canParse(url)) {
    return null;
  }

  const parsedUrl = new URL(url);

  if (parsedUrl.origin === 'https://www.figma.com' && parsedUrl.pathname.startsWith('/design/')) {
    const embedParams = new URLSearchParams();
    embedParams.set('embed-host', 'rijkshuisstijl-community');
    const nodeId = parsedUrl.searchParams.get('node-id');
    if (nodeId) {
      embedParams.set('node-id', nodeId);
    }
    return `https://embed.figma.com${parsedUrl.pathname}?${embedParams}`;
  }
  return null;
};

const readableFrameworkNames: Partial<Record<keyof ComponentInput, string>> = {
  react: 'React',
  angular: 'Angular',
  twig: 'Twig',
  ['web component']: 'Web Components',
};

const descriptions: Record<ComponentData['slug'], string> = {
  accordion: 'Secties met de mogelijkheid om gerelateerde content te tonen en weer te verbergen.',
  ['action-group']: 'Groepeert één of meer gerelateerde acties en verzorgt de lay-out van de content.',
  alert: 'Belangrijk bericht dat informeert over de huidige activiteit van de gebruiker.',
  blockquote: 'Toont een citaat dat afwijkt van de hoofdtekst.',
  ['breadcrumb-navigation']:
    'Toont de locatie van de pagina binnen de hiërarchie van een website en biedt de mogelijkheid om tussen niveaus te navigeren.',
  button: 'Biedt de mogelijkheid om een actie uit te voeren.',
  checkbox:
    'Invoerveld voor het kiezen van een optie uit een groep van opties, of om te kiezen tussen "wel" of "niet".',
  ['checkbox-group']: 'Biedt de mogelijkheid om geen, één of meerdere opties te selecteren uit een lijst.',
  ['card-as-link']: 'Korte sectie die als geheel een link is naar een gerelateerde pagina.',
  ['dot-badge']: 'Stip bij een Link of Button die zonder zichtbaar label de aandacht trekt bij een statuswijziging.',
  code: 'Computercode die onderdeel is van lopende tekst.',
  'code-block': 'Blok met één of meerdere regels computercode.',
  'color-sample': 'Toont een voorbeeld van een kleur.',
  'contact-timeline':
    'Toont een chronologische lijst van contactmomenten, met de mogelijkheid om aanvullende details per contactmoment te bekijken.',
  'customizable-text-input': 'Uitbreiding voor iconen, knoppen of tekst aan het begin of einde van een invoerveld.',
  'data-badge': 'Label met extra informatie, zoals een categorie of een eigenschap.',
  'data-summary': 'Lijst met eigenschappen en bijbehorende data over een onderwerp.',
  'date-input': 'Invoerveld om een datum in te vullen met de mogelijkheden die de browser biedt.',
  'date-input-group':
    'Formulierveld voor een datum die de gebruiker al weet of die van bekende gegevens overgenomen kan worden.',
  'date-picker': 'Invoerveld om een beschikbare datum te kiezen via een op maat gemaakte kalender.',
  'description-list': 'Toont een lijst aan termen en hun beschrijving, bijvoorbeeld een woordenlijst.',
  dialog:
    'Toont een venster over de pagina om de aandacht op een enkele taak of bericht te vestigen. Interactie met onderliggende pagina blijft mogelijk.',
  drawer:
    'Een paneel aan de zijkant van een scherm, die geopend kan worden voor gerelateerde informatie, formulieren of acties.',
  fieldset: 'Groep van gerelateerde formuliervelden.',
  figure: 'Zelfstandige inhoud, zoals een afbeelding, met mogelijk een verklarende tekst.',
  file: 'Toont meta-informatie over een bestand en biedt één of meer acties, zoals bekijken, downloaden of verwijderen.',
  'file-input': 'Knop om één of meerdere bestanden te kiezen en te uploaden.',
  'form-field': 'Een invoerveld en bijbehorende onderdelen die helpen bij het invullen.',
  'form-field-description':
    'Extra tekst bij een invoerveld die helpt bij het invullen van een formulier door een beschrijving, instructies of suggesties.',
  'form-field-error-message': 'Foutmelding bij een invoerveld die informeert wat de fout is en wat de oplossing is.',
  'form-field-label':
    'Tekst bij een invoerveld die vraagt om bepaalde informatie, of een korte omschrijving van een optie om te kiezen.',
  'form-field-suffix': 'Toont een tekstlabel dat aangeeft dat de in te vullen informatie wel of niet verplicht is.',
  'form-field-status':
    'Statusmelding bij een onderdeel van een formulier die feedback geeft over wat er goed of fout gaat, eventueel met een actie.',
  'form-navigation':
    'Overzicht van stappen in een formulier, met de mogelijkheid om direct naar beschikbare stappen te navigeren.',
  grid: 'Verdeelt content in rijen en kolommen voor een consistente en overzichtelijke layout.',
  heading: 'Koptekst die in de koppenstructuur ingesteld kan worden op het juiste niveau.',
  'heading-group': 'Combinatie van een koptekst en ondersteunende tekst.',
  icon: 'Grafisch symbool dat visueel informatie geeft over een actie, onderwerp of status.',
  image: 'Toont een afbeelding',
  'input-group': 'Formulierveld waarmee je een waarde kunt bewerken in een groep van meerdere invoervelden.',
  'language-navigation': 'Eén of meerdere links om de website te openen in een andere taal.',
  link: 'Een verwijzing om een externe bron of bestand te openen of te navigeren binnen dezelfde pagina of website.',
  'link-list': 'Een lijst met gerelateerde links naar andere pagina’s of websites.',
  'login-link': 'Biedt de mogelijkheid om naar de beschikbare inlogmiddelen te navigeren.',
  logo: 'Afbeelding met het beeldmerk of woordmerk van een organisatie.',
  mark: 'Markeert tekst, zodat je ernaar kan verwijzen vanuit een andere context of omdat de tekst relevant is voor de huidige activiteit.',
  'modal-dialog':
    'Toont een venster over de pagina om de aandacht op een enkele taak of bericht te vestigen. Interactie met onderliggende pagina wordt geblokkeerd.',
  'navigation-bar':
    'Toont een hiërarchische horizontale navigatie aan de bovenkant van een pagina en biedt de mogelijkheid om tussen pagina’s te navigeren.',
  note: 'Visueel ondersteunend element dat de aandacht vestigt op aanvullende of belangrijke informatie.',
  'notification-banner': 'Toont een informerend bericht dat niet direct is gerelateerd aan de inhoud van een pagina.',
  'number-badge': 'Toont een klein label dat de aandacht trekt en informeert over een aantal.',
  'number-input': 'Invoerveld voor een heel getal of een getal met decimalen.',
  'ordered-list': 'Lijst waarvan de volgorde van items betekenis heeft.',
  'page-body': 'De hoofdinhoud en eventuele aanvullende informatie.',
  'page-footer':
    'Consistente plek onderaan elke pagina, vaak met links, juridische informatie en opties om hulp te krijgen of contact op te nemen.',
  'page-header': 'Consistente plek bovenaan elke pagina, vaak met een logo, navigatie en zoekfunctie.',
  'page-layout':
    'Indeling voor de inhoud van de pagina en consistent aanwezige onderdelen, zoals de Page Header, navigatie en Page Footer.',
  'page-number-navigation':
    "Navigatie naar andere pagina's wanneer een grote hoeveelheid informatie is verdeeld over genummerde pagina's.",
  paragraph: 'Toont een alinea aan tekst.',
  'password-input': 'Afgeschermd invoerveld om een geheime tekst in te vullen, zoals een wachtwoord.',
  'progress-bar': 'Toont de voortgang van een proces in een balk.',
  'progress-circle': 'Toont de voortgang van een bepaald proces in de vorm van een cirkel.',
  'progress-list': 'Toont de voortgang van een reeks stappen en biedt indien nodig extra details over een stap.',
  'pull-quote': 'Illustratie met een citaat uit de hoofdtekst.',
  'radio-button': 'Invoerveld voor het kiezen van een enkele optie uit een groep van opties.',
  'radio-group': 'Biedt de mogelijkheid om één optie te selecteren uit een lijst.',
  range: 'Invoerveld voor een getal dat je bij benadering kunt kiezen door te schuiven tussen een minimum en maximum.',
  'rich-text-content': 'Tekst met uitgebreide opmaakopties zoals links, koppen, lijsten en tabellen.',
  root: 'Onderlaag waarin basiskeuzes worden gemaakt voor alle componenten die in de website zitten.',
  select: 'Biedt de mogelijkheid om één optie te selecteren uit een opgeklapte lijst.',
  'select-combobox':
    'Biedt de mogelijkheid om één optie te selecteren, waarbij de getoonde opties kunnen worden gefilterd door tekst in een invoerveld in te voeren.',
  separator:
    'Markering van de plek waar de tekst op een nieuwe manier verdergaat, zoals een nieuwe scène of een ander onderwerp.',
  'side-navigation': "Verticale navigatie die de mogelijkheid biedt om tussen pagina's te navigeren.",
  'skip-link':
    'Verborgen mogelijkheid om snel naar een ander deel van de pagina te navigeren zonder gebruik te maken van een muis of touchscreen.',
  spinner:
    'Een animatie die aangeeft dat een proces nog bezig is, waardoor een deel van de pagina nog niet volledig is geladen of buttons niet bedienbaar zijn.',
  'status-badge': 'Label dat informeert over een status en de aandacht trekt met een signaalkleur.',
  strong: 'Korte belangrijke tekst die vetgedrukt wordt weergegeven.',
  subscript: 'Toont tekst met een kleiner lettertype met een verlaagde letterlijn.',
  superscript: 'Toont tekst met een kleiner lettertype met een verhoogde letterlijn.',
  switch: 'Invoerveld om een optie aan of uit te zetten, waarbij de actie direct wordt doorgevoerd.',
  table: 'Structureert data in rijen en kolommen.',
  tabs: 'Paneel om onderwerpen te groeperen, waarbij er maar één per keer zichtbaar is, met buttons om te kiezen welk onderwerp wordt weergegeven.',
  'task-list': 'Lijst met taken die zijn gemarkeerd als voltooid of onvoltooid.',
  'task-navigation':
    'Overzicht van één of meerdere taken die aandacht nodig hebben, met een link om de taak uit te voeren.',
  'text-area': 'Invoerveld voor het bewerken van meerdere regels tekst.',
  'text-input': 'Invoerveld voor het bewerken van één regel tekst.',
  toggletip:
    'Een knop die tijdelijke informatie toont en deze automatisch verbergt wanneer iets anders dan de knop wordt gebruikt.',
  'unordered-list': 'Opsomming waar de volgorde van items in de lijst niet van belang is.',
  video: 'Video met bedieningselementen voor afspelen, pauzeren, tekstalternatieven, en meer.',
  'youtube-video': 'YouTube-video met de bedieningselementen die YouTube zelf biedt.',
};

const components: ComponentData[] = componentsInput.items
  .map((comp: ComponentInput) => ({
    ...comp,
    id: comp.id,
    heading: comp?.content?.title ?? '',
    storybookLabel: `Bekijk de ${comp?.content?.title ?? ''} component in Storybook`,
    description: descriptions[slugify(comp?.content?.title ?? '')] ?? '',
    href: `https://rijkshuisstijl-community.nl/${slugify(comp?.content?.title ?? '')}`,
    storybookURL: `https://rijkshuisstijl-community.vercel.app/?path=/docs/rhc-${slugify(comp?.content?.title ?? '')}--docs`,
    figmaURL: comp['figma URL'],
    figmaEmbedURL: (comp['figma URL'] && getFigmaEmbedUrl(comp['figma URL'])) || undefined,
    slug: slugify(comp.content?.title || ''),
    linkLabel: 'Bekijk in Storybook',
    frameworks: [
      ...(knownFrameworks.some((fw) => comp[fw] === 'Available') ? ['CSS'] : []),
      ...knownFrameworks.filter((fw) => comp[fw] === 'Available').map((fw) => readableFrameworkNames[fw] || fw),
      ...(comp['figma URL'] ? ['Figma'] : []),
    ],
    nlStatus: comp['nL Status'],
    nldesignsystemURL: comp['nL Status']
      ? `https://nldesignsystem.nl/${slugify(comp?.content?.title ?? '')}`
      : undefined,
    oorsprong: (comp.oorsprong ?? '').split(', '),
  }))
  .sort((a, b) => a.heading.localeCompare(b.heading));

export default components;
