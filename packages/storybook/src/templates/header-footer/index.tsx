import { Footer, Icon, Logo, PageHeader } from '@rijkshuisstijl-community/components-react';
import { FooterLinks, FooterFooterLinks } from '../../components-css/footer.stories';

const HeaderFooter = () => {
  const slot1 = <FooterLinks />;
  const slot2 = <FooterFooterLinks />;

  return (
    <>
      <PageHeader>
        <Logo organisation="Organisatie" subtitle="Wat wij doen">
          <Icon className={'dutch-map'} icon={'nederland-map'} />
        </Logo> 
      </PageHeader>
      <Footer slot1={slot1} slot2={slot2} />
    </>
  );
};

export default HeaderFooter;
