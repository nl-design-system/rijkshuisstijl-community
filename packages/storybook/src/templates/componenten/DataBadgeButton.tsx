import { DataBadge } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { KeyboardEvent, MouseEvent, PropsWithChildren } from 'react';

export interface DataBadgeButtonProps extends PropsWithChildren {
  className?: string;
  pressed?: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick?: (value: string) => void;
  value: string;
}

export const DataBadgeButton = ({
  children,
  className = '',
  pressed = false,
  onClick,
  value,
}: DataBadgeButtonProps) => {
  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    (event.target as HTMLElement).focus();
    if (onClick) {
      onClick(value);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      event.stopPropagation();
      if (onClick) {
        onClick(value);
      }
    }
  };

  return (
    <DataBadge
      aria-describedby={`${value}-badge-help`}
      aria-label={`${pressed ? 'Verwijder' : 'Voeg toe'} ${value} filter`}
      aria-pressed={pressed}
      role="button"
      tabIndex={0}
      className={clsx(
        'rhc-templates-databadge',
        {
          'rhc-templates-databadge--pressed': pressed,
        },
        className,
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {children}
      <span className="rhc-templates-databadge__sr-only" id={`${value}-badge-help`}>
        - Klik om filter te {pressed ? 'verwijderen' : 'toevoegen'}
      </span>
    </DataBadge>
  );
};
