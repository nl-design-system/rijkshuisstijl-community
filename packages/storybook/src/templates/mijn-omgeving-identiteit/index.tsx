'use client'; // TODO: move to lower level at which it is actually needed, instead of wrapping the whole file
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
    heading: 'Persoonsgegevens',
    content: (
      <>
        <Paragraph>Bron: Basisregistratie Personen (BRP) en Basisregister Reisdocumenten</Paragraph>
        <Paragraph>
          In de Basisregistratie Personen (BRP) zijn persoonsgegevens geregistreerd, zoals gegevens over geboorte,
          verhuizing, huwelijk en vertrek naar het buitenland. In het Basisregister Reisdocumenten staan gegevens over
          aan u verstrekte reisdocumenten geregistreerd.
        </Paragraph>
      </>
    ),
    href: '#',
    linkLabel: 'Bekijk gedeelde persoonsgegevens',
  },
  {
    heading: 'Gedeelde persoonsgegevens',
    content: (
      <>
        <Paragraph>Bron: Basisregistratie Personen (BRP)</Paragraph>
        <Paragraph>
          Een deel van uw gegevens wordt automatisch gedeeld met andere overheden en publieke organisaties.
        </Paragraph>
      </>
    ),
    href: '#',
    linkLabel: 'Bekijk gedeelde persoonsgegevens',
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
            <Heading level={1}>Identiteit</Heading>
            <div className="rhc-card-as-link-group" {...useCards({ items: cards, headingLevel: 2 })} />
          </section>
        </SharedMainPageContent>
      </PageBody>
      <SharedFooter isLightTheme={true} />
    </>
  );
}
