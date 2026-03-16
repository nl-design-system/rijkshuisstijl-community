/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { Icon } from '@rijkshuisstijl-community/icon-react';
import { PageFooterProps, PageFooter as UtrechtPageFooter } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { MouseEvent, PropsWithChildren, ReactNode, Ref } from 'react';
import { ColumnLayout } from './ColumnLayout';
import { Heading, HeadingLevel } from './Heading';

interface FooterProps extends PageFooterProps {
  heading?: ReactNode;
  appearanceLevel?: HeadingLevel;
  columns?: ColumnProps[];
  background?: 'primary-filled' | 'primary-outlined';
  backtotop?: boolean;
  subFooter?: ReactNode;
  preFooter?: boolean;
  preFooterMessage?: ReactNode;
  ref?: Ref<HTMLDivElement>;
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
  appearanceLevel = 3,
  columns,
  backtotop,
  subFooter,
  children,
  background,
  ...restProps
}: PropsWithChildren<FooterProps>) => (
  <>
    {preFooter && (
      <div className="rhc-page-prefooter">
        {preFooterMessage && <span className="rhc-page-prefooter__content">{preFooterMessage}</span>}
      </div>
    )}

    <UtrechtPageFooter
      {...restProps}
      ref={ref}
      className={clsx(
        'rhc-page-footer',
        background ? `rhc-page-footer--${background}` : 'rhc-page-footer--primary-filled',
        className,
      )}
    >
      <div className="rhc-page-footer__content rhc-page-footer__wrapper">
        {heading && (
          <div className="rhc-page-footer__title" key={'heading'}>
            <Heading appearanceLevel={appearanceLevel} level={2}>
              {heading}
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
      {(backtotop || subFooter) && (
        <div
          className={clsx(
            'rhc-page-subfooter',
            background ? `rhc-page-footer--${background}` : 'rhc-page-footer--primary-filled',
          )}
        >
          <div className="rhc-page-subfooter__content rhc-page-footer__wrapper">
            {subFooter}
            {backtotop && (
              <a className="rhc-page-subfooter__backtotop" href="#main" onClick={scrollBackToTop}>
                Terug naar boven <Icon icon="pijl-omhoog" />
              </a>
            )}
          </div>
        </div>
      )}
    </UtrechtPageFooter>
  </>
);

Footer.displayName = 'Footer';
