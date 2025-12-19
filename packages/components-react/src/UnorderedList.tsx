import {
  UnorderedList as UtrechtUnorderedList,
  UnorderedListProps as UtrechtUnorederedListProps,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { PropsWithChildren, Ref } from 'react';

export interface UnorderedListProps extends UtrechtUnorederedListProps {
  nested?: boolean;
  ref?: Ref<HTMLUListElement>;
}

export const UnorderedList = ({ ref, nested, className, ...restProps }: PropsWithChildren<UnorderedListProps>) => (
  <UtrechtUnorderedList
    ref={ref}
    {...restProps}
    className={clsx(
      {
        'utrecht-unordered-list--nested': nested,
      },
      className,
    )}
  />
);

UnorderedList.displayName = 'UnorderedList';
