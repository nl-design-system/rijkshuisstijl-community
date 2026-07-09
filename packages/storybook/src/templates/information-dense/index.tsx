'use client';

import {
  Button,
  Fieldset,
  FieldsetLegend,
  FormFieldCheckboxGroup,
  FormFieldCheckboxOption,
  FormFieldSelect,
  FormFieldTextInput,
  Heading,
  Icon,
  Link,
  Logo,
  NavBar,
  type NavBarItemProps,
  PageBody,
  PageHeader,
  PageNumberNavigation,
  Paragraph,
  RoundedCorner,
  Separator,
  SkipLink,
  VisuallyHidden,
} from '@rijkshuisstijl-community/components-react';
import { Drawer } from '@rijkshuisstijl-community/drawer-react';
import { useState } from 'react';
import { Main } from '../shared/Main';
import SharedRijkshuisstijlDisclaimer from '../shared/rijkshuisstijl-disclaimer';
import './index.css';

// Information Dense voorbeeldpagina (#2652). Component-gaten staan als GAP gemarkeerd.

interface Option {
  value: string;
  label: string;
}

const ikBenOpties: Option[] = [
  { value: 'financier', label: 'Financier' },
  { value: 'grootbedrijf', label: 'Grootbedrijf' },
  { value: 'land-tuinbouw', label: 'Land- en tuinbouw / Natuur / Visserij' },
  { value: 'mkb', label: 'MKB (ook ZZP)' },
  { value: 'overheid', label: 'Overheid' },
  { value: 'onderzoek', label: 'Onderzoeksinstelling' },
];

const ikZoekGeldOpties: Option[] = [
  { value: 'compensatie', label: 'Compensatie zoals energiekosten en TVL' },
  { value: 'duurzaam', label: 'Duurzaam en circulair ondernemen' },
  { value: 'energie-besparen', label: 'Energie besparen' },
  { value: 'energie-produceren', label: 'Energie produceren' },
  { value: 'innovatie', label: 'Innovatie en onderzoek' },
  { value: 'export', label: 'Export en internationaal ondernemen' },
];

const actieveFilters: { id: string; prefix: string; value: string }[] = [
  { id: 'zoekterm', prefix: 'Zoekterm', value: 'WBSO' },
  { id: 'sector', prefix: 'Sector', value: 'Biotechnologie' },
  { id: 'status', prefix: 'Status', value: 'Open voor aanvragen' },
];

const resultaten: { label: string; body: string }[] = [
  {
    label: 'Partners for International Business',
    body: 'Programma waarmee Nederlandse bedrijven in een publiek-private samenwerking hun internationale ambities kunnen realiseren.',
  },
  {
    label: 'Borgstelling MKB-kredieten (BMKB)',
    body: 'Met de BMKB staat de overheid borg voor een deel van uw lening, zodat u makkelijker geld kunt lenen bij uw financier.',
  },
  {
    label: 'Eurostars: subsidie internationale marktgerichte R&D',
    body: 'Subsidie voor het MKB dat samen met internationale partners marktgericht onderzoek en ontwikkeling uitvoert.',
  },
  {
    label: 'Eureka: programma internationale marktgerichte R&D',
    body: 'Werk internationaal samen aan innovatieve producten, processen of diensten met een marktgerichte aanpak.',
  },
  {
    label: 'Groeifaciliteit',
    body: 'De Groeifaciliteit helpt bedrijven bij het aantrekken van risicodragend vermogen via een garantie op achtergestelde leningen.',
  },
  {
    label: 'Partners for International Business',
    body: 'Programma waarmee Nederlandse bedrijven in een publiek-private samenwerking hun internationale ambities kunnen realiseren.',
  },
  {
    label: 'Partners for International Business',
    body: 'Programma waarmee Nederlandse bedrijven in een publiek-private samenwerking hun internationale ambities kunnen realiseren.',
  },
];

const toggleOption = (current: string[], option: string): string[] =>
  current.includes(option) ? current.filter((value) => value !== option) : [...current, option];

interface FilterGroupProps {
  legend: string;
  options: Option[];
  selected: string[];
  onToggle: (_value: string) => void;
  maxVisible?: number;
}

