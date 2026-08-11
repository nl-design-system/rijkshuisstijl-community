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
      <i>Ingang naar informatie en diensten van alle overheden</i>
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
  <footer className="rhc-page-footer">
    <div className="rhc-page-section">
      <div className="rhc-grid">
        <FooterLinks />
      </div>
    </div>
    <div className="rhc-page-section">
      <div className="rhc-footer--separator">
        <Separator />
      </div>
    </div>
    <div className="rhc-page-section">
      <div className="rhc-page-footer--navigation">
        <FooterFooterLinks />
      </div>
    </div>
  </footer>
);

export const NonFullBleed = () => (
  <footer className="rhc-page-footer" style={{ background: 'none' }}>
    <div className="rhc-page-section">
      <div className="rhc-grid" style={{ background: 'var(--rhc-page-footer-background-color)' }}>
        <FooterLinks />
      </div>
    </div>
    <div className="rhc-page-section">
      <div className="rhc-footer--separator">
        <Separator />
      </div>
    </div>
    <div className="rhc-page-section rhc-footer--navigation">
      <div style={{ display: 'flex', columnGap: '24px', background: 'var(--rhc-page-footer-background-color)' }}>
        <FooterFooterLinks />
      </div>
    </div>
  </footer>
);

export const Compact = () => (
  <footer className="rhc-page-footer">
    <div className="rhc-page-section rhc-page-footer--navigation">
      <div style={{ display: 'flex', columnGap: '24px', alignItems: 'baseline' }}>
        <h2 className="rhc-page-footer-compact--tagline">Overheid.nl</h2>
        <FooterFooterLinks />
      </div>
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
