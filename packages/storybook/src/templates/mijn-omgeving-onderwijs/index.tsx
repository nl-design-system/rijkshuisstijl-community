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
    heading: 'Diplomagegevens',
    content: (
      <>
        <Paragraph>{"Bron: Mijn diploma's DUO"}</Paragraph>
        <Paragraph>{"U kunt op deze pagina diplomagegevens bekijken die in Mijn diploma's van DUO staan."}</Paragraph>
      </>
    ),
    href: '#',
    linkLabel: 'Bekijk diplomagegevens',
  },
  {
    heading: 'Mijn DUO',
    content: (
      <Paragraph>
        Studenten, ouders en terugbetalers kunnen in Mijn DUO terecht voor financiering aanvragen en wijzigingen
        doorgeven. U kunt via Mijn DUO ook uw diplomagegevens downloaden.
      </Paragraph>
    ),
    href: '#',
    linkLabel: 'Ga naar Mijn DUO',
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
            <Heading level={1}>Onderwijs</Heading>
            <div className="rhc-card-as-link-group" {...useCards({ items: cards, headingLevel: 2 })} />
          </section>
        </SharedMainPageContent>
      </PageBody>
      <SharedFooter isLightTheme={true} />
    </>
  );
}
