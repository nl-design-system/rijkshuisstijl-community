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
    heading: 'Mijn Eenmanszaak',
    content: (
      <Paragraph>
        Op Mijn Eenmanszaak van KVK kunt u alle gegevens van uw eenmanszaak inzien zoals deze ook in het Handelsregister
        te vinden zijn. Ook kunt u gegevens wijzigen of direct een gewaarmerkt uittreksel uit het Handelsregister
        aanvragen.
      </Paragraph>
    ),
    href: '#',
    linkLabel: 'Ga naar Mijn Eenmanszaak',
    external: true,
  },
  {
    heading: 'Mijn Digitaal Klantdossier',
    content: (
      <Paragraph>
        Het Digitaal Klantdossier voor Werk en Inkomen (DKD) geeft een overzicht van uw eigen gegevens die door
        gemeenten en UWV zijn vastgelegd. Het gaat hierbij om persoonsgegevens, arbeids- en uitkeringsgegevens en
        gegevens over opleiding en re-integratie.
      </Paragraph>
    ),
    href: '#',
    linkLabel: 'Ga naar Digitaal Klantdossier',
    external: true,
  },
  {
    heading: 'Mijn Pensioenoverzicht',
    content: (
      <Paragraph>
        Op mijnpensioenoverzicht.nl ziet u, naast uw AOW, hoeveel pensioen u hebt en bij welke pensioenuitvoerder
        (pensioenfonds of -verzekeraar). Ook ziet u wat uw nabestaanden krijgen als u overlijdt.
      </Paragraph>
    ),
    href: '#',
    linkLabel: 'Ga naar MijnPensioenoverzicht',
    external: true,
  },
  {
    heading: 'Mijn UWV',
    content: (
      <Paragraph>
        Op MijnUWV regelt u uw persoonlijke zaken met UWV. Daarnaast vindt u hier gegevens over uw werk en inkomen.
      </Paragraph>
    ),
    href: '#',
    linkLabel: 'Ga naar Mijn UWV',
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
            <Heading level={1}>Werk</Heading>
            <div className="rhc-card-as-link-group" {...useCards({ items: cards, headingLevel: 2 })} />
          </section>
        </SharedMainPageContent>
      </PageBody>
      <SharedFooter isLightTheme={true} />
    </>
  );
}
