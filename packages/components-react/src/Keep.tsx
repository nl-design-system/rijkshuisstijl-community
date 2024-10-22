import clsx from 'clsx';
import { forwardRef, PropsWithChildren } from 'react';

interface keepProps {
  keep: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';
  nested: boolean;
  borderRadius: 's' | 'm' | 'l';
  firstChild?: string;
  secondChild?: string;
}

export const Keep = forwardRef(
  ({ keep, children, firstChild, secondChild, nested, borderRadius }: PropsWithChildren<keepProps>) => {
    return (
      <div
        className={clsx(
          {
            'rhc-keep-nested': nested,
            'rhc-keep': !nested,
          },
          `rhc-keep-${keep}-${borderRadius}`,
          firstChild !== undefined ? `rhc-keep-child rhc-keep-first-child-${firstChild}` : firstChild,
          secondChild !== undefined ? `rhc-keep-child rhc-keep-second-child-${secondChild}` : secondChild,
        )}
      >
        {children}
      </div>
    );
  },
);

Keep.displayName = 'Keep';
