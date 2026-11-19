import {
  Heading,
  LinkList,
  LinkListLink,
  NavBarMegaMenuSeparator,
  NavBarMegaMenuTagline,
} from '@rijkshuisstijl-community/components-react';

const megamenuColumns = [
  {
    id: 'col-1',
    heading: 'Diensten van de overheid',
    items: [
      { id: 'mm-1', label: 'Dienstenoverzicht', href: '/' },
      { id: 'mm-2', label: 'Berichten over uw buurt', href: '/' },
      { id: 'mm-3', label: 'Gegevens bij besluiten', href: '/' },
      { id: 'mm-4', label: 'Internetconsultatie', href: '/' },
      { id: 'mm-5', label: 'Levensgebeurtenissen', href: '/' },
    ],
  },
  {
    id: 'col-2',
    heading: 'Beleid en regelgeving',
    items: [
      { id: 'mm-6', label: 'Overzicht', href: '/' },
      { id: 'mm-7', label: 'Wetten', href: '/' },
      { id: 'mm-8', label: 'Verdragen', href: '/' },
      { id: 'mm-9', label: 'Lokale regelgeving', href: '/' },
    ],
  },
  {
    id: 'col-3',
    heading: 'Transparantie',
    items: [
      { id: 'mm-10', label: 'Standaarden', href: '/' },
      { id: 'mm-11', label: 'Open Data', href: '/' },
      { id: 'mm-12', label: 'Linked data', href: '/' },
    ],
  },
];

export default (
  <>
    <NavBarMegaMenuTagline>Ingang naar informatie en diensten van alle overheden</NavBarMegaMenuTagline>
    <NavBarMegaMenuSeparator />
    <div className="rhc-grid">
      {megamenuColumns.map(({ id, heading, items }) => (
        <div className="rhc-grid__cell rhc-grid__cell-d-3" key={id}>
          <Heading appearanceLevel={5} className="overheid-nl-header__column-heading" level={3}>
            {heading}
          </Heading>
          <LinkList className="overheid-nl-header__link-list">
            {items.map((item) => (
              <LinkListLink className="overheid-nl-header__column-link" href={item.href} key={item.id}>
                {item.label}
              </LinkListLink>
            ))}
          </LinkList>
        </div>
      ))}
    </div>
  </>
);
