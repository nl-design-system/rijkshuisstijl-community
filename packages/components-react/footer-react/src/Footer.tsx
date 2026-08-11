import { Separator } from '@rijkshuisstijl-community/separator-react';
import { ReactNode } from 'react';
import '@rijkshuisstijl-community/footer-css/dist/index.css';
import '@rijkshuisstijl-community/section-css/dist/index.css';
import '@rijkshuisstijl-community/grid-css/dist/index.css';

type FooterProps = {
  slot1?: ReactNode;
  slot2: ReactNode;
};

export const Footer = ({ slot1, slot2 }: FooterProps) => (
  <footer className="rhc-page-footer">
    {slot1 && (
      <div className="rhc-page-section">
        <div className="rhc-grid">{slot1}</div>
      </div>
    )}
    {slot1 && slot2 && (
      <div className="rhc-page-section">
        <div className="rhc-footer--separator">
          <Separator />
        </div>
      </div>
    )}
    {slot2 && (
      <div className="rhc-page-section">
        <div className="rhc-page-footer--navigation">{slot2}</div>
      </div>
    )}
  </footer>
);
