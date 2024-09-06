import {
  TableHeaderCell as UtrechtTableHeaderCell,
  TableHeaderCellProps as UtrechtTableHeaderCellProps,
} from '@utrecht/component-library-react';
import { Icon } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { AscendingIcon } from './icons/AscendingIcon';
import { DescendingIcon } from './icons/DescendingIcon';
import { SortIcon } from './icons/SortIcon';
import { Button } from './index';

export interface TableHeaderCellProps extends UtrechtTableHeaderCellProps {
  withSorting?: boolean;
  align?: 'right' | 'center' | 'left';
}

export const TableHeaderCell = forwardRef(
  (
    { children, withSorting, className, scope, align, ...restProps }: PropsWithChildren<TableHeaderCellProps>,
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
          textAlign: align,
        }}
        {...restProps}
      >
        {withSorting ? (
          <Button
            appearance={'subtle-button'}
            type={'button'}
            className={clsx('utrecht-table__header-cell-button', {
              'utrecht-table__header--align-right': align === 'right',
              'utrecht-table__header--align-center': align === 'center',
              'utrecht-table__header--align-left': align === 'left',
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
