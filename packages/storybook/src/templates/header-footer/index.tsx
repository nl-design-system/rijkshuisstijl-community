import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Footer,
  Icon,
  Logo,
  NavBar,
  PageHeader,
  SubNavBar,
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
              identity="Organisatie"
              megamenu={
                <SubNavBar
                  columns={[
                    [
                      { id: 'mm-1', label: 'Onderwerp 1', href: '/' },
                      { id: 'mm-2', label: 'Onderwerp 2', href: '/' },
                      { id: 'mm-3', label: 'Onderwerp 3', href: '/' },
                    ],
                    [
                      { id: 'mm-4', label: 'Onderwerp 4', href: '/' },
                      { id: 'mm-5', label: 'Onderwerp 5', href: '/' },
                    ],
                    [
                      { id: 'mm-6', label: 'Onderwerp 6', href: '/' },
                      { id: 'mm-7', label: 'Onderwerp 7', href: '/' },
                      { id: 'mm-8', label: 'Onderwerp 8', href: '/' },
                    ],
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
                },
              ]}
            />
            <NavBar
              identity="Dataregister"
              items={[
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
              ]}
              endItems={[
                {
                  href: '/',
                  id: 'end-first-link',
                  label: 'Zoeken',
                },
                {
                  href: '/',
                  id: 'end-second-link',
                  label: 'Inloggen',
                },
              ]}
            />
            <BreadcrumbNav className="rhc-breadcrumb-nav">
              <BreadcrumbNavLink href="/" index={0} rel="home">
                Home
              </BreadcrumbNavLink>
              <BreadcrumbNavSeparator>
                <Icon icon="chevron-right" />
              </BreadcrumbNavSeparator>
              <BreadcrumbNavLink href="/a/" index={1}>
                Label
              </BreadcrumbNavLink>
              <BreadcrumbNavSeparator>
                <Icon icon="chevron-right" />
              </BreadcrumbNavSeparator>
              <BreadcrumbNavLink current href="/a/b/" index={2}>
                Label
              </BreadcrumbNavLink>
            </BreadcrumbNav>
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
