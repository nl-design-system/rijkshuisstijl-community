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
}

export const TableHeaderCell = forwardRef(
  (
    { children, withSorting, className, scope, ...restProps }: PropsWithChildren<TableHeaderCellProps>,
    ref: ForwardedRef<HTMLTableCellElement>,
  ) => {
    return (
      <UtrechtTableHeaderCell
        ref={ref}
        className={clsx({
          'utrecht-table__header-cell-row': scope === 'row',
          className,
        })}
        {...restProps}
      >
        {withSorting ? (
          <Button type={'button'} appearance={'subtle-button'} className={'utrecht-table__header-cell-button'}>
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
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
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
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
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
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="tabler-icon tabler-icon-arrows-sort"
  >
    <path d="M3 9l4 -4l4 4m-4 -4v14"></path>
    <path d="M21 15l-4 4l-4 -4m4 4v-14"></path>
  </svg>
);
