import {
  Separator as UtrechtSeparator,
  SeparatorProps as UtrechtSeparatorProps,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { Ref } from 'react';

export interface SeparatorProps extends UtrechtSeparatorProps {
  invisible?: boolean;
  ref?: Ref<HTMLHRElement>;
}

export const Separator = ({ ref, invisible, className, ...restProps }: SeparatorProps) => {
  return (
    <UtrechtSeparator
      ref={ref}
      className={clsx('rhc-separator',
        {
          'utrecht-separator--invisible': invisible,
        },
        className,
      )}
      {...restProps}
    />
  );
};

Separator.displayName = 'Separator';
