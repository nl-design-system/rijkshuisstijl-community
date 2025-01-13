import { PageFooterProps, PageFooter as UtrechtPageFooter } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';
import { ColumnLayout } from './ColumnLayout';
import { Heading, HeadingLevel } from './Heading';

interface FooterProps extends PageFooterProps {
  heading?: ReactNode;
  appearanceLevel?: HeadingLevel;
  columns?: ColumnProps[];
  background?: 'primary-filled' | 'primary-outlined';
  backtotop?: boolean;
  subFooter?: ReactNode;
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
    <UtrechtPageFooter
      {...restProps}
      ref={ref}
      className={clsx(
        'rhc-page-footer',
        background === 'primary-outlined' || background === 'primary-filled' ? `rhc-page-footer--${background}` : '',
        className,
      )}
    >
      <div className="rhc-page-footer__content rhc-page-footer__wrapper">
        {heading && (
          <div className="rhc-page-footer__title" key={'heading'}>
            <Heading appearanceLevel={appearanceLevel} level={heading ? 2 : 3}>
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
                <Heading appearanceLevel={columnAppearanceLevel} level={heading ? 3 : 2}>
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
            background === 'primary-outlined' || background === 'primary-filled'
              ? `rhc-page-footer--${background}`
              : '',
          )}
        >
          <div className="rhc-page-subfooter__content rhc-page-footer__wrapper">
            {subFooter}
            {backtotop && <span onClick={scrollBackToTop}>Back To Top</span>}
          </div>
        </div>
      )}
    </UtrechtPageFooter>
  ),
);

Footer.displayName = 'Footer';
