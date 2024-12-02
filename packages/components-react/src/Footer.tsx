import { ColumnLayout, PageFooterProps, PageFooter as UtrechtPageFooter } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';
import { Heading } from './Heading';

interface FooterProps extends PageFooterProps {
  heading?: ReactNode;
  headingLevel?: number;
  columns?: ColumnProps[];
  background?: 'primary-filled' | 'primary-outlined';
}

interface ColumnProps {
  heading: string;
  headingLevel?: number;
  children: ReactNode;
}

const MAX_HEADING_LEVEL = 6;

export const Footer = forwardRef(
  (
    {
      className,
      heading,
      headingLevel = 2,
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
            <Heading level={headingLevel}>{heading}</Heading>
          </div>
        )}
        <ColumnLayout>
          {columns?.map(
            (
              { heading: columnHeading, headingLevel: columnHeadingLevel = 3, children }: ColumnProps,
              index: number,
            ) => (
              <div className="rhc-page-footer__section" key={index}>
                <Heading level={columnHeadingLevel >= MAX_HEADING_LEVEL ? MAX_HEADING_LEVEL : columnHeadingLevel + 1}>
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
