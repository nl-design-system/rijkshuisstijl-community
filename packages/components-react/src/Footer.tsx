import { PageFooterProps, PageFooter as UtrechtPageFooter } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { Heading } from './index';

interface FooterProps extends PageFooterProps {
  title: string;
  columns?: IColumn[];
}

interface IColumn {
  title: string;
  elements: string;
}

export const Footer = forwardRef(
  ({ className, title, columns, ...restProps }: PropsWithChildren<FooterProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <UtrechtPageFooter {...restProps} ref={ref} className={clsx('rhc-footer', className)}>
      {title && (
        <div className="rhc-footer__column">
          <Heading level={4} className="rhc-footer__title">
            {title}
          </Heading>
        </div>
      )}

      {columns &&
        columns.map((column, index) => (
          <div key={index} className="rhc-footer__column">
            <Heading className="rhc-footer__column--title" level={5}>
              {column.title}
            </Heading>
            {column.elements}
          </div>
        ))}
    </UtrechtPageFooter>
  ),
);
Footer.displayName = 'Footer';
