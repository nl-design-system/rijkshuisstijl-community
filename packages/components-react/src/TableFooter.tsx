import { TableFooter as UtrechtTableFooter } from '@utrecht/component-library-react';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export const TableFooter = forwardRef(
  ({ children, sticky }: PropsWithChildren<{ sticky?: boolean }>, ref: ForwardedRef<HTMLTableSectionElement>) => {
    return (
      <UtrechtTableFooter ref={ref} sticky={sticky}>
        {children}
      </UtrechtTableFooter>
    );
  },
);

TableFooter.displayName = 'TableFooter';
