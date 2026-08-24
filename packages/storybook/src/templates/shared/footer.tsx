import '@rijkshuisstijl-community/footer-css/dist/index.css';
import { Icon, Link, LinkList, LinkListLink, Separator } from '@rijkshuisstijl-community/components-react';

const headerlikeStyles = {
  fontSize: '1.17em',
  fontWeight: 700,
  marginBlockEnd: '1em',
};

const linkList1 = ['Contact', 'Veel gestelde vragen', 'Over deze site', 'Werken bij'];

const linkList2 = ['Wetten', 'Verdragen', 'Lokale regelgeving', 'Officiële bekendmakingen', 'Tuchtrecht'];

const linkList3 = ['Mijn overheid', 'Rijksoverheid.nl', 'Ondernemersplein', 'NederlandWereldwijd'];

export const LinkListMaker = ({ list }: { list: Array<string> }) => (
  <LinkList>
    {list.map((entry) => (
      <LinkListLink href="#" icon={<Icon icon="chevron-right" />} key={entry}>
        {entry}
      </LinkListLink>
    ))}
  </LinkList>
);

export const FooterLinks4 = () => (
  <>
    <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
      <div style={headerlikeStyles}>Rijksoverheid.nl</div>
      <LinkListMaker list={linkList1} />
    </div>
    <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
      <div style={headerlikeStyles}>Officiële overheidsinformatie</div>
      <LinkListMaker list={linkList2} />
    </div>
    <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
      <div style={headerlikeStyles}>Andere overheidssites</div>
      <LinkListMaker list={linkList3} />
    </div>
    <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
      <div style={headerlikeStyles}>Officiële overheidsinformatie</div>
      <LinkListMaker list={linkList2} />
    </div>
  </>
);

export const FooterLinks3 = () => (
  <>
    <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
      <h2>De Rijksoverheid. Voor Nederland</h2>
      <p>
        <i>Ingang naar informatie en diensten van alle overheden</i>
      </p>
    </div>
    <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
      <div style={headerlikeStyles}>Overheid.nl</div>
      <LinkListMaker list={linkList1} />
    </div>
    <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
      <div style={headerlikeStyles}>Officiële overheidsinformatie</div>
      <LinkListMaker list={linkList2} />
    </div>
    <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
      <div style={headerlikeStyles}>Andere overheidssites</div>
      <LinkListMaker list={linkList3} />
    </div>
  </>
);

export const FooterNavbarLinks = () => (
  <div className="rhc-page-footer__navigation">
    <Link href="#">Privacy</Link>
    <Link href="#">Cookies en anti-spam</Link>
    <Link href="#">Toegankelijkheid</Link>
    <Link href="#">Proclaimer</Link>
  </div>
);

const SharedFooter = () => (
  <footer className="rhc-page-footer rhc-page-section">
    <div className="rhc-page-section__content">
      <div className="rhc-page-footer__primary">
        <div className="rhc-page-footer__tagline">De Rijksoverheid. Voor Nederland</div>
        <div className="rhc-grid">
          <FooterLinks4 />
        </div>
      </div>
      <div className="rhc-page-footer__separator">
        <Separator />
      </div>
      <div className="rhc-page-footer__secondary">
        <FooterNavbarLinks />
      </div>
    </div>
  </footer>
);

export default SharedFooter;
