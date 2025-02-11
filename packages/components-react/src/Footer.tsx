import { PageFooterProps, PageFooter as UtrechtPageFooter } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';
import React from 'react';
import { ColumnLayout } from './ColumnLayout';
import { Heading, HeadingLevel } from './Heading';
import { Icon } from './Icon';

interface FooterProps extends PageFooterProps {
  heading?: ReactNode;
  appearanceLevel?: HeadingLevel;
  columns?: ColumnProps[];
  background?: 'primary-filled' | 'primary-outlined';
  backtotop?: boolean;
  subFooter?: ReactNode;
  preFooter?: boolean;
  preFooterMessage?: ReactNode;
}

interface ColumnProps {
  heading: ReactNode;
  appearanceLevel?: HeadingLevel;
  children: ReactNode;
}

const MAX_APPEARANCE_HEADING_LEVEL = 5;
const scrollBackToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const Footer = forwardRef(
  (
    {
      preFooter,
      preFooterMessage,
      className,
      heading,
      appearanceLevel = 2,
      columns,
      backtotop,
      subFooter,
      children,
      background,
      ...restProps
    }: PropsWithChildren<FooterProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <>
      {(preFooter || preFooterMessage) && (
        <div className="rhc-page-prefooter">
          <span className="rhc-page-prefooter__content">{preFooterMessage}</span>
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
              <Heading
                level={2}
                appearanceLevel={
                  appearanceLevel >= MAX_APPEARANCE_HEADING_LEVEL ? MAX_APPEARANCE_HEADING_LEVEL : appearanceLevel
                }
              >
                {heading}
              </Heading>
            </div>
          )}
          <ColumnLayout>
            {columns?.map(({ heading: columnHeading, children }: ColumnProps, index: number) => (
              <div className="rhc-page-footer__section" key={index}>
                <Heading
                  level={heading ? 3 : 2}
                  appearanceLevel={
                    appearanceLevel >= MAX_APPEARANCE_HEADING_LEVEL ? MAX_APPEARANCE_HEADING_LEVEL : appearanceLevel
                  }
                >
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
              {backtotop && (
                <a className="rhc-page-subfooter__backtotop" href="#" onClick={scrollBackToTop}>
                  Terug naar boven <Icon icon="pijl-omhoog" />
                </a>
              )}
              {subFooter}
            </div>
          </div>
        )}
      </UtrechtPageFooter>
    </>
  ),
);

Footer.displayName = 'Footer';
