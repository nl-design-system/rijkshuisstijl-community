/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */
import { Icon, type RHCIconID } from '@rijkshuisstijl-community/icon-react';
import { Button, type ButtonProps } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { PropsWithChildren, Ref } from 'react';

export {
  Button,
  ButtonLink,
  type ButtonProps,
  type ButtonLinkProps,
  PrimaryActionButton,
  SecondaryActionButton,
  SubtleButton,
} from '@utrecht/component-library-react';

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
  <Button
    appearance="subtle-button"
    className={clsx('rhc-button', 'rhc-button--icon-only', className)}
    ref={ref}
    {...restProps}
  >
    <span className="rhc-button__sr-only">{label}</span>
    {icon && <Icon icon={icon} />}
    {children}
  </Button>
);

IconButton.displayName = 'IconButton';
