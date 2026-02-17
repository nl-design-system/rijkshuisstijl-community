/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { Icon as UtrechtIcon, type IconProps as UtrechtIconProps } from '@utrecht/component-library-react';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';
import { RHCIconID } from './icon-sets/default-icons/RHCIconIDs';
import { iconSet as defaultIconSet } from './icon-sets/default-icons/icon-set';

let iconSet: Record<string, ReactNode> = defaultIconSet;

export const registerIconSet = (newIconSet: typeof iconSet) => {
  iconSet = { ...iconSet, ...newIconSet };
};

export const getIconSet = () => ({ ...iconSet });

export { type RHCIconID };

export interface IconProps extends UtrechtIconProps {
  /**
   * The icon ID of the icon to display.
   * The type of this property is a string, because a number of icon sets can be registered with any possible icon ID.
   * This property can be kept undefined if a custom icon is instead passed as a child.
   */
  icon?: string;
}

export const Icon = forwardRef(
  ({ children, icon, ...restProps }: PropsWithChildren<IconProps>, ref: ForwardedRef<HTMLSpanElement>) => (
    <UtrechtIcon ref={ref} {...restProps}>
      {icon && iconSet[icon]}
      {children}
    </UtrechtIcon>
  ),
);

Icon.displayName = 'Icon';
