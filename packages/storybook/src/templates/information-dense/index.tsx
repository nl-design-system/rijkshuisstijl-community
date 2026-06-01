'use client';

import {
  AccordionProvider,
  Button,
  ColumnLayout,
  DataBadgeButton,
  ExpandableCheckboxGroup,
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
} from '@rijkshuisstijl-community/components-react';
import { useState } from 'react';
import { Main } from '../shared/Main';
import SharedMainPageContent from '../shared/main-page-content';

/**
 * Voorbeeldpagina "RVO Subsidie- en financieringswijzer" (Information Dense, issue #2652).
 *
 * Doel: aantonen welke componenten samen een gefilterde zoekresultatenpagina vormen
 * en waar de gaten in de bibliotheek zitten t.o.v. het Norday Figma-ontwerp.
 * Bewust GEEN eigen CSS/HTML-styling: puur samengesteld uit bestaande RHC-componenten.
 * De visuele verschillen met Figma zijn de gaten.
 *
 * Bekende gaten t.o.v. Figma (zie PR-omschrijving):
 * - Filterpaneel: geen primary-tint achtergrond-variant; `ColumnLayout` geeft gelijke
 *   kolommen i.p.v. de smalle filter / brede resultaten verhouding.
 * - Actieve filters zijn "Tags": dichtstbijzijnde component is `DataBadgeButton` (geen
 *   eigen verwijderbare-tag/chip-component).
 * - Resultaattelling + sorteer-Select op één regel: geen layout-component zonder CSS.
 * - SubsidieItem: een accordeon-rij met de titel als link bestaat niet; `AccordionProvider`
 *   rendert de titel als knoptekst, niet als link.
 */

const ikBenOpties = [
  { value: 'financier', label: 'Financier' },
  { value: 'grootbedrijf', label: 'Grootbedrijf' },
  { value: 'land-tuinbouw', label: 'Land- en tuinbouw / Natuur / Visserij' },
  { value: 'mkb', label: 'MKB (ook ZZP)' },
  { value: 'overheid', label: 'Overheid' },
  { value: 'onderzoek', label: 'Onderzoeksinstelling' },
];

const ikZoekGeldOpties = [
  { value: 'compensatie', label: 'Compensatie zoals energiekosten en TVL' },
  { value: 'duurzaam', label: 'Duurzaam en circulair ondernemen' },
  { value: 'energie-besparen', label: 'Energie besparen' },
  { value: 'energie-produceren', label: 'Energie produceren' },
  { value: 'innovatie', label: 'Innovatie en onderzoek' },
  { value: 'export', label: 'Export en internationaal ondernemen' },
];

const toggleOption = (current: string[], option: string): string[] =>
  current.includes(option) ? current.filter((value) => value !== option) : [...current, option];

const subsidies: { label: string; body: string }[] = [
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
];

