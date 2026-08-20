import {
  Footer,
  Icon,
  Logo,
  NavBar,
  NavBarItem,
  NavBarMegaMenu,
  PageHeader,
} from '@rijkshuisstijl-community/components-react';
import { FooterFooterLinks, FooterLinks } from '../../components-css/footer.stories';
import '@rijkshuisstijl-community/section-css/dist/index.css';
import '@rijkshuisstijl-community/grid-css/dist/index.css';

const endItemsPrimary = [
  {
    href: '/',
    id: 'end-first-link',
    label: 'Taalswitch',
  },
  {
    href: '/',
    id: 'end-second-link',
    label: 'Contact',
    currentPage: true,
    icon: <Icon icon="inloggen" />,
  },
].map((endItem) => <NavBarItem key={endItem.id} {...endItem} />);

const endItemsSecondary = [
  {
    href: '/',
    id: 'end-first-link',
    label: 'Zoeken',
    icon: <Icon icon="inloggen" />,
  },
  {
    href: '/',
    id: 'end-second-link',
    label: 'Inloggen',
    icon: <Icon icon="inloggen" />,
  },
].map((endItem) => <NavBarItem key={endItem.id} {...endItem} />);

const itemsMain = [
  {
    href: '/',
    id: 'data',
    label: 'Data',
  },
  {
    href: '/',
    id: 'impact',
    label: 'Impact',
  },
  {
    href: '/',
    id: 'Communities',
    label: 'Communities',
  },
  {
    href: '/',
    id: 'Actueel',
    label: 'Actueel',
  },
  {
    href: '/',
    id: 'Support',
    label: 'Support',
  },
];

const megamenu = (
  <NavBarMegaMenu
    tagline="Ingang naar informatie en diensten van alle overheden"
    columns={[
      {
        id: 'col-1',
        heading: 'Diensten van de overheid',
        items: [
          { id: 'mm-1', label: 'Diensten overzicht', href: '/' },
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
    ]}
  />
);

const HeaderFooter = () => {
  const slot1 = <FooterLinks />;
  const slot2 = <FooterFooterLinks />;

  return (
    <>
      <PageHeader>
        <div className="rhc-page-section">
          <div className="rhc-page-section--column">
            <Logo organisation="Organisatie" subtitle="Wat wij doen">
              <Icon className="dutch-map" icon="nederland-map" />
            </Logo>
            <NavBar
              endItems={endItemsPrimary}
              identity={{ value: 'Overheid.nl', href: '/', appearance: 'primary' }}
              megamenu={megamenu}
            />
            <NavBar endItems={endItemsSecondary} identity={{ value: 'Dataregister', href: '/' }} items={itemsMain} />
          </div>
        </div>
      </PageHeader>
      <div className="rhc-page-section">
        <div>
          <h1>Voorbeeldpagina</h1>
          <p>
            Pitchfork art party microdosing, digicam spritz polycule sambas ascot. Offal meditation bruh, twee akerman
            pabst angela davis. Next level vaporware bruh, wide-leg blackbird spyplane sally rooney fanny pack messenger
            bag didion n+1. Banjo marfa mlkshk ottessa moshfegh, sus wide-leg locavore baffler beard eames digicam
            chillwave poke hexagon try-hard.
          </p>
          <p>
            Molly baz birth chart cacio e pepe bluesky. Lockwood marfa supper club bodega boys, booktok mezcal bluesky
            vibe check cacio e pepe open studio. Jawn yes plz EMDR, sus helvetica salvia listicle jean shorts ethical
            hashtag ayahuasca small batch furikake. Harissa I think you should leave humblebrag pét-nat vagus nerve
            chronically online, pour-over duck fat tattooed master cleanse moss wall omakase cliche knausgaard. Shabby
            chic chia cold-pressed, taiyaki bauhaus cortado chartreuse paleo aeropress art party gorpcore prism.
            Attachment style 8-bit copper mug bauhaus.
          </p>
        </div>
      </div>
      <Footer slot1={slot1} slot2={slot2} />
    </>
  );
};

export default HeaderFooter;
