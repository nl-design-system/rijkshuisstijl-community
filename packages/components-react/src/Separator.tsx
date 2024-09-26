import {
  Separator as UtrechtSeparator,
  SeparatorProps as UtrechtSeparatorProps,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { forwardRef } from 'react';

export interface SeparatorProps extends UtrechtSeparatorProps {
  /**
   * Whether the separator should be invisible.
   */
  invisible?: boolean;
}

export const Separator = forwardRef<HTMLHRElement, SeparatorProps>((props, ref) => {
  return (
    <UtrechtSeparator
      {...props}
      ref={ref}
      className={clsx(
        {
          'utrecht-separator--invisible': props.invisible,
        },
        props.className,
      )}
    />
  );
});

Separator.displayName = 'Separator';
