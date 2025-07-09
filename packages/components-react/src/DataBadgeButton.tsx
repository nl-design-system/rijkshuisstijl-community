import { DataBadge, DataBadgeProps } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { PropsWithChildren, ReactNode, Ref } from 'react';

export interface DataBadgeButtonProps extends DataBadgeProps {
  pressed?: boolean;
  helperText?: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'before' | 'after';
  label?: ReactNode;
  showHelperText?: boolean;
  helperId?: string;
  ref?: Ref<HTMLElement>;
}

export const DataBadgeButton = ({
  ref,
  children,
  className,
  icon,
  iconPosition,
  label,
  pressed = false,
  helperText,
  showHelperText = false,
  helperId,
  ...restProps
}: PropsWithChildren<DataBadgeButtonProps>) => {
  const actualHelperId = showHelperText && helperId ? helperId : undefined;
  const textContent = label ? <span>{label}</span> : children;
  const actualIconPosition = icon && (iconPosition ?? 'before');

  return (
    <DataBadge
      aria-describedby={actualHelperId}
      aria-pressed={pressed}
      className={clsx('rhc-data-badge-button', className)}
      ref={ref}
      role="button"
      tabIndex={0}
      {...restProps}
    >
      {!icon && textContent}
      {icon && actualIconPosition === 'before' && (
        <>
          {icon}
          {textContent}
        </>
      )}
      {icon && actualIconPosition === 'after' && (
        <>
          {textContent}
          {icon}
        </>
      )}
      {showHelperText && helperText && actualHelperId && (
        <span className="rhc-data-badge-button__sr-only" id={actualHelperId}>
          {helperText}
        </span>
      )}
    </DataBadge>
  );
};

DataBadgeButton.displayName = 'DataBadgeButton';
