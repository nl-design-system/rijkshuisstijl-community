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
    heading: 'Donorregister',
    content: (
      <>
        <Paragraph>Bron: Basisregistratie Personen (BRP) en Basisregister Reisdocumenten</Paragraph>
        <Paragraph>
          In het Donorregister kunt u vastleggen of u uw organen na uw overlijden wel of niet beschikbaar stelt voor
          transplantatie.
        </Paragraph>
      </>
    ),
    href: '#',
    linkLabel: 'Ga naar Donorregister',
    external: true,
  },
  {
    heading: 'Mijn PGB',
    content: (
      <Paragraph>
        Het Persoonsgebonden budget (PGB) is een budget, waarmee mensen met een beperking hun eigen zorg kunnen inkopen.
        Met Mijn PGB regelt u digitaal persoonlijke zaken met de SVB Dienstverlening PGB. Zo kunt u onder andere
        digitaal declareren, uw budgetoverzicht bekijken, documenten insturen en ziek- en herstelmeldingen doorgeven.
      </Paragraph>
    ),
    href: '#',
    linkLabel: 'Ga naar Mijn PGB',
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
            <Heading level={1}>Gezondheid</Heading>
            <div className="rhc-card-as-link-group" {...useCards({ items: cards, headingLevel: 2 })} />
          </section>
        </SharedMainPageContent>
      </PageBody>
      <SharedFooter isLightTheme={true} />
    </>
  );
}
