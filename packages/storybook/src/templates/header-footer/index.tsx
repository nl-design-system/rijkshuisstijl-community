import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Footer,
  Icon,
  Logo,
  NavBar,
  NavBarMegaMenu,
  PageHeader,
} from '@rijkshuisstijl-community/components-react';
import { FooterFooterLinks, FooterLinks } from '../../components-css/footer.stories';
import '@rijkshuisstijl-community/section-css/dist/index.css';
import '@rijkshuisstijl-community/grid-css/dist/index.css';

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
              className="rhc-nav-bar2"
              identity="Overheid.nl"
              megamenu={
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
              }
              endItems={[
                {
                  href: '/',
                  id: 'end-first-link',
                  label: 'Taalswitch',
                },
                {
                  href: '/',
                  id: 'end-second-link',
                  label: 'Contact',
                  icon: <Icon icon="chat" />,
                },
              ]}
            />
            <NavBar
              identity="Organisatie"
              items={[
                {
                  href: '/',
                  id: 'first-link',
                  label: 'Homepage',
                },
                {
                  href: '/',
                  id: 'second-link',
                  label: 'Componenten',
                },
                {
                  href: '/',
                  id: 'third-link',
                  label: 'Voorbeelden',
                },
              ]}
              endItems={[
                {
                  href: '/',
                  id: 'end-first-link',
                  label: 'Zoeken',
                  icon: <Icon icon="" />,
                },
                {
                  href: '/',
                  id: 'end-second-link',
                  label: 'Inloggen',
                  icon: <Icon icon="inloggen" />,
                },
              ]}
            />
          </div>
        </div>
      </PageHeader>
      <div className="rhc-page-section">
        <div>
          <h1>Voorbeeld pagina</h1>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas est
            dui, rutrum eget condimentum sed, bibendum ut augue. Pellentesque vulputate ipsum risus, et dapibus nunc
            laoreet eu. Morbi at nulla varius, sagittis ligula vel, fermentum ligula. Vestibulum accumsan leo turpis, ut
            efficitur erat accumsan ut. Curabitur at ipsum a sapien gravida varius a ac magna. Fusce dictum mi eu cursus
            placerat. Aenean sagittis venenatis augue sagittis mattis.
          </p>
        </div>
      </div>
      <Footer slot1={slot1} slot2={slot2} />
    </>
  );
};

export default HeaderFooter;
