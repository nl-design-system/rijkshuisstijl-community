import {
  TableHeaderCell as UtrechtTableHeaderCell,
  TableHeaderCellProps as UtrechtTableHeaderCellProps,
} from '@utrecht/component-library-react';
import { Icon } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { Button } from './Button';
import { AscendingIcon, DescendingIcon, SortIcon } from './icons';

export interface TableHeaderCellProps extends UtrechtTableHeaderCellProps {
  withSorting?: boolean;
  alignCell?: 'start' | 'center' | 'end';
}

export const TableHeaderCell = forwardRef(
  (
    { children, withSorting, className, scope, alignCell, ...restProps }: PropsWithChildren<TableHeaderCellProps>,
    ref: ForwardedRef<HTMLTableCellElement>,
  ) => {
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

            <Icon>
              {restProps['aria-sort'] === 'ascending' ? (
                <DescendingIcon />
              ) : restProps['aria-sort'] === 'descending' ? (
                <AscendingIcon />
              ) : (
                <SortIcon />
              )}
            </Icon>
          </Button>
        ) : (
          children
        )}
      </UtrechtTableHeaderCell>
    );
  },
);

TableHeaderCell.displayName = 'TableHeaderCell';
