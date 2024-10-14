import clsx from 'clsx';
import { forwardRef, HTMLAttributes } from 'react';

export type NavigationListProps = HTMLAttributes<HTMLUListElement>;

export const NavigationList = forwardRef<HTMLUListElement, NavigationListProps>(
  ({ children, className, ...restProps }, ref) => {
    return (
      <ul
        aria-label="Navigation List"
        className={clsx('rhc-navigation-list rhc-navigation-list--container-small', className)}
        ref={ref}
        role={'list'}
        {...restProps}
      >
        {children}
      </ul>
    );
  },
);

NavigationList.displayName = 'NavigationList';
