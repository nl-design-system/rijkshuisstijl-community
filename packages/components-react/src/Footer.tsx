import { PageFooterProps, PageFooter as UtrechtPageFooter } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';
import { Button } from './Button';
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
}

interface ColumnProps {
  heading: ReactNode;
  appearanceLevel?: HeadingLevel;
  children: ReactNode;
}

const scrollBackToTop = () => {
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
                appearance={`utrecht-heading-${appearanceLevel >= MAX_APPEARANCE_HEADING_LEVEL ? MAX_APPEARANCE_HEADING_LEVEL : appearanceLevel}`}
                level={2}
              >
                {heading}
              </Heading>
            </div>
          )}
          <ColumnLayout>
            {columns?.map(
              (
                { heading: columnHeading, appearanceLevel: columnAppearanceLevel = 3, children }: ColumnProps,
                index: number,
              ) => (
                <div className="rhc-page-footer__section" key={index}>
                  <Heading
                    appearance={`utrecht-heading-${columnAppearanceLevel >= MAX_APPEARANCE_HEADING_LEVEL ? MAX_APPEARANCE_HEADING_LEVEL : columnAppearanceLevel}`}
                    level={heading ? 3 : 2}
                  >
                    {columnHeading}
                  </Heading>
                  {children}
                </div>
              ),
            )}
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
                <Button appearance="subtle-button" className="rhc-page-subfooter__backtotop" onClick={scrollBackToTop}>
                  Terug naar boven
                </Button>
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
