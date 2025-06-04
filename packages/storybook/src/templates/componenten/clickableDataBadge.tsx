import { DataBadge } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React from 'react';

interface ClickableDataBadgeProps {
  children: React.ReactNode;
  className?: string;
  isSelected?: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick?: (value: string) => void;
  value: string;
}

export const ClickableDataBadge: React.FC<ClickableDataBadgeProps> = ({
  children,
  className = '',
  isSelected = false,
  onClick,
  value,
}) => {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    // Force focus away from parent link to prevent navigation
    (event.target as HTMLElement).focus();
    if (onClick) {
      onClick(value);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
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
      aria-label={`${isSelected ? 'Verwijder' : 'Voeg toe'} ${value} filter`}
      aria-pressed={isSelected}
      role="button"
      tabIndex={0}
      className={clsx(
        'rhc-templates-databadge',
        {
          'rhc-templates-databadge--selected': isSelected,
        },
        className,
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {children}
      <span className="rhc-templates-databadge__sr-only" id={`${value}-badge-help`}>
        - Klik om filter te {isSelected ? 'verwijderen' : 'toevoegen'}
      </span>
    </DataBadge>
  );
};
