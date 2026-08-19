import '@rijkshuisstijl-community/footer-css/dist/index.css';
import '@rijkshuisstijl-community/section-css/dist/index.css';
import '@rijkshuisstijl-community/grid-css/dist/index.css';
import { Footer, Heading, Icon, Link, LinkList, LinkListLink } from '@rijkshuisstijl-community/components-react';

const linkList1 = ['Contact', 'Veel gestelde vragen', 'Over deze site', 'Werken bij'];

const linkList2 = ['Wetten', 'Verdragen', 'Lokale regelgeving', 'Officiële bekendmakingen', 'Tuchtrecht'];

const linkList3 = ['Mijn overheid', 'Rijksoverheid.nl', 'Ondernemersplein', 'NederlandWereldwijd'];

const LinkListMaker = ({ list }: { list: Array<string> }) => (
  <LinkList>
    {list.map((entry) => (
      <LinkListLink href="#" icon={<Icon icon="chevron-right" />} key={entry}>
        {entry}
      </LinkListLink>
    ))}
  </LinkList>
);

const FooterLinks = () => (
  <>
    <div className="rhc-page-footer__tagline">De Rijksoverheid. Voor Nederland</div>
    <div className="rhc-grid">
      <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
        <Heading appearanceLevel={5} level={3}>Rijksoverheid.nl</Heading>
        <LinkListMaker list={linkList1} />
      </div>
      <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
        <Heading appearanceLevel={5} level={3}>Officiële overheidsinformatie</Heading>
        <LinkListMaker list={linkList2} />
      </div>
      <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
        <Heading appearanceLevel={5} level={3}>Andere overheidssites</Heading>
        <LinkListMaker list={linkList3} />
      </div>
      <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
        <Heading appearanceLevel={5} level={3}>Officiële overheidsinformatie</Heading>
        <LinkListMaker list={linkList2} />
      </div>
    </div>
  </>
);

const FooterFooterLinks = () => (
  <div className="rhc-page-footer__navigation">
    <Link href="#">Privacy</Link>
    <Link href="#">Cookies en anti-spam</Link>
    <Link href="#">Toegankelijkheid</Link>
    <Link href="#">Proclaimer</Link>
  </div>
);

export const Default = () => {
  const slot1 = <FooterLinks />;
  const slot2 = <FooterFooterLinks />;

  return <Footer slot1={slot1} slot2={slot2} />;
};

export const Compact = () => {
  const slot2 = (
    <>
      <div className="rhc-page-footer__tagline rhc-page-footer--compact__tagline">Overheid.nl</div>
      <FooterFooterLinks />
    </>
  );

  return <Footer slot2={slot2} />;
};

export default {
  component: Footer,
  title: 'Footer',
  id: 'rhc-react-footer',
  parameters: {
    layout: 'fullscreen',
  },
};
