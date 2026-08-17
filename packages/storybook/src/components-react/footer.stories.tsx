import '@rijkshuisstijl-community/footer-css/dist/index.css';
import '@rijkshuisstijl-community/section-css/dist/index.css';
import '@rijkshuisstijl-community/grid-css/dist/index.css';
import { Footer, Icon, Link, LinkList, LinkListLink } from '@rijkshuisstijl-community/components-react';

const linkList1 = ['Contact', 'Veel gestelde vragen', 'Over deze site', 'Werken bij'];

const linkList2 = ['Wetten', 'Verdragen', 'Lokale regelgeving', 'Officiële bekendmakingen', 'Tuchtrecht'];

const linkList3 = ['Mijn overheid', 'Rijksoverheid.nl', 'Ondernemersplein', 'NederlandWereldwijd'];

const LinkListMaker = ({ list }: { list: Array<string> }) => (
  <LinkList>
    {list.map((entry) => (
      <LinkListLink href="#" icon={<Icon icon="chevron-right" key={entry} />}>
        {entry}
      </LinkListLink>
    ))}
  </LinkList>
);

const FooterLinks = () => (
  <>
    <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
      <h2>Overheid.nl</h2>
      <p>
        <i>Ingang naar informatie en diensten van alle overheden</i>
      </p>
    </div>
    <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
      <h3>Overheid.nl</h3>
      <LinkListMaker list={linkList1} />
    </div>
    <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
      <h3>Officiële overheidsinformatie</h3>
      <LinkListMaker list={linkList2} />
    </div>
    <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
      <h3>Andere overheidssites</h3>
      <LinkListMaker list={linkList3} />
    </div>
  </>
);

const FooterFooterLinks = () => (
  <>
    <Link href="#">Privacy</Link>
    <Link href="#">Cookies en anti-spam</Link>
    <Link href="#">Toegankelijkheid</Link>
    <Link href="#">Proclaimer</Link>
  </>
);

export const Default = () => {
  const slot1 = <FooterLinks />;
  const slot2 = <FooterFooterLinks />;

  return <Footer slot1={slot1} slot2={slot2} />;
};

export const Compact = () => {
  const slot2 = (
    <>
      <h2 className="rhc-page-footer--compact__tagline">Overheid.nl</h2>
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
