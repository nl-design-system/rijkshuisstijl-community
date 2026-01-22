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
import { PropsWithChildren, Ref } from 'react';
import { Icon } from './Icon';
import { RHCIconID } from './icon-sets/default-icons/RHCIconIDs';

export {
  Button,
  ButtonLink,
  type ButtonProps,
  type ButtonLinkProps,
  PrimaryActionButton,
  SecondaryActionButton,
  SubtleButton,
};

export interface IconButtonProps extends ButtonProps {
  ref?: Ref<HTMLButtonElement>;
  icon?: RHCIconID;
}

export const IconButton = ({
  ref,
  children,
  className,
  label,
  icon,
  ...restProps
}: PropsWithChildren<IconButtonProps>) => (
  <SubtleButton className={clsx('rhc-button', 'rhc-button--icon-only', className)} ref={ref} {...restProps}>
    <span className="rhc-button__sr-only">{label}</span>
    {icon && <Icon icon={icon} />}
    {children}
  </SubtleButton>
);

IconButton.displayName = 'IconButton';
