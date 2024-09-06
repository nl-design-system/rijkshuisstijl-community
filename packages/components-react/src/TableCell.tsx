import {
  TableCell as UtrechtTableCell,
  TableCellProps as UtrechtTableCellProps,
} from '@utrecht/component-library-react';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export interface TableCellProps extends UtrechtTableCellProps {
  align?: 'right' | 'center' | 'left';
}

export const TableCell = forwardRef(
  ({ children, align, ...restProps }: PropsWithChildren<TableCellProps>, ref: ForwardedRef<HTMLTableCellElement>) => {
    return (
      <UtrechtTableCell
        ref={ref}
        style={{
          textAlign: align,
        }}
        {...restProps}
      >
        {children}
      </UtrechtTableCell>
    );
  },
);

TableCell.displayName = 'TableCell';
