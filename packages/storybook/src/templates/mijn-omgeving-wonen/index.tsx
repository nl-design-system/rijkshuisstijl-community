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
    heading: 'Berichten over uw Buurt',
    content: (
      <>
        <Paragraph>Bron: Officiële Bekendmakingen</Paragraph>
        <Paragraph>
          U vindt hier berichten over vergunningen in uw buurt, zoals evenementen en bouwplannen. Ook vindt u de
          bekendmakingen van nieuwe regelgeving.
        </Paragraph>
      </>
    ),
    href: '#',
    linkLabel: 'Berichten over uw Buurt',
  },
  {
    heading: 'Kadastrale gegevens',
    content: (
      <>
        <Paragraph>Bron: Basisregistratie Kadaster</Paragraph>
        <Paragraph>
          Het Kadaster registreert gegevens over het vastgoed in Nederland. U kunt bij het Kadaster informatie opvragen
          over de ligging van vastgoed, maar ook aanverwante zaken zoals eigendom en hypotheek en de ligging van kabels
          en leidingen.
        </Paragraph>
      </>
    ),
    href: '#',
    linkLabel: 'Bekijk kadastrale gegevens',
  },
  {
    heading: 'Energielabel',
    content: (
      <>
        <Paragraph>Bron: EP-Online.nl</Paragraph>
        <Paragraph>Bekijk informatie over het energielabel van uw huurwoning, koopwoning of gebouw.</Paragraph>
      </>
    ),
    href: '#',
    linkLabel: 'Bekijk energielabel',
  },
  {
    heading: 'WOZ-gegevens',
    content: (
      <>
        <Paragraph>Bron: Gemeenten</Paragraph>
        <Paragraph>
          Gemeenten bieden inzicht in de waardering van uw onroerende zaken. U kunt een overzicht zien van uw onroerende
          zaak, de actuele WOZ-waarde, enkele algemene waarderingsgegevens en taxatieverslagen. U treft hier ook de
          adres- en gebouwgegevens van uw woning uit de Basisregistratie Adressen en Gebouwen (BAG) aan.
        </Paragraph>
      </>
    ),
    href: '#',
    linkLabel: 'Bekijk WOZ-gegevens',
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
            <Heading level={1}>Wonen</Heading>
            <div className="rhc-card-as-link-group" {...useCards({ items: cards, headingLevel: 2 })} />
          </section>
        </SharedMainPageContent>
      </PageBody>
      <SharedFooter isLightTheme={true} />
    </>
  );
}
