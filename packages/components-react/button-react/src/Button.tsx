/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */
import {
  type ButtonHint,
  type ButtonPurpose,
  Button as CandidateButton,
  type ButtonProps as CandidateButtonProps,
} from '@nl-design-system-candidate/button-react';
import { Icon, type RHCIconID } from '@rijkshuisstijl-community/icon-react';
import clsx from 'clsx';
import {
  ButtonHTMLAttributes,
  ForwardRefExoticComponent,
  PropsWithChildren,
  ReactNode,
  Ref,
  RefAttributes,
} from 'react';

export { type ButtonHint, type ButtonPurpose } from '@nl-design-system-candidate/button-react';

/**
 * @deprecated Deze re-exports zijn gebaseerd op de Utrecht Button en verdwijnen
 * in een volgende major versie. Gebruik `Button` met de `purpose` property.
 */
export {
  ButtonLink,
  type ButtonLinkProps,
  PrimaryActionButton,
  SecondaryActionButton,
  SubtleButton,
} from '@utrecht/component-library-react';

type AppearanceValue = 'primary-action-button' | 'secondary-action-button' | 'subtle-button';

const PURPOSE_BY_APPEARANCE: Record<AppearanceValue, ButtonPurpose> = {
  'primary-action-button': 'primary',
  'secondary-action-button': 'secondary',
  'subtle-button': 'subtle',
};

export type ButtonProps = CandidateButtonProps & {
  ref?: Ref<HTMLButtonElement>;
  /**
   * @deprecated Gebruik `purpose`. Deze property wordt vertaald naar de
   * overeenkomstige `purpose` en verdwijnt in een volgende major versie.
   */
  appearance?: AppearanceValue;
};

/**
 * Interne, niet-onderscheiden variant van de candidate Button props, zodat de
 * wrapper `label` en `children` gecombineerd kan doorgeven. De publieke
 * `ButtonProps` behoudt de strikte candidate-typen.
 */
type RelaxedCandidateButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  busy?: boolean;
  disabled?: boolean;
  hint?: ButtonHint;
  htmlDisabled?: boolean;
  iconEnd?: ReactNode;
  iconOnly?: boolean;
  iconStart?: ReactNode;
  label?: ReactNode;
  pressed?: boolean;
  purpose?: ButtonPurpose;
  toggle?: boolean;
};

const RelaxedCandidateButton = CandidateButton as ForwardRefExoticComponent<
  RelaxedCandidateButtonProps & RefAttributes<HTMLButtonElement>
>;

// eslint-disable-next-line sonarjs/deprecation -- backwards compatibiliteit voor de deprecated appearance property
export const Button = ({ appearance, children, className, ref, ...restProps }: PropsWithChildren<ButtonProps>) => (
  <RelaxedCandidateButton
    purpose={appearance ? PURPOSE_BY_APPEARANCE[appearance] : undefined}
    {...restProps}
    className={clsx('rhc-button', className)}
    ref={ref}
  >
    {children}
  </RelaxedCandidateButton>
);

Button.displayName = 'Button';

export type IconButtonProps = Omit<ButtonProps, 'children' | 'label'> & {
  icon?: RHCIconID;
  label?: ReactNode;
};

export const IconButton = ({
  // eslint-disable-next-line sonarjs/deprecation -- backwards compatibiliteit voor de deprecated appearance property
  appearance,
  children,
  className,
  icon,
  label,
  ref,
  ...restProps
}: PropsWithChildren<IconButtonProps>) => (
  <RelaxedCandidateButton
    purpose={appearance ? PURPOSE_BY_APPEARANCE[appearance] : 'subtle'}
    {...restProps}
    iconOnly
    className={clsx('rhc-button', 'rhc-button--icon-only', className)}
    label={label}
    ref={ref}
    iconStart={
      icon || children ? (
        <>
          {icon && <Icon icon={icon} />}
          {children}
        </>
      ) : undefined
    }
  />
);

IconButton.displayName = 'IconButton';
