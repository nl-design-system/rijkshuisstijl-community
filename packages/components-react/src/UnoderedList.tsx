import {
  UnorderedList as UtrechtUnorderedList,
  UnorderedListProps as UtrechtUnorederedListProps,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export interface UnorderedListProps extends UtrechtUnorederedListProps {
  nested?: boolean;
}

export const UnorderedList = forwardRef(
  ({ children, nested, ...restProps }: PropsWithChildren<UnorderedListProps>, ref: ForwardedRef<HTMLUListElement>) => {
    return (
      <UtrechtUnorderedList
        ref={ref}
        className={clsx({
          'utrecht-unordered-list--nested': nested,
        })}
        {...restProps}
      >
        {children}
      </UtrechtUnorderedList>
    );
  },
);

UnorderedList.displayName = 'UnorderedList';
