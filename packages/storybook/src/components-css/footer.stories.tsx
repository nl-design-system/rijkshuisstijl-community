import '@rijkshuisstijl-community/footer-css/dist/index.css';
import '@rijkshuisstijl-community/section-css/dist/index.css';
import '@rijkshuisstijl-community/grid-css/dist/index.css';
import '@rijkshuisstijl-community/link-list-css/dist/index.css';
import '@rijkshuisstijl-community/link-css/dist/index.css';
import { Icon } from '@rijkshuisstijl-community/components-react';

const linkList1 = ['Contact', 'Veel gestelde vragen', 'Over deze site', 'Werken bij'];

const linkList2 = ['Wetten', 'Verdragen', 'Lokale regelgeving', 'Officiële bekendmakingen', 'Tuchtrecht'];

const linkList3 = ['Mijn overheid', 'Rijksoverheid.nl', 'Ondernemersplein', 'NederlandWereldwijd'];

const LinkListMaker = ({ list }: { list: Array<string> }) => (
  <ul className="rhc-link-list utrecht-link-list utrecht-link-list--html-ul">
    {list.map((entry) => (
      <li className="rhc-link-list__item" key={entry}>
        <a className="utrecht-link-list__link" href="#">
          <Icon icon="chevron-right" />
          {entry}
        </a>
      </li>
    ))}
  </ul>
);

const FooterLinks = () => (
  <>
    <div className="rhc-grid__cell--span-3">
      <h2>Overheid.nl</h2>
      <i>Ingang naar informatie en diensten van alle overheden</i>
    </div>
    <div className="rhc-grid__cell--span-3">
      <h3>Overheid.nl</h3>
      <LinkListMaker list={linkList1} />
    </div>
    <div className="rhc-grid__cell--span-3">
      <h3>Officiële overheidsinformatie</h3>
      <LinkListMaker list={linkList2} />
    </div>
    <div className="rhc-grid__cell--span-3">
      <h3>Andere overheidssites</h3>
      <LinkListMaker list={linkList3} />
    </div>
  </>
);

const FooterFooterLinks = () => (
  <>
    <a className="rhc-link" href="#">
      Privacy
    </a>
    <a className="rhc-link" href="#">
      Cookies en anti-spam
    </a>
    <a className="rhc-link" href="#">
      Toegankelijkheid
    </a>
    <a className="rhc-link" href="#">
      Proclaimer
    </a>
  </>
);

export const Footer = () => (
  <footer className="rhc-page-footer">
    <div className="rhc-page-section">
      <div className="rhc-grid">
        <FooterLinks />
      </div>
    </div>
    <div className="rhc-separator" />
    <div className="rhc-page-section">
      <div style={{ display: 'flex', columnGap: '24px' }}>
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
    <div className="rhc-separator" />
    <div className="rhc-page-section">
      <div style={{ display: 'flex', columnGap: '24px', background: 'var(--rhc-page-footer-background-color)' }}>
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
