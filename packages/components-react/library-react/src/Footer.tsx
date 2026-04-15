/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { Icon } from '@rijkshuisstijl-community/icon-react';
import { Link } from '@rijkshuisstijl-community/link-react';
import clsx from 'clsx';
import { HTMLAttributes, MouseEvent, PropsWithChildren, ReactNode, Ref } from 'react';
import { ColumnLayout } from './ColumnLayout';
import { Heading, HeadingLevel } from './Heading';


interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  heading?: ReactNode;
  headingId?: string;
  appearanceLevel?: HeadingLevel;
  columns?: ColumnProps[];
  background?: 'primary-filled' | 'primary-outlined';
  backtotop?: boolean;
  subFooter?: ReactNode;
  preFooter?: boolean;
  preFooterMessage?: ReactNode;
  ref?: Ref<HTMLDivElement>;
  tagline?: ReactNode;
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
  appearanceLevel = 3,
  columns,
  backtotop,
  subFooter,
  children,
  background,
  tagline,
  ...restProps
}: PropsWithChildren<FooterProps>) => (
  <footer aria-labelledby={heading ? headingId : undefined} className="rhc-page-footer-container">
    {preFooter && (
      <div className="rhc-page-prefooter">
        {preFooterMessage && <span className="rhc-page-prefooter__content">{preFooterMessage}</span>}
      </div>
    )}

    <div
      {...restProps}
      ref={ref}
      className={clsx(
        'utrecht-page-footer',
        'rhc-page-footer',
        background ? `rhc-page-footer--${background}` : 'rhc-page-footer--primary-filled',
        className,
      )}
    >
      <div className="utrecht-page-footer__content">
        {heading ? (
          <Heading hidden aria-hidden="true" id={headingId} level={2}>
            {heading}
          </Heading>
        ) : null}
        <div className="rhc-page-footer-layout">
          {tagline && (
            <div className="rhc-page-footer__tagline" key={'heading'}>
              <Heading appearanceLevel={appearanceLevel} level={2} role="presentation">
                {tagline}
              </Heading>
            </div>
          )}
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
      <div
        className={clsx(
          'utrecht-page-footer',
          'rhc-page-footer',
          'rhc-page-footer--subfooter',
          background ? `rhc-page-footer--${background}` : 'rhc-page-footer--primary-filled',
        )}
      >
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
