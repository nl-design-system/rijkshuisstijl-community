import { Footer, Icon, Logo, PageHeader, NavBar } from '@rijkshuisstijl-community/components-react';
import { FooterLinks, FooterFooterLinks } from '../../components-css/footer.stories';
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
          </div>
        </div>
      </PageHeader>
      <Footer slot1={slot1} slot2={slot2} />
    </>
  );
};

export default HeaderFooter;
