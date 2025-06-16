import { DataBadge, type DataBadgeProps } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { PropsWithChildren, ReactNode } from 'react';

export interface DataBadgeButtonProps extends DataBadgeProps {
  pressed?: boolean;
  helperText?: ReactNode;
  showHelperText?: boolean;
  helperId?: string;
}

export const DataBadgeButton = ({
  children,
  className = '',
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
      role="button"
      tabIndex={0}
      className={clsx(
        'rhc-templates-databadge',
        {
          'rhc-templates-databadge--pressed': pressed,
        },
        className,
      )}
      {...restProps}
    >
      {children}
      {showHelperText && helperText && actualHelperId && (
        <span className="rhc-templates-databadge__sr-only" id={actualHelperId}>
          {helperText}
        </span>
      )}
    </DataBadge>
  );
};