export default function InformationDense() {
  const [ikBen, setIkBen] = useState<string[]>(['financier']);
  const [ikZoek, setIkZoek] = useState<string[]>(['duurzaam']);

  const navItems: NavBarItemProps[] = [
    { id: 'onderwerpen', href: '#', label: 'Onderwerpen' },
    { id: 'subsidies', href: '#', label: 'Subsidies en financiering' },
    { id: 'over-ons', href: '#', label: 'Over ons' },
    { id: 'contact', href: '#', label: 'Contact' },
  ];

  const navEndItems: NavBarItemProps[] = [
    {
      id: 'taal',
      href: '#',
      label: (
        <>
          <Icon icon="wereldbol" />
          Nederlands
        </>
      ),
    },
    {
      id: 'mijn-rvo',
      href: '#',
      label: (
        <>
          <Icon icon="pijl-naar-rechtsboven" />
          Mijn RVO
        </>
      ),
    },
    {
      id: 'zoeken',
      href: '#',
      label: (
        <>
          <Icon icon="zoek" />
          Zoeken
        </>
      ),
    },
  ];

  return (
    <>
      <PageHeader>
        <SkipLink className="rhc-skip-link--visible-on-focus" href="#main" id="top">
          Ga naar hoofdinhoud
        </SkipLink>
        <Logo organisation="Rijksdienst voor Ondernemend Nederland" subtitle="Ministerie van Economische Zaken" />
        <NavBar endItems={navEndItems} items={navItems} />
      </PageHeader>
      {/* GAP: PageHeader heeft geen onder-rand/separator-variant; de lijn onder de navbar uit Figma
          kan alleen met een los element dat buiten alle landmarks zou vallen, dus hier weggelaten. */}
      <PageBody>
        <Main>
          <SharedMainPageContent>
            {/* Paginatitel is de enige h1 en staat boven de twee-koloms layout zodat de
                koppen-hierarchie klopt (h1 -> h2 'Filters'/'Actieve filters' -> h3 accordeon). */}
            <Heading level={1}>Subsidie- en financieringswijzer</Heading>
            <Paragraph>
              Onze subsidie- en financieringswijzer helpt u financiële ondersteuning voor uw plannen te vinden. Geef aan
              wie u bent en wat u zoekt, en u krijgt een overzicht met regelingen op maat.
            </Paragraph>
            <Link href="#lees-meer">Lees meer over deze tool</Link>

            {/* GAP: deze pagina hoort de vaste "information-dense" type-scale te gebruiken, maar er is
                geen mechanisme om die scale per pagina te activeren; nu valt alles terug op de default
                (fluid) type-scale. */}
            {/* GAP: ColumnLayout geeft gelijke kolommen i.p.v. de smalle filter- / brede resultaten-verhouding. */}
            <ColumnLayout>
              {/* GAP: er is geen Mapped tint-surface-token voor de primary-tint paneelachtergrond
                  (een palette-token als cool-grey schakelt niet mee met dark mode). En RoundedCorner is
                  een hoek-utility, geen tint-container: het paneel mist een surface-container-component. */}
              <RoundedCorner position="start-end">
                <div>
                  <Heading level={2}>Filters</Heading>
                  <Button appearance="subtle-button">
                    <Icon icon="verwijderen" />
                    Reset filters
                  </Button>

                  <FormFieldTextInput label="Zoek subsidies en financiering" type="search" />
                  <Separator />

                  <ExpandableCheckboxGroup
                    expandText="Toon meer"
                    legend="Ik ben/werk bij"
                    maxVisible={4}
                    options={ikBenOpties}
                    selectedOptions={ikBen}
                    onOptionChange={(option) => setIkBen((current) => toggleOption(current, option))}
                  />
                  <Separator />
                  <ExpandableCheckboxGroup
                    expandText="Toon meer"
                    legend="Ik zoek geld voor"
                    maxVisible={4}
                    options={ikZoekGeldOpties}
                    selectedOptions={ikZoek}
                    onOptionChange={(option) => setIkZoek((current) => toggleOption(current, option))}
                  />
                </div>
              </RoundedCorner>

              <div>
                {/* GAP: verwijderbare filter-Tags ontbreken. DataBadgeButton is de dichtstbijzijnde, maar
                    is een <span role="button" aria-pressed> (toggle-semantiek, geen dismiss) zonder
                    keydown-handler (dus niet met toetsenbord te bedienen, WCAG 2.1.1), en het kruis-icoon
                    heeft geen tekstalternatief. Zie issue #2651. */}
                <Heading level={2}>Actieve filters</Heading>
                <DataBadgeButton icon={<Icon icon="kruis" />} iconAlign="end">
                  Zoekterm WBSO
                </DataBadgeButton>
                <DataBadgeButton icon={<Icon icon="kruis" />} iconAlign="end">
                  Sector Biotechnologie
                </DataBadgeButton>
                <DataBadgeButton icon={<Icon icon="kruis" />} iconAlign="end">
                  Status Open voor aanvragen
                </DataBadgeButton>

                {/* GAP: een live resultaattelling hoort in een aria-live-region (WCAG 4.1.3), en de telling
                    + sorteer-Select op één regel vereist een layout-/inline-component die ontbreekt. */}
                <Paragraph>166 zoekresultaten</Paragraph>
                <FormFieldSelect
                  label="Sorteren op"
                  options={['Meest relevant', 'Nieuwste eerst', 'Naam A tot Z', 'Naam Z tot A']}
                />

                <Separator />
                {/* GAP: SubsidieItem = accordeon-rij met titel als link; AccordionProvider rendert de titel als knoptekst. */}
                <AccordionProvider sections={subsidies} />
                <Separator />

                <PageNumberNavigation
                  linkTemplate={(page: number) => `#pagina-${page}`}
                  maxVisiblePages={5}
                  page={1}
                  totalPages={30}
                />
              </div>
            </ColumnLayout>
          </SharedMainPageContent>
        </Main>
      </PageBody>
    </>
  );
}
