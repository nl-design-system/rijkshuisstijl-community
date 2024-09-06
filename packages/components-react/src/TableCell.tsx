import {
  TableCell as UtrechtTableCell,
  TableCellProps as UtrechtTableCellProps,
} from '@utrecht/component-library-react';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export interface TableCellProps extends UtrechtTableCellProps {
  alignCell?: 'start' | 'center' | 'end';
}

export const TableCell = forwardRef(
  (
    { children, alignCell, ...restProps }: PropsWithChildren<TableCellProps>,
    ref: ForwardedRef<HTMLTableCellElement>,
  ) => {
    return (
      <UtrechtTableCell
        ref={ref}
        style={{
          textAlign: alignCell,
        }}
        {...restProps}
      >
        {children}
      </UtrechtTableCell>
    );
  },
);

TableCell.displayName = 'TableCell';
