import clsx from 'clsx';
import { forwardRef, PropsWithChildren } from 'react';

interface keepProps {
  keepCorner: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';
  borderRadius: 's' | 'm' | 'l';
}

export const Keep = forwardRef(({ keepCorner, children, borderRadius }: PropsWithChildren<keepProps>) => {
  return <div className={clsx('rhc-keep', `rhc-keep-${keepCorner}-${borderRadius}`)}>{children}</div>;
});

Keep.displayName = 'Keep';
