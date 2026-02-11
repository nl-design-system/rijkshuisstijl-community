/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { Table as UtrechtTable } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ComponentProps } from 'react';

export {
  type TableProps,
  TableHeader,
  type TableHeaderProps,
  TableRow,
  type TableRowProps,
  TableBody,
  type TableBodyProps,
  TableFooter,
  type TableFooterProps,
} from '@utrecht/component-library-react';

export const Table = ({ className, ...restProps }: ComponentProps<typeof UtrechtTable>) => {
  return <UtrechtTable className={clsx('rhc-table', className)} {...restProps} />;
};

Table.displayName = 'Table';
