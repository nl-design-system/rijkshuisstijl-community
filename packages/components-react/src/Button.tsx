import '@rijkshuisstijl-community/components-css/index.scss';
import {
  type Button,
  ButtonProps,
  Icon,
  PrimaryActionButton,
  SecondaryActionButton,
  SubtleButton,
} from '@utrecht/component-library-react/dist/css-module';
import React, { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export { type ButtonProps, Button, PrimaryActionButton, SecondaryActionButton, SubtleButton };

export interface IconButtonProps extends ButtonProps {
  'aria-label': React.ComponentProps<'button'>['aria-label'];
}

export const IconButton = forwardRef(
  (
    { children, 'aria-label': ariaLabel, ...restProps }: PropsWithChildren<IconButtonProps>,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => (
    <SubtleButton ref={ref} aria-label={ariaLabel} className="utrecht-button--icon-only" {...restProps}>
      <Icon>{children}</Icon>
    </SubtleButton>
  ),
);

IconButton.displayName = 'IconButton';
