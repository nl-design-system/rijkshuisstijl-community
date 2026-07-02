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

// Information Dense voorbeeldpagina (#2652). Puur uit RHC-componenten samengesteld; gaten t.o.v. Figma staan in de PR.

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
      {/* GAP: PageHeader heeft geen separator-variant; navbar-onderlijn uit Figma weggelaten. */}
      <PageBody>
        <Main>
          <SharedMainPageContent>
            {/* Enige h1, boven de kolommen zodat de koppen-hierarchie klopt. */}
            <Heading level={1}>Subsidie- en financieringswijzer</Heading>
            <Paragraph>
              Onze subsidie- en financieringswijzer helpt u financiële ondersteuning voor uw plannen te vinden. Geef aan
              wie u bent en wat u zoekt, en u krijgt een overzicht met regelingen op maat.
            </Paragraph>
            <Link href="#lees-meer">Lees meer over deze tool</Link>

            {/* GAP: ColumnLayout geeft gelijke kolommen i.p.v. de smalle filter- / brede resultaten-verhouding. */}
            <ColumnLayout>
              {/* GAP: geen tint-surface-container-component voor de primary-tint paneelachtergrond. */}
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
                {/* GAP: verwijderbare filter-Tags ontbreken; DataBadgeButton is de naaste (toggle, geen dismiss). Zie #2651. */}
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

                <Heading level={2}>Zoekresultaten</Heading>
                {/* GAP: telling + sorteer-Select op één regel mist een inline-layout-component (telling hoort in aria-live, WCAG 4.1.3). */}
                <Paragraph>166 zoekresultaten</Paragraph>
                <FormFieldSelect
                  label="Sorteren op"
                  options={['Meest relevant', 'Nieuwste eerst', 'Naam A tot Z', 'Naam Z tot A']}
                />

                <Separator />
                {/* GAP: accordeon-rij met titel als link bestaat niet; AccordionProvider doet knoptekst. */}
                <AccordionProvider headingLevel={3} sections={subsidies} />
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
