import { ColumnLayout, PageFooterProps, PageFooter as UtrechtPageFooter } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';
import { Heading, HeadingLevel } from './Heading';

interface FooterProps extends PageFooterProps {
  heading?: ReactNode;
  appearanceLevel?: HeadingLevel;
  columns?: ColumnProps[];
  background?: 'primary-filled' | 'primary-outlined';
}

interface ColumnProps {
  heading: ReactNode;
  appearanceLevel?: HeadingLevel;
  children: ReactNode;
}

export const Footer = forwardRef(
  (
    {
      className,
      heading,
      appearanceLevel = 2,
      columns,
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
        background === 'primary-outlined' || background === 'primary-filled' ? `rhc-footer--${background}` : '',
        className,
      )}
    >
      <div className="rhc-page-footer__content">
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
    </UtrechtPageFooter>
  ),
);

Footer.displayName = 'Footer';
