/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { Icon } from '@rijkshuisstijl-community/icon-react';
import {
  TableHeaderCell as UtrechtTableHeaderCell,
  TableHeaderCellProps as UtrechtTableHeaderCellProps,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { PropsWithChildren, Ref } from 'react';
import { Button } from './Button';

export interface TableHeaderCellProps extends UtrechtTableHeaderCellProps {
  withSorting?: boolean;
  alignCell?: 'start' | 'center' | 'end';
  ref?: Ref<HTMLTableCellElement>;
}

export const TableHeaderCell = ({
  ref,
  children,
  withSorting,
  className,
  scope,
  alignCell,
  'aria-sort': ariaSort,
  ...restProps
}: PropsWithChildren<TableHeaderCellProps>) => {
  return (
    <UtrechtTableHeaderCell
      ref={ref}
      className={clsx(
        {
          'utrecht-table__header--cell-row': scope === 'row',
        },
        className,
      )}
      style={{
        textAlign: alignCell,
      }}
      {...restProps}
    >
      {withSorting ? (
        <Button
          appearance={'subtle-button'}
          type={'button'}
          className={clsx('utrecht-table__header-cell-button', {
            'utrecht-table__header--align-right': alignCell === 'end',
            'utrecht-table__header--align-center': alignCell === 'center',
            'utrecht-table__header--align-left': alignCell === 'start',
          })}
        >
          {children}
          <Icon
            icon={ariaSort === 'ascending' || ariaSort === 'descending' ? `sort-${ariaSort}` : 'arrows-sort'}
          ></Icon>
        </Button>
      ) : (
        children
      )}
    </UtrechtTableHeaderCell>
  );
};

TableHeaderCell.displayName = 'TableHeaderCell';
