import '@rijkshuisstijl-community/components-css/index.scss';
import {
  Button,
  type ButtonProps,
  Icon,
  PrimaryActionButton,
  SecondaryActionButton,
  SubtleButton,
} from '@utrecht/component-library-react/dist/css-module';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export { type ButtonProps, Button, PrimaryActionButton, SecondaryActionButton, SubtleButton };

export interface IconButtonProps extends ButtonProps {
  label: string;
}

export const IconButton = forwardRef(
  ({ children, label, ...restProps }: PropsWithChildren<IconButtonProps>, ref: ForwardedRef<HTMLButtonElement>) => (
    <SubtleButton ref={ref} className="utrecht-button--icon-only" {...restProps}>
      <span className="utrecht-button__sr-only">{label}</span>
      <Icon>{children}</Icon>
    </SubtleButton>
  ),
);

IconButton.displayName = 'IconButton';
