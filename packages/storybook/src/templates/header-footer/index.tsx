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
              className="rhc-nav-bar2"
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
      <Footer slot1={slot1} slot2={slot2} />
    </>
  );
};

export default HeaderFooter;
