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
  primary?: ReactNode;
  secondary: ReactNode;
};

export const Footer = ({ primary, secondary }: FooterProps) => {
  const compact = !primary;

  return (
    <footer className={clsx('rhc-page-footer', 'rhc-page-section', { 'rhc-page-footer--compact': compact })}>
      <div className="rhc-page-section__content">
        {primary && <div className="rhc-page-footer__primary">{primary}</div>}
        {primary && secondary && (
          <div className="rhc-page-footer__separator">
            <Separator className={clsx({ 'rhc-page-footer--compact__separator': compact })} />
          </div>
        )}
        {secondary && <div className="rhc-page-footer__secondary">{secondary}</div>}
      </div>
    </footer>
  );
};
