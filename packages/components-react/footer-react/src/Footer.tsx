/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { ColumnLayout } from '@rijkshuisstijl-community/column-layout-react';
import { Heading, HeadingLevel } from '@rijkshuisstijl-community/heading-react';
import { Icon } from '@rijkshuisstijl-community/icon-react';
import { Link } from '@rijkshuisstijl-community/link-react';
import clsx from 'clsx';
import { HTMLAttributes, MouseEvent, PropsWithChildren, ReactNode, Ref } from 'react';

interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  heading?: ReactNode;
  headingId?: string;
  appearanceLevel?: HeadingLevel;
  columns?: ColumnProps[];
  /**
   * @deprecated Plaats een terug-naar-boven-knop als los component buiten de Page Footer,
   * na de content maar voor het footer-element.
   */
  backtotop?: boolean;
  subFooter?: ReactNode;
  preFooter?: boolean;
  preFooterMessage?: ReactNode;
  ref?: Ref<HTMLDivElement>;
  tagline?: ReactNode;
  variant?: 'default' | 'compact';
}

interface ColumnProps {
  heading: ReactNode;
  appearanceLevel?: HeadingLevel;
  children: ReactNode;
}

const scrollBackToTop = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const target = event.currentTarget.getAttribute('href');
  if (!target) return;
  const $target = document.querySelector(target) as HTMLElement;
  if (!$target) return;
  $target.focus({ preventScroll: true }); // Ensure target is focusable, ie via tabindex={-1} on #main
};

export const Footer = ({
  preFooter,
  ref,
  preFooterMessage,
  className,
  heading,
  headingId = 'page-footer-heading',
  appearanceLevel = 4,
  columns,
  // eslint-disable-next-line sonarjs/deprecation
  backtotop,
  subFooter,
  children,
  tagline,
  variant = 'default',
  ...restProps
}: PropsWithChildren<FooterProps>) =>
  variant === 'compact' ? (
    <footer className="rhc-page-footer-container">
      <div
        {...restProps}
        className={clsx('utrecht-page-footer', 'rhc-page-footer', 'rhc-page-footer--compact', className)}
        ref={ref}
      >
        <div className="utrecht-page-footer__content">
          <div className="rhc-page-footer-compact-layout">
            {tagline && <span className="rhc-page-footer__tagline">{tagline}</span>}
            {children && <div className="rhc-page-footer__links">{children}</div>}
          </div>
        </div>
      </div>
    </footer>
  ) : (
    <footer aria-labelledby={heading ? headingId : undefined} className="rhc-page-footer-container">
      {preFooter && (
        <div className="rhc-page-prefooter">
          {preFooterMessage && <span className="rhc-page-prefooter__content">{preFooterMessage}</span>}
        </div>
      )}

      <div {...restProps} className={clsx('utrecht-page-footer', 'rhc-page-footer', className)} ref={ref}>
        <div className="utrecht-page-footer__content">
          {heading ? (
            <Heading className="rhc-page-footer__heading" id={headingId} level={2}>
              {heading}
            </Heading>
          ) : null}
          <div className="rhc-page-footer-layout">
            {tagline && <p className="rhc-page-footer__tagline">{tagline}</p>}
            <ColumnLayout>
              {columns?.map(({ heading: columnHeading, children }: ColumnProps, index: number) => (
                <div className="rhc-page-footer__section" key={index}>
                  <Heading appearanceLevel={appearanceLevel} level={heading ? 3 : 2}>
                    {columnHeading}
                  </Heading>
                  {children}
                </div>
              ))}
              {children}
            </ColumnLayout>
          </div>
        </div>
      </div>
      {(backtotop || subFooter) && (
        <div className={clsx('utrecht-page-footer', 'rhc-page-footer', 'rhc-page-footer--subfooter')}>
          <div className="utrecht-page-footer__content">
            <div className="rhc-page-subfooter-layout">
              {subFooter}
              {backtotop && (
                <Link href="#main" onClick={scrollBackToTop}>
                  Terug naar boven <Icon icon="pijl-omhoog" />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );

Footer.displayName = 'Footer';
