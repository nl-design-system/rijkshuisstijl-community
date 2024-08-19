import '@rijkshuisstijl-community/components-css/index.scss';
import {
  Button,
  type ButtonProps,
  Icon,
  PrimaryActionButton,
  SecondaryActionButton,
  SubtleButton,
} from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export { type ButtonProps, Button, PrimaryActionButton, SecondaryActionButton, SubtleButton };

export interface IconButtonProps extends ButtonProps {
  label: string;
}

export const IconButton = forwardRef(
  (
    { children, className, label, ...restProps }: PropsWithChildren<IconButtonProps>,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => (
    <SubtleButton ref={ref} className={clsx('rhc-button', 'rhc-button--icon-only', className)} {...restProps}>
      <span className="rhc-button__sr-only">{label}</span>
      <Icon>{children}</Icon>
    </SubtleButton>
  ),
);

IconButton.displayName = 'IconButton';
