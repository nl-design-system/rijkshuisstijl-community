import {
  Separator as UtrechtSeparator,
  SeparatorProps as UtrechtSeparatorProps,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { forwardRef } from 'react';

export interface SeparatorProps extends UtrechtSeparatorProps {
  invisible?: boolean;
}

export const Separator = forwardRef<HTMLHRElement, SeparatorProps>(({ invisible, className, ...restProps }, ref) => {
  return (
    <UtrechtSeparator
      ref={ref}
      className={clsx(
        {
          'utrecht-separator--invisible': invisible,
        },
        className,
      )}
      {...restProps}
    />
  );
});

Separator.displayName = 'Separator';
