import clsx from 'clsx';
import { forwardRef, PropsWithChildren } from 'react';

interface keepProps {
  keep: string;
}

export const Keep = forwardRef(({ keep, children }: PropsWithChildren<keepProps>) => {
  return (
    <div
      className={clsx(
        {
          'rhc-keep-start-start': keep === 'topLeft',
          'rhc-keep-start-end': keep === 'topRight',
          'rhc-keep-end-end': keep === 'bottomRight',
          'rhc-keep-end-start': keep === 'bottomLeft',
        },
        'rhc-keep',
      )}
    >
      {children}
    </div>
  );
});

Keep.displayName = 'Keep';
