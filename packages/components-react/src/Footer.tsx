import { PageFooterProps, PageFooter as UtrechtPageFooter } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';
import { Heading } from './Heading';

interface FooterProps extends PageFooterProps {
  title: string;
  columns?: IColumn[];
}

interface IColumn {
  title: string;
  elements: ReactNode;
}

export const Footer = forwardRef(
  ({ className, title, columns, ...restProps }: PropsWithChildren<FooterProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <UtrechtPageFooter {...restProps} className={clsx('rhc-footer', className)} ref={ref}>
      {title && (
        <div className="rhc-footer__column">
          <Heading className="rhc-footer__title" level={4}>
            {title}
          </Heading>
        </div>
      )}

      {columns &&
        columns.map((column, index) => (
          <div className="rhc-footer__column" key={index}>
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
