import '@rijkshuisstijl-community/footer-css/dist/index.css';
import '@rijkshuisstijl-community/section-css/dist/index.css';
import '@rijkshuisstijl-community/grid-css/dist/index.css';
import { Icon, Link, LinkList, LinkListLink, Separator } from '@rijkshuisstijl-community/components-react';

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
    <div className="rhc-grid__cell--cols-421">
      <h2>Overheid.nl</h2>
      <p>
        <i>Ingang naar informatie en diensten van alle overheden</i>
      </p>
    </div>
    <div className="rhc-grid__cell--cols-421">
      <h3>Overheid.nl</h3>
      <LinkListMaker list={linkList1} />
    </div>
    <div className="rhc-grid__cell--cols-421">
      <h3>Officiële overheidsinformatie</h3>
      <LinkListMaker list={linkList2} />
    </div>
    <div className="rhc-grid__cell--cols-421">
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

export const Footer = () => (
  <footer className="rhc-page-footer rhc-page-section">
    <div className="rhc-page-section__content">
      <div className="rhc-grid rhc-page-footer__primary">
        <FooterLinks />
      </div>
      <div className="rhc-page-footer__separator">
        <Separator />
      </div>
      <div className="rhc-page-footer__navigation">
        <FooterFooterLinks />
      </div>
    </div>
  </footer>
);

export const Compact = () => (
  <footer className="rhc-page-footer rhc-page-section">
    <div className="rhc-page-footer__navigation rhc-page-section__content">
      <h2 className="rhc-page-footer--compact__tagline">Overheid.nl</h2>
      <FooterFooterLinks />
    </div>
  </footer>
);

export default {
  component: Footer,
  title: 'Footer',
  id: 'rhc-footer',
  parameters: {
    layout: 'fullscreen',
  },
};
