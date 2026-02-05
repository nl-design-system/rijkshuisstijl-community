/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { Table } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ComponentProps } from 'react';

export type { TableProps as RhcTableProps } from  '@utrecht/component-library-react'

export const RhcTable = ( {className, ...restProps } : ComponentProps<typeof TableProps> ) => {
  return <Table className={clsx('rhc-table',className)} {...restProps} />;

};
RhcTable.displayName = 'RhcTable';