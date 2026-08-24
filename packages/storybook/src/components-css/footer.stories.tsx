import '@rijkshuisstijl-community/footer-css/dist/index.css';
import '@rijkshuisstijl-community/section-css/dist/index.css';
import '@rijkshuisstijl-community/grid-css/dist/index.css';
import { Heading, Icon, Link, LinkList, LinkListLink, Separator } from '@rijkshuisstijl-community/components-react';

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

const FooterLinks4 = () => (
  <>
    <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
      <Heading appearanceLevel={5} level={3}>
        Rijksoverheid.nl
      </Heading>
      <LinkListMaker list={linkList1} />
    </div>
    <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
      <Heading appearanceLevel={5} level={3}>
        Officiële overheidsinformatie
      </Heading>
      <LinkListMaker list={linkList2} />
    </div>
    <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
      <Heading appearanceLevel={5} level={3}>
        Andere overheidssites
      </Heading>
      <LinkListMaker list={linkList3} />
    </div>
    <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
      <Heading appearanceLevel={5} level={3}>
        Officiële overheidsinformatie
      </Heading>
      <LinkListMaker list={linkList2} />
    </div>
  </>
);

const FooterLinks3 = () => (
  <>
    <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
      <h2 style={{ marginTop: 0 }}>De Rijksoverheid. Voor Nederland</h2>
      <p>
        <i>Ingang naar informatie en diensten van alle overheden</i>
      </p>
    </div>
    <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
      <Heading appearanceLevel={5} level={3}>
        Overheid.nl
      </Heading>
      <LinkListMaker list={linkList1} />
    </div>
    <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
      <Heading appearanceLevel={5} level={3}>
        Officiële overheidsinformatie
      </Heading>
      <LinkListMaker list={linkList2} />
    </div>
    <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
      <Heading appearanceLevel={5} level={3}>
        Andere overheidssites
      </Heading>
      <LinkListMaker list={linkList3} />
    </div>
  </>
);

const FooterNavbarLinks = () => (
  <div className="rhc-page-footer__navigation">
    <Link href="#">Privacy</Link>
    <Link href="#">Cookies en anti-spam</Link>
    <Link href="#">Toegankelijkheid</Link>
    <Link href="#">Proclaimer</Link>
  </div>
);

export const Default = () => (
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

export const TaglineInColumn = () => (
  <footer className="rhc-page-footer rhc-page-section">
    <div className="rhc-page-section__content">
      <div className="rhc-grid rhc-page-footer__primary">
        <FooterLinks3 />
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

export const PrimaryOnly = () => (
  <footer className="rhc-page-footer rhc-page-section">
    <div className="rhc-page-section__content">
      <div className="rhc-page-footer__primary">
        <div className="rhc-page-footer__tagline">De Rijksoverheid. Voor Nederland</div>
        <div className="rhc-grid">
          <FooterLinks4 />
        </div>
      </div>
    </div>
  </footer>
);

export const Compact = () => (
  <footer className="rhc-page-footer rhc-page-footer--compact rhc-page-section">
    <div className="rhc-page-footer__secondary rhc-page-section__content">
      <div className="rhc-page-footer__tagline">De Rijksoverheid. Voor Nederland</div>
      <Separator className="rhc-page-footer--compact__separator" />
      <FooterNavbarLinks />
    </div>
  </footer>
);

export default {
  component: Default,
  title: 'Footer',
  id: 'rhc-footer',
  parameters: {
    layout: 'fullscreen',
  },
};
