import {
  Button,
  type ButtonProps,
  Icon,
  PrimaryActionButton,
  SecondaryActionButton,
  SubtleButton,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export { Button, type ButtonProps, PrimaryActionButton, SecondaryActionButton, SubtleButton };

export interface IconButtonProps extends ButtonProps {
  className?: string;
  label: string;
}

export const IconButton = forwardRef(
  (
    { children, className, label, ...restProps }: PropsWithChildren<IconButtonProps>,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => (
    <SubtleButton className={clsx('rhc-button', 'rhc-button--icon-only', className)} ref={ref} {...restProps}>
      <span className="rhc-button__sr-only">{label}</span>
      <Icon>{children}</Icon>
    </SubtleButton>
  ),
);

IconButton.displayName = 'IconButton';
