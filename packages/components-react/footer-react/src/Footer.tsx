import { Separator } from '@rijkshuisstijl-community/separator-react';
import clsx from 'clsx';
import { ReactNode } from 'react';
import '@rijkshuisstijl-community/footer-css/dist/index.css';
import '@rijkshuisstijl-community/section-css/dist/index.css';
import '@rijkshuisstijl-community/grid-css/dist/index.css';

export type TaglineProps = {
  className: string;
  children: ReactNode;
  compact?: boolean;
};

export const Tagline = ({ children, className, compact }: TaglineProps) => (
  <div className={clsx('rhc-page-footer__tagline', className, { 'rhc-page-footer--compact__tagline': compact })}>
    {children}
  </div>
);

type FooterProps = {
  slot1?: ReactNode;
  slot2: ReactNode;
};

export const Footer = ({ slot1, slot2 }: FooterProps) => {
  const compact = !slot1;

  return (
    <footer className={clsx('rhc-page-footer', 'rhc-page-section', { 'rhc-page-footer--compact': compact })}>
      <div className="rhc-page-section__content">
        {slot1 && <div className="rhc-page-footer__primary">{slot1}</div>}
        {slot1 && slot2 && (
          <div className="rhc-footer__separator">
            <Separator className={clsx({ 'rhc-page-footer--compact__separator': compact })} />
          </div>
        )}
        {slot2 && <div className="rhc-page-footer__secondary">{slot2}</div>}
      </div>
    </footer>
  );
};
