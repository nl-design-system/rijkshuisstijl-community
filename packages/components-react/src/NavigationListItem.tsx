import clsx from 'clsx';
import { HTMLAttributes, ReactNode, Ref } from 'react';
import { Icon } from './Icon';
import { Paragraph } from './Paragraph';
import { RHCIconID } from './icon-sets/default-icons/RHCIconIDs';

export interface NavigationListItemProps extends HTMLAttributes<HTMLLIElement> {
  label: ReactNode;
  description: ReactNode;
  icon: RHCIconID | ReactNode;
  iconCta: RHCIconID | ReactNode;
  href: string;
  ref?: Ref<HTMLLIElement>;
}

export const NavigationListItem = ({
  ref,
  label,
  href,
  description,
  icon,
  iconCta,
  className,
  ...restProps
}: NavigationListItemProps) => {
  return (
    <li ref={ref} role="listitem" {...restProps}>
      <a className={clsx('rhc-navigation-list__item', className)} href={href} role={'link'}>
        {typeof icon === 'string' ? (
          <Icon className={'rhc-navigation-list__item__start-icon'} icon={icon as RHCIconID} />
        ) : (
          <Icon className={'rhc-navigation-list__item__start-icon'}>{icon}</Icon>
        )}
        <span className={'rhc-navigation-list__item-content'}>
          <Paragraph className={'rhc-navigation-list__item__label'}>{label}</Paragraph>
          <Paragraph className={'rhc-navigation-list__item__description'}>{description}</Paragraph>
          {(() => {
            if (typeof iconCta === 'string') {
              return <Icon className="rhc-navigation-list__item__end-icon" icon={iconCta as RHCIconID} />;
            } else if (iconCta) {
              return <Icon className="rhc-navigation-list__item__end-icon">{iconCta}</Icon>;
            }

            // else → default fallback
            return <Icon className="rhc-navigation-list__item__end-icon" icon={'chevron-right'} />;
          })()}
        </span>
      </a>
    </li>
  );
};

NavigationListItem.displayName = 'NavigationListItem';
