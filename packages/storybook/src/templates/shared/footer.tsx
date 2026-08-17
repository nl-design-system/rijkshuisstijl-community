import '@rijkshuisstijl-community/footer-css/dist/index.css';
import { Icon, Link, LinkList, LinkListLink, Separator } from '@rijkshuisstijl-community/components-react';

const SharedFooter = () => (
  <footer className="rhc-page-footer rhc-page-section">
    <div className="rhc-page-section__content">
      <div className="rhc-grid rhc-page-footer__main">
        <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
          <h2>Overheid.nl</h2>
          <i>Ingang naar informatie en diensten van alle overheden</i>
        </div>
        <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
          <h3>Overheid.nl</h3>
          <LinkList>
            <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
              Contact
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
              Veel gestelde vragen
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
              Over deze site
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
              Werken bij
            </LinkListLink>
          </LinkList>
        </div>
        <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
          <h3>Officiële overheidsinformatie</h3>
          <LinkList>
            <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
              Wetten
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
              Verdragen
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
              Lokale regelgeving
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
              Officiële bekendmakingen
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
              Tuchtrecht
            </LinkListLink>
          </LinkList>
        </div>
        <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
          <h3>Andere overheidssites</h3>
          <LinkList>
            <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
              Mijn overheid
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
              Rijksoverheid.nl
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
              Ondernemersplein
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
              NederlandWereldwijd
            </LinkListLink>
          </LinkList>
        </div>
      </div>
      <div className="rhc-page-footer__separator">
        <Separator />
      </div>
      <div className="rhc-page-footer__navigation">
        <Link href="#">Privacy</Link>
        <Link href="#">Cookies en anti-spam</Link>
        <Link href="#">Toegankelijkheid</Link>
        <Link href="#">Proclaimer</Link>
      </div>
    </div>
  </footer>
);

export default SharedFooter;
