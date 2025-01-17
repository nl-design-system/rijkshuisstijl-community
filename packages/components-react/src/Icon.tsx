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
  icon?: RHCIconID | string;
}

export const Icon = forwardRef(
  ({ children, icon, className, ...restProps }: PropsWithChildren<IconProps>, ref: ForwardedRef<HTMLSpanElement>) => {
    return (
      <UtrechtIcon className={className} ref={ref} {...restProps}>
        {icon && iconSet[icon]}
        {children}
      </UtrechtIcon>
    );
  },
);

Icon.displayName = 'Icon';
