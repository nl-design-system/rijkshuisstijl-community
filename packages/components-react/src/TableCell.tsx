import {
  TableCell as UtrechtTableCell,
  TableCellProps as UtrechtTableCellProps,
} from '@utrecht/component-library-react';
import { PropsWithChildren, Ref } from 'react';

export interface TableCellProps extends UtrechtTableCellProps {
  alignCell?: 'start' | 'center' | 'end';
  ref?: Ref<HTMLTableCellElement>;
}

export const TableCell = ({ ref, children, alignCell, ...restProps }: PropsWithChildren<TableCellProps>) => {
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
};

TableCell.displayName = 'TableCell';
