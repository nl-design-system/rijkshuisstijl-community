import {
  TableHeaderCell as UtrechtTableHeaderCell,
  TableHeaderCellProps as UtrechtTableHeaderCellProps,
} from '@utrecht/component-library-react';
import { Icon } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
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
            'utrecht-table__header-cell-row': scope === 'row',
            'utrecht-table__header-cell-align-right': align === 'right',
            'utrecht-table__header-cell-align-center': align === 'center',
            'utrecht-table__header-cell-align-left': align === 'left',
          },
          className,
        )}
        {...restProps}
      >
        {withSorting ? (
          <Button
            type={'button'}
            appearance={'subtle-button'}
            className={clsx('utrecht-table__header-cell-button', {
              'utrecht-table__header-cell-button-align-right': align === 'right',
              'utrecht-table__header-cell-button-align-center': align === 'center',
              'utrecht-table__header-cell-button-align-left': align === 'left',
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
const AscendingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="tabler-icon tabler-icon-sort-ascending"
  >
    <path d="M4 6l7 0"></path>
    <path d="M4 12l7 0"></path>
    <path d="M4 18l9 0"></path>
    <path d="M15 9l3 -3l3 3"></path>
    <path d="M18 6l0 12"></path>
  </svg>
);

const DescendingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 6l9 0"></path>
    <path d="M4 12l7 0"></path>
    <path d="M4 18l7 0"></path>
    <path d="M15 15l3 3l3 -3"></path>
    <path d="M18 6l0 12"></path>
  </svg>
);
const SortIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="tabler-icon tabler-icon-arrows-sort"
  >
    <path d="M3 9l4 -4l4 4m-4 -4v14"></path>
    <path d="M21 15l-4 4l-4 -4m4 4v-14"></path>
  </svg>
);
