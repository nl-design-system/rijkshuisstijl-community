/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */
import { Icon, type RHCIconID } from '@rijkshuisstijl-community/icon-react/no-side-effects';
import {
  type ButtonLinkProps,
  type ButtonProps,
  Button as UtrechtButton,
  ButtonLink as UtrechtButtonLink,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { PropsWithChildren, Ref } from 'react';

export type { ButtonLinkProps, ButtonProps };

export const Button = ({
  ref,
  className,
  ...restProps
}: PropsWithChildren<ButtonProps> & { ref?: Ref<HTMLButtonElement> }) => (
  <UtrechtButton className={clsx('rhc-button', className)} ref={ref} {...restProps} />
);

export const PrimaryActionButton = ({
  ref,
  className,
  ...restProps
}: PropsWithChildren<Omit<ButtonProps, 'appearance'>> & { ref?: Ref<HTMLButtonElement> }) => (
  <Button appearance="primary-action-button" className={className} ref={ref} {...restProps} />
);

export const SecondaryActionButton = ({
  ref,
  className,
  ...restProps
}: PropsWithChildren<Omit<ButtonProps, 'appearance'>> & { ref?: Ref<HTMLButtonElement> }) => (
  <Button appearance="secondary-action-button" className={className} ref={ref} {...restProps} />
);

export const SubtleButton = ({
  ref,
  className,
  ...restProps
}: PropsWithChildren<Omit<ButtonProps, 'appearance'>> & { ref?: Ref<HTMLButtonElement> }) => (
  <Button appearance="subtle-button" className={className} ref={ref} {...restProps} />
);

export const ButtonLink = ({
  ref,
  className,
  ...restProps
}: PropsWithChildren<ButtonLinkProps> & { ref?: Ref<HTMLAnchorElement> }) => (
  <UtrechtButtonLink className={clsx('rhc-button', className)} ref={ref} {...restProps} />
);

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
  <Button appearance="subtle-button" className={clsx('rhc-button--icon-only', className)} ref={ref} {...restProps}>
    <span className="rhc-button__sr-only">{label}</span>
    {icon && <Icon icon={icon} />}
    {children}
  </Button>
);

IconButton.displayName = 'IconButton';
