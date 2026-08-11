import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Footer,
  Icon,
  Logo,
  NavBar,
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
              className="rhc-nav-bar"
              endItems={[
                {
                  href: '/',
                  id: 'end-first-link',
                  label: 'Figma',
                },
                {
                  href: '/',
                  id: 'end-second-link',
                  label: 'Github',
                },
                {
                  href: '/',
                  id: 'end-third-link',
                  label: 'Storybook',
                },
              ]}
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
