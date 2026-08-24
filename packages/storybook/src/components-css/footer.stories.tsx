import '@rijkshuisstijl-community/footer-css/dist/index.css';
import '@rijkshuisstijl-community/section-css/dist/index.css';
import '@rijkshuisstijl-community/grid-css/dist/index.css';
import { Separator } from '@rijkshuisstijl-community/components-react';
import { FooterLinks3, FooterLinks4, FooterNavbarLinks } from '../templates/shared/footer';

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
      <div className="rhc-page-footer__tagline rhc-page-footer--compact__tagline">De Rijksoverheid. Voor Nederland</div>
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
