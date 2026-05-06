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
    heading: 'Voertuiggegevens',
    content: (
      <>
        <Paragraph>Bron: Basisregistratie Voertuigen</Paragraph>
        <Paragraph>
          De RDW draagt bij aan een veilig, schoon, economisch en geordend wegverkeer. De RDW is onder meer
          verantwoordelijk voor voertuigkentekens en de Algemene Periodieke Keuring (APK). De RDW houdt het Basis
          Kenteken Register (BKR) bij.
        </Paragraph>
      </>
    ),
    href: '#',
    linkLabel: 'Bekijk voertuiggegevens',
  },
  {
    heading: 'Centraal Justitieel Incassobureau',
    content: (
      <Paragraph>
        Hebt u een boete ontvangen van het CJIB? Kijk dan in het Digitaal Loket. Hierin staan de gegevens en de
        eventuele foto van de overtreding. Kloppen de gegevens en wilt u de boete betalen? Dan kan dat via iDEAL. Wilt u
        in delen betalen? Dat kunt u dit zelf in het loket regelen.
      </Paragraph>
    ),
    href: '#',
    linkLabel: 'Ga naar Digitaal Loket CJIB',
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
            <Heading level={1}>Vervoer</Heading>
            <div className="rhc-card-as-link-group" {...useCards({ items: cards, headingLevel: 2 })} />
          </section>
        </SharedMainPageContent>
      </PageBody>
      <SharedFooter isLightTheme={true} />
    </>
  );
}
