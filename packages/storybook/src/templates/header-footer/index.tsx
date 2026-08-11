import { Footer, Logo, PageHeader } from '@rijkshuisstijl-community/components-react';
import { FooterLinks, FooterFooterLinks } from '../../components-css/footer.stories';

const HeaderFooter = () => {
  const slot1 = <FooterLinks />;
  const slot2 = <FooterFooterLinks />;

  return (
    <>
      <PageHeader>
        <Logo organisation="Organisatie" subtitle="Wat wij doen" />
      </PageHeader>
      <Footer slot1={slot1} slot2={slot2} />
    </>
  );
};

export default HeaderFooter;
