import { UnorderedList as UtrechtUnorderedList } from '@utrecht/component-library-react';
import { UnorderedListProps } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

interface RhcUnorderedListProps extends UnorderedListProps {
  nested?: boolean;
}

export const UnorderedList = forwardRef(
  (
    { children, nested, ...restProps }: PropsWithChildren<RhcUnorderedListProps>,
    ref: ForwardedRef<HTMLUListElement>,
  ) => {
    return (
      <UtrechtUnorderedList
        ref={ref}
        {...restProps}
        className={clsx({
          'utrecht-unordered-list--nested': nested,
        })}
      >
        {children}
      </UtrechtUnorderedList>
    );
  },
);

UnorderedList.displayName = 'UnorderedList';
