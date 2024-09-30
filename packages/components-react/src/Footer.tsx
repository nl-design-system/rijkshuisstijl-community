import { ColumnLayout, PageFooterProps, PageFooter as UtrechtPageFooter } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';
import { Heading } from './Heading';

interface FooterProps extends PageFooterProps {
  heading: ReactNode;
  headingLevel: number;
  columns?: IColumn[];
}

interface IColumn {
  heading: ReactNode;
  children: ReactNode;
}

const MAX_HEADING_LEVEL = 6;

export const Footer = forwardRef(
  (
    { className, heading, columns, headingLevel, children, ...restProps }: PropsWithChildren<FooterProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <UtrechtPageFooter {...restProps} className={clsx('rhc-footer', className)} ref={ref}>
      {heading && (
        <Heading className="rhc-footer__title" level={headingLevel}>
          {heading}
        </Heading>
      )}

      <ColumnLayout>
        {columns &&
          columns.map((column, index) => (
            <div className="rhc-page-footer__section" key={index}>
              <Heading
                className="rhc-footer__column--title"
                level={headingLevel >= MAX_HEADING_LEVEL ? MAX_HEADING_LEVEL : headingLevel + 1}
              >
                {column.heading}
              </Heading>
              {column.children}
            </div>
          ))}

        {children}
      </ColumnLayout>
    </UtrechtPageFooter>
  ),
);
Footer.displayName = 'Footer';
