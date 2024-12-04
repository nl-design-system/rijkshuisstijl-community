import {
  Button,
  ButtonLink,
  type ButtonLinkProps,
  type ButtonProps,
  PrimaryActionButton,
  SecondaryActionButton,
  SubtleButton,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { Icon } from './icon/Icon';
import { RijkshuisstijlIconID } from './icon/IconTypes';

export {
  Button,
  ButtonLink,
  type ButtonLinkProps,
  type ButtonProps,
  PrimaryActionButton,
  SecondaryActionButton,
  SubtleButton,
};

export interface IconButtonProps extends ButtonProps {
  icon?: RijkshuisstijlIconID;
}

export const IconButton = forwardRef(
  (
    { children, className, label, icon, ...restProps }: PropsWithChildren<IconButtonProps>,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => (
    <SubtleButton className={clsx('rhc-button', 'rhc-button--icon-only', className)} ref={ref} {...restProps}>
      <span className="rhc-button__sr-only">{label}</span>
      {icon && <Icon icon={icon} />}
      {children}
    </SubtleButton>
  ),
);

IconButton.displayName = 'IconButton';
