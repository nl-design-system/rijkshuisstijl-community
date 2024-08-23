import {
  TableCell as UtrechtTableCell,
  TableCellProps as UtrechtTableCellProps,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export interface TableCellProps extends UtrechtTableCellProps {
  align?: 'right' | 'center';
}

export const TableCell = forwardRef(
  (
    { children, className, align, ...restProps }: PropsWithChildren<TableCellProps>,
    ref: ForwardedRef<HTMLTableCellElement>,
  ) => {
    return (
      <UtrechtTableCell
        ref={ref}
        className={clsx({
          'utrecht-table__cell-align-right': align === 'right',
          'utrecht-table__cell-align-center': align === 'center',
          className,
        })}
        {...restProps}
      >
        {children}
      </UtrechtTableCell>
    );
  },
);

TableCell.displayName = 'TableCell';
