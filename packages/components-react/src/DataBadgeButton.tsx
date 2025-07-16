import { DataBadge, DataBadgeProps } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { PropsWithChildren, ReactNode, Ref, useId } from 'react';

export interface DataBadgeButtonProps extends DataBadgeProps {
  pressed?: boolean;
  helperText?: ReactNode;
  icon?: ReactNode;
  iconAlign?: 'start' | 'end';
  ref?: Ref<HTMLElement>;
}

export const DataBadgeButton = ({
  ref,
  children,
  className,
  icon,
  iconAlign = 'start',
  pressed = false,
  helperText,
  ...restProps
}: PropsWithChildren<DataBadgeButtonProps>) => {
  const helperId = useId();

  return (
    <DataBadge
      aria-describedby={helperText ? helperId : undefined}
      aria-pressed={pressed}
      className={clsx('rhc-data-badge-button', className)}
      ref={ref}
      role="button"
      tabIndex={0}
      {...restProps}
    >
      {iconAlign === 'start' && icon}
      <span className={'rhc-data-badge-button__label'}>{children}</span>
      {iconAlign === 'end' && icon}

      {helperText && (
        <span className="rhc-data-badge-button__sr-only" id={helperId}>
          {helperText}
        </span>
      )}
    </DataBadge>
  );
};

DataBadgeButton.displayName = 'DataBadgeButton';
