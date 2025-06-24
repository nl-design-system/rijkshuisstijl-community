import { DataBadge, DataBadgeProps } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { PropsWithChildren, ReactNode, Ref } from 'react';

export interface DataBadgeButtonProps extends DataBadgeProps {
  pressed?: boolean;
  helperText?: ReactNode;
  showHelperText?: boolean;
  helperId?: string;
  ref?: Ref<HTMLElement>;
}

export const DataBadgeButton = ({
  ref,
  children,
  className,
  pressed = false,
  helperText,
  showHelperText = false,
  helperId,
  ...restProps
}: PropsWithChildren<DataBadgeButtonProps>) => {
  const actualHelperId = showHelperText && helperId ? helperId : undefined;

  return (
    <DataBadge
      aria-describedby={actualHelperId}
      aria-pressed={pressed}
      ref={ref}
      role="button"
      tabIndex={0}
      className={clsx(
        'rhc-data-badge-button',
        {
          'rhc-data-badge-button--pressed': pressed,
        },
        className,
      )}
      {...restProps}
    >
      {children}
      {showHelperText && helperText && actualHelperId && (
        <span className="rhc-data-badge-button__sr-only" id={actualHelperId}>
          {helperText}
        </span>
      )}
    </DataBadge>
  );
};

DataBadgeButton.displayName = 'DataBadgeButton';
