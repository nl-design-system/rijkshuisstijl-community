'use client';
import { Heading, SideNav } from '@rijkshuisstijl-community/components-react';
import { Paragraph } from '@utrecht/component-library-react';
import { PageBody } from '@utrecht/page-body-react';
import { sideNav, useCards, useSideNav } from '../mijn-omgeving';
import SharedDisclaimer from '../shared/disclaimer';
import SharedFooter from '../shared/footer';
import SharedHeader from '../shared/header';
import SharedMainPageContent from '../shared/main-page-content';
import '../mijn-omgeving/index.css';

const cards = [
  {
    heading: 'Geregistreerd inkomen',
    content: (
      <>
        <Paragraph>Bron: Basisregistratie Inkomen</Paragraph>
        <Paragraph>
          De Belastingdienst registreert uw inkomen. Overheidsorganisaties gebruiken dit inkomen om bijvoorbeeld de
          hoogte van uw eigen bijdrage of toelage te berekenen.
        </Paragraph>
      </>
    ),
    href: '#',
    linkLabel: 'Bekijk inkomensgegevens',
  },
  {
    heading: 'Alimentatiegegevens',
    content: (
      <>
        <Paragraph>Bron: Landelijk Bureau Inning Onderhoudsbijdragen</Paragraph>
        <Paragraph>
          Het Landelijk Bureau Inning Onderhoudsbijdragen (LBIO) incasseert kinder- en partneralimentatie. Hier heeft u
          inzage in uw zaakgegevens.
        </Paragraph>
      </>
    ),
    href: '#',
    linkLabel: 'Bekijk alimentatiegegevens',
  },
  {
    heading: 'Mijn Toeslagen',
    content: (
      <Paragraph>
        Met Mijn toeslagen regelt u uw zorgtoeslag, huurtoeslag, kindgebonden budget en kinderopvangtoeslag. Zo kunt u
        er een toeslag aanvragen en uw gegevens wijzigen.
      </Paragraph>
    ),
    href: '#',
    linkLabel: 'Ga naar Mijn Toeslagen',
    external: true,
  },
  {
    heading: 'Mijn Belastingdienst',
    content: (
      <Paragraph>
        Met Mijn Belastingdienst regelt u uw belastingen. Zo kunt u er aangifte inkomstenbelasting doen en uw
        rekeningnummer wijzigen.
      </Paragraph>
    ),
    href: '#',
    linkLabel: 'Ga naar Mijn Belastingdienst',
    external: true,
  },
  {
    heading: 'Mijn SVB',
    content: (
      <Paragraph>
        Op Mijn SVB van de Sociale Verzekeringsbank kunt u Kinderbijslag, AOW en Anw aanvragen, een wijziging doorgeven
        of uw gegevens bekijken.
      </Paragraph>
    ),
    href: '#',
    linkLabel: 'Ga naar Mijn SVB',
    external: true,
  },
];

export default function MijnOmgeving() {
  return (
    <>
      <SharedHeader />
      <PageBody className="utrecht-page-body--rhc-mijn-omgeving">
        <SharedMainPageContent>
          <SharedDisclaimer />
          <SideNav className="rhc-side-nav" heading="Submenu" {...useSideNav({ items: sideNav })} />
          <section className={'rhc-page-main-content'}>
            <Heading level={1}>Financiën</Heading>
            <div className="rhc-card-as-link-group" {...useCards({ items: cards, headingLevel: 2 })} />
          </section>
        </SharedMainPageContent>
      </PageBody>
      <SharedFooter isLightTheme={true} />
    </>
  );
}
