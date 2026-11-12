'use client';

import {
  Heading,
  Icon,
  LanguageNavigation,
  LinkList,
  LinkListLink,
  Logo,
  NavBar,
  PageHeader,
  SkipLink,
} from '@rijkshuisstijl-community/components-react';
import './header-overheid-nl.css';

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
    <NavBar.Item href="/" id="end-second-link" label="Contact" />
  </>
);

const endItemsSecondary = [
  {
    className: 'overheid-nl-header__button-item overheid-nl-header__button-item--secondary',
    href: '/',
    id: 'end-first-link',
    label: 'Zoeken',
    icon: <Icon icon="zoek" />,
  },
  {
    className: 'overheid-nl-header__button-item overheid-nl-header__button-item--primary',
    href: '/',
    id: 'end-second-link',
    label: 'Inloggen',
    icon: <Icon icon="inloggen" />,
  },
].map((endItem) => <NavBar.Item key={endItem.id} {...endItem} />);

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

const megamenuColumns = [
  {
    id: 'col-1',
    heading: 'Diensten van de overheid',
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
    items: [
      { id: 'mm-10', label: 'Standaarden', href: '/' },
      { id: 'mm-11', label: 'Open Data', href: '/' },
      { id: 'mm-12', label: 'Linked data', href: '/' },
    ],
  },
];

const megamenu = (
  <>
    <NavBar.MegaMenu.Tagline>Ingang naar informatie en diensten van alle overheden</NavBar.MegaMenu.Tagline>
    <NavBar.MegaMenu.Separator />
    <div className="rhc-grid">
      {megamenuColumns.map(({ id, heading, items }) => (
        <div className="rhc-grid__cell rhc-grid__cell-d-3" key={id}>
          <Heading appearanceLevel={5} className="overheid-nl-header__column-heading" level={3}>
            {heading}
          </Heading>
          <LinkList className="overheid-nl-header__link-list">
            {items.map((item) => (
              <LinkListLink className="overheid-nl-header__column-link" href={item.href} key={item.id}>
                {item.label}
              </LinkListLink>
            ))}
          </LinkList>
        </div>
      ))}
    </div>
  </>
);

export const SharedHeaderOverheidNl = () => (
  <PageHeader className="overheid-nl-header">
    <div className="rhc-page-section">
      <div className="rhc-page-section__content">
        <Logo organisation="Organisatie" subtitle="Wat wij doen">
          <Icon className="dutch-map" icon="nederland-map" />
        </Logo>
        <NavBar aria-label="Overheid.nl">
          <NavBar.Start>
            <NavBar.Identity primary href="/">
              Overheid.nl
            </NavBar.Identity>
            <NavBar.MegaMenu>
              <NavBar.MegaMenu.Trigger target="onderwerpen">Kies een onderwerp of dienst</NavBar.MegaMenu.Trigger>
              <NavBar.MegaMenu.Panel id="onderwerpen">
                {megamenu}
                <NavBar.MegaMenu.Close target="onderwerpen" />
              </NavBar.MegaMenu.Panel>
            </NavBar.MegaMenu>
          </NavBar.Start>
          <NavBar.End>{endItemsPrimary}</NavBar.End>
        </NavBar>
        <NavBar aria-label="Dataregister">
          <NavBar.Start>
            <NavBar.Identity href="/">Dataregister</NavBar.Identity>
            {itemsMain.map((item) => (
              <NavBar.Item key={item.id} {...item} />
            ))}
          </NavBar.Start>
          <NavBar.End>{endItemsSecondary}</NavBar.End>
        </NavBar>
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
        <NavBar>
          <NavBar.Start>
            {items.map((item) => (
              <NavBar.Item {...item} key={item.id} />
            ))}
          </NavBar.Start>
          <NavBar.End>
            {endItems.map((item) => (
              <NavBar.Item {...item} key={item.id} />
            ))}
          </NavBar.End>
        </NavBar>
      </div>
    </PageHeader>
  );
}

const Header = ({ overheidNl = false }: { overheidNl?: boolean }) =>
  overheidNl ? <SharedHeaderOverheidNl /> : <SharedHeader />;

export default Header;
