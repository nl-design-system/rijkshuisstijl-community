'use client';

import {
  Icon,
  LanguageNavigation,
  Logo,
  NavBar,
  NavBarIdentity,
  NavBarItem,
  NavBarMegaMenu,
  PageHeader,
  SkipLink,
} from '@rijkshuisstijl-community/components-react';

const languages = {
  nl: { href: '#', lang: 'nl', languageName: 'Nederlands' },
  en: { href: '#', lang: 'en', languageName: 'English' },
  de: { href: '#', lang: 'de', languageName: 'Deutsch' },
};

const endItemsPrimary = (
  <>
    <li>
      <LanguageNavigation defaultSelectedLanguage="Nederlands">
        <LanguageNavigation.Trigger />
        <LanguageNavigation.Content>
          {[languages.nl, languages.en, languages.de].map((language) => (
            <LanguageNavigation.Item key={language.lang} {...language} />
          ))}
        </LanguageNavigation.Content>
      </LanguageNavigation>
    </li>
    <NavBarItem href="/" id="end-second-link" label="Contact" />
  </>
);

const endItemsSecondary = [
  {
    className: 'rhc-nav-bar__item--button-on-mobile rhc-nav-bar__item--button-on-mobile--secondary',
    href: '/',
    id: 'end-first-link',
    label: 'Zoeken',
    icon: <Icon icon="zoek" />,
  },
  {
    className: 'rhc-nav-bar__item--button-on-mobile rhc-nav-bar__item--button-on-mobile--primary',
    href: '/',
    id: 'end-second-link',
    label: 'Inloggen',
    icon: <Icon icon="inloggen" />,
  },
].map((endItem) => <NavBarItem key={endItem.id} {...endItem} />);

const itemsMain = [
  {
    href: '/',
    id: 'data',
    label: 'Data',
  },
  {
    href: '/',
    id: 'impact',
    label: 'Impact',
  },
  {
    href: '/',
    currentPage: true,
    id: 'Voorbeeldpagina',
    label: 'Voorbeeldpagina',
  },
  {
    href: '/',
    id: 'Actueel',
    label: 'Actueel',
  },
  {
    href: '/',
    id: 'Support',
    label: 'Support',
  },
];

const megamenu = (
  <NavBarMegaMenu
    tagline="Ingang naar informatie en diensten van alle overheden"
    columns={[
      {
        id: 'col-1',
        heading: 'Diensten van de overheid',
        headingAppearanceLevel: 5,
        headingLevel: 3,
        items: [
          { id: 'mm-1', label: 'Dienstenoverzicht', href: '/' },
          { id: 'mm-2', label: 'Berichten over uw buurt', href: '/' },
          { id: 'mm-3', label: 'Gegevens bij besluiten', href: '/' },
          { id: 'mm-4', label: 'Internetconsultatie', href: '/' },
          { id: 'mm-5', label: 'Levensgebeurtenissen', href: '/' },
        ],
      },
      {
        id: 'col-2',
        heading: 'Beleid en regelgeving',
        headingAppearanceLevel: 5,
        headingLevel: 3,
        items: [
          { id: 'mm-6', label: 'Overzicht', href: '/' },
          { id: 'mm-7', label: 'Wetten', href: '/' },
          { id: 'mm-8', label: 'Verdragen', href: '/' },
          { id: 'mm-9', label: 'Lokale regelgeving', href: '/' },
        ],
      },
      {
        id: 'col-3',
        heading: 'Transparantie',
        headingAppearanceLevel: 5,
        headingLevel: 3,
        items: [
          { id: 'mm-10', label: 'Standaarden', href: '/' },
          { id: 'mm-11', label: 'Open Data', href: '/' },
          { id: 'mm-12', label: 'Linked data', href: '/' },
        ],
      },
    ]}
  />
);

export const SharedHeaderOverheidNl = () => (
  <PageHeader>
    <div className="rhc-page-section">
      <div className="rhc-page-section__content">
        <Logo organisation="Organisatie" subtitle="Wat wij doen">
          <Icon className="dutch-map" icon="nederland-map" />
        </Logo>
        <NavBar
          endItems={endItemsPrimary}
          megamenu={megamenu}
          identity={
            <NavBarIdentity primary href="/">
              Overheid.nl
            </NavBarIdentity>
          }
        />
        <NavBar
          endItems={endItemsSecondary}
          identity={<NavBarIdentity href="/">Dataregister</NavBarIdentity>}
          items={itemsMain}
        />
      </div>
    </div>
  </PageHeader>
);

export function SharedHeader() {
  const items = [
    {
      href: '/',
      label: 'Homepage',
    },
    {
      href: '/componenten/',
      label: 'Componenten',
    },
    {
      href: '/design-tokens/',
      label: 'Design Tokens',
    },
    {
      href: '/voorbeelden/',
      label: 'Voorbeelden',
    },
  ].map(({ ...props }) => ({
    ...props,
    id: props.href,
  }));

  const endItems = [
    {
      id: 'end1',
      target: '_blank',
      href: 'https://www.figma.com/design/Q5Imc7Xi9KnBQhcYI3Hytj/NL-Design-System---Bibliotheek---Rijkshuisstijl-Community',
      label: 'Figma',
    },
    {
      id: 'end2',
      target: '_blank',
      href: 'https://github.com/nl-design-system/rijkshuisstijl-community',
      label: 'GitHub',
    },
    { id: 'end3', target: '_blank', href: 'https://rijkshuisstijl-community.vercel.app/', label: 'Storybook' },
  ];

  return (
    <PageHeader>
      <SkipLink className="rhc-skip-link--visible-on-focus" href="#main" id="top">
        Ga naar hoofdinhoud
      </SkipLink>
      <div className="rhc-page-header-layout">
        <Logo organisation="Rijkshuisstijl Community">
          <Icon className={'dutch-map'} icon={'nederland-map'} />
        </Logo>
        <NavBar
          items={items}
          endItems={
            <>
              {endItems.map((item) => (
                <NavBarItem {...item} key={item.id} />
              ))}
            </>
          }
        />
      </div>
    </PageHeader>
  );
}

const Header = ({ overheidNl = false }: { overheidNl?: boolean }) =>
  overheidNl ? <SharedHeaderOverheidNl /> : <SharedHeader />;

export default Header;
