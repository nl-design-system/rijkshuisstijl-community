/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import {
  TableCell as UtrechtTableCell,
  TableCellProps as UtrechtTableCellProps,
} from '@utrecht/component-library-react';
import { PropsWithChildren, Ref } from 'react';

export interface TableCellProps extends UtrechtTableCellProps {
  alignCell?: 'start' | 'center' | 'end';
  ref?: Ref<HTMLTableCellElement>;
}

export const TableCell = ({ ref, children, alignCell, ...restProps }: PropsWithChildren<TableCellProps>) => (
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

TableCell.displayName = 'TableCell';