const FilterGroup = ({ legend, options, selected, onToggle, maxVisible = 4 }: FilterGroupProps) => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? options : options.slice(0, maxVisible);
  const hasMore = options.length > maxVisible;

  return (
    <Fieldset>
      <FieldsetLegend>{legend}</FieldsetLegend>
      <FormFieldCheckboxGroup>
        {visible.map((option) => (
          <FormFieldCheckboxOption
            checked={selected.includes(option.value)}
            key={option.value}
            label={option.label}
            onChange={() => onToggle(option.value)}
          />
        ))}
      </FormFieldCheckboxGroup>
      {hasMore && (
        // GAP: ExpandableCheckboxGroup rendert een details/summary met teller '(n)'.
        <Button
          className="rhc-info-dense__toon-meer"
          iconEnd={<Icon icon="plus" />}
          label={expanded ? 'Toon minder' : 'Toon meer'}
          purpose="subtle"
          onClick={() => setExpanded((value) => !value)}
        />
      )}
    </Fieldset>
  );
};

export default function InformationDense() {
  const [ikBen, setIkBen] = useState<string[]>(['financier']);
  const [ikZoek, setIkZoek] = useState<string[]>(['duurzaam']);

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: NavBarItemProps[] = [
    { id: 'onderwerpen', href: '#', label: 'Onderwerpen' },
    { id: 'subsidies', href: '#', label: 'Subsidies en financiering' },
    { id: 'over-ons', href: '#', label: 'Over ons' },
    { id: 'contact', href: '#', label: 'Contact' },
  ];

  const navEndItems: NavBarItemProps[] = [
    { id: 'mijn-rvo', href: '#', icon: <Icon icon="pijl-naar-rechtsboven" />, label: 'Mijn RVO' },
    // GAP: NavBar kent alleen link-items, geen zoekknop.
    { id: 'zoeken', href: '#', icon: <Icon icon="zoek" />, label: 'Zoeken' },
  ];

  return (
    <>
      <PageHeader className="rhc-info-dense-page">
        <SkipLink className="rhc-skip-link--visible-on-focus" href="#main" id="top">
          Ga naar hoofdinhoud
        </SkipLink>
        <Logo organisation="Rijksoverheid">
          <Icon icon="nederland-map" />
        </Logo>
        <SharedRijkshuisstijlDisclaimer />
        <NavBar
          endItems={navEndItems}
          items={navItems}
          headingItem={{
            id: 'home',
            href: '#',
            icon: <Icon icon="home" />,
            iconOnly: true,
            label: 'Home',
          }}
        />
        {/* GAP: NavBar heeft geen mobiele modus; hier gemimickt (Zoeken + Menu) voor smalle schermen. */}
        <div className="rhc-info-dense__mobile-nav">
          <Link className="rhc-info-dense__mobile-nav-link" href="#">
            <Icon icon="zoek" />
            Zoeken
          </Link>
          <button
            aria-haspopup="dialog"
            className="rhc-info-dense__mobile-nav-link rhc-info-dense__mobile-nav-toggle"
            type="button"
            onClick={() => setMenuOpen(true)}
          >
            Menu
            <Icon icon="menu" />
          </button>
        </div>
        {/* Mobiel menu als modaal Drawer-component, vanaf rechts met afgeronde onderhoeken (Figma 9141-31074). */}
        <Drawer
          modal
          align="inline-end"
          className="rhc-info-dense__drawer rhc-rounded-corner rhc-rounded-corner--size-md rhc-rounded-corner--position-end-start"
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
        >
          <header className="utrecht-drawer__header">
            <Link aria-label="Home" className="rhc-info-dense__drawer-home" href="#">
              <Icon icon="home" />
            </Link>
            {/* Sluiten via de state; onClose vangt daarnaast Esc / backdrop-sluiten af. */}
            <button
              className="rhc-info-dense__mobile-nav-link rhc-info-dense__drawer-close"
              type="button"
              onClick={() => setMenuOpen(false)}
            >
              Sluiten
              <Icon icon="kruis" />
            </button>
          </header>
          <div aria-label="Menu" className="utrecht-drawer__body" role="group">
            <ul className="rhc-info-dense__drawer-nav">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link aria-current={item.id === 'subsidies' ? 'page' : undefined} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
              {navEndItems.map((item) => (
                <li className="rhc-info-dense__drawer-nav-end" key={item.id}>
                  <Link href={item.href}>
                    {item.icon}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Drawer>
      </PageHeader>
      <PageBody className="rhc-info-dense-page">
        <Main>
          <div className="rhc-info-dense">
            <div className="rhc-info-dense__grid">
              <RoundedCorner as="aside" className="rhc-info-dense__filters" position="start-end">
                <div className="rhc-info-dense__filters-inner">
                  <div className="rhc-info-dense__filters-header">
                    <Heading appearanceLevel={4} level={2}>
                      Filters
                    </Heading>
                    <Button
                      className="rhc-info-dense__reset"
                      iconEnd={<Icon icon="verwijderen" />}
                      label="Reset filters"
                      purpose="subtle"
                    />
                  </div>

                  {/* GAP (#2775): icoon in de input vraagt om Utrecht customizable-text-input (start/end-slot); nog geen React-wrapper in RHC. */}
                  <FormFieldTextInput label="Zoek subsidies en financiering" type="search" />
                  <Separator />

                  <FilterGroup
                    legend="Ik ben/werk bij"
                    options={ikBenOpties}
                    selected={ikBen}
                    onToggle={(value) => setIkBen((current) => toggleOption(current, value))}
                  />
                  <Separator />
                  <FilterGroup
                    legend="Ik zoek geld voor"
                    options={ikZoekGeldOpties}
                    selected={ikZoek}
                    onToggle={(value) => setIkZoek((current) => toggleOption(current, value))}
                  />
                </div>
              </RoundedCorner>

              <div className="rhc-info-dense__main">
                <div className="rhc-info-dense__intro">
                  <Heading appearanceLevel={2} level={1}>
                    Subsidie- en financieringswijzer
                  </Heading>
                  <Paragraph>
                    Onze subsidie- en financieringswijzer helpt u financiële ondersteuning voor uw plannen te vinden.
                    Geef aan wie u bent en wat u zoekt, en u krijgt een overzicht met regelingen op maat.
                  </Paragraph>
                  <Link href="#lees-meer">Lees meer over deze tool</Link>
                </div>

                <section aria-labelledby="actieve-filters-heading" className="rhc-info-dense__section">
                  <Heading appearanceLevel={4} id="actieve-filters-heading" level={2}>
                    Actieve filters
                  </Heading>
                  <ul className="rhc-info-dense__tags">
                    {actieveFilters.map((filter) => (
                      <li key={filter.id}>
                        {/* GAP: dismissible Tag ontbreekt (#2651); hier gemimickt met een knop. */}
                        <button className="rhc-info-dense__tag" type="button">
                          <span>
                            {filter.prefix} <strong>{filter.value}</strong>
                          </span>
                          <Icon icon="kruis" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </section>

                <section aria-labelledby="zoekresultaten-heading" className="rhc-info-dense__section">
                  <VisuallyHidden>
                    <Heading appearanceLevel={4} id="zoekresultaten-heading" level={2}>
                      Zoekresultaten
                    </Heading>
                  </VisuallyHidden>
                  <div className="rhc-info-dense__results-header">
                    {/* Telling als status-melding (WCAG 4.1.3). */}
                    <Paragraph role="status">166 zoekresultaten</Paragraph>
                    <div className="rhc-info-dense__sort">
                      <FormFieldSelect
                        label="Sorteren op"
                        options={['Meest relevant', 'Nieuwste eerst', 'Naam A tot Z', 'Naam Z tot A']}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* GAP: een result-list met titel-link + omschrijving bestaat niet als component. */}
                  <ol className="rhc-info-dense__results">
                    {resultaten.map((resultaat, index) => (
                      <li className="rhc-info-dense__result" key={index}>
                        <Link className="rhc-info-dense__result-link" href="#">
                          <Icon icon="chevron-right" />
                          {resultaat.label}
                        </Link>
                        <Paragraph className="rhc-info-dense__result-body">{resultaat.body}</Paragraph>
                      </li>
                    ))}
                  </ol>

                  <Separator />

                  <PageNumberNavigation
                    linkTemplate={(page: number) => `#pagina-${page}`}
                    maxVisiblePages={5}
                    nextLabel="Volgende"
                    page={1}
                    previousLabel="Vorige"
                    totalPages={30}
                  />
                </section>
              </div>
            </div>
          </div>
        </Main>
      </PageBody>
    </>
  );
}
