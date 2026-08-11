import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  Footer,
  Icon,
  Logo,
  NavBar,
  PageHeader,
} from '@rijkshuisstijl-community/components-react';
import { FooterFooterLinks, FooterLinks } from '../../components-css/footer.stories';

const HeaderFooter = () => {
  const slot1 = <FooterLinks />;
  const slot2 = <FooterFooterLinks />;

  return (
    <>
      <PageHeader>
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
        <BreadcrumbNav>
          <BreadcrumbNavLink href="Text1"></BreadcrumbNavLink>
          <BreadcrumbNavLink href="Text2"></BreadcrumbNavLink>
          <BreadcrumbNavLink href="Text3"></BreadcrumbNavLink>
        </BreadcrumbNav>
      </PageHeader>
      <Footer slot1={slot1} slot2={slot2} />
    </>
  );
};

export default HeaderFooter;
