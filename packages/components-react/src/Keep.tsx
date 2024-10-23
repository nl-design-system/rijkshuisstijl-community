import clsx from 'clsx';
import { forwardRef, PropsWithChildren } from 'react';

interface keepProps {
  keep: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';
  borderRadius: 's' | 'm' | 'l';
}

export const Keep = forwardRef(({ keep, children, borderRadius }: PropsWithChildren<keepProps>) => {
  return <div className={clsx('rhc-keep', `rhc-keep-${keep}-${borderRadius}`)}>{children}</div>;
});

Keep.displayName = 'Keep';
