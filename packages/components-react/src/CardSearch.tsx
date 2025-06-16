import clsx from 'clsx';
import { PropsWithChildren, ReactNode, Ref } from 'react';
import { Link } from './Link';

interface CardSearchProps {
  href?: string;
  title?: string;
  target?: string;
  className?: string;
  heading: ReactNode;
  subheading?: ReactNode;
  description?: ReactNode;
  metadata?: string;
  ref?: Ref<HTMLDivElement>;
  linkLabel?: string;
  button?: ReactNode;
}

export const CardSearch = ({
  ref,
  heading,
  subheading,
  className,
  description,
  target,
  button,
  href,
  title,
  metadata,
  linkLabel,
  children,
  ...restProps
}: PropsWithChildren<CardSearchProps>) => {
  return (
    <div className={clsx('rhc-card-search', 'rhc-card-search--default', className)} ref={ref} {...restProps}>
      <div className="rhc-card-search__content">
        <div className="rhc-card-search__link">
          <Link aria-label={title} href={href} title={title}>
            <div className="rhc-card-search__heading">{heading}</div>
          </Link>
          <Link aria-label={title} href={href} title={title}>
            <div className="rhc-card-search__subheading">{subheading}</div>
          </Link>
        </div>
        <div className="rhc-card-search__description">{description}</div>
        <div className="rhc-card-search__metadata">{metadata}</div>
      </div>
      {children}
      {linkLabel && (
        <div className="rhc-card-search__footer">
          {linkLabel && href && (
            <div className="rhc-card-search__link" data-testid="rhc-card-search__link">
              <Link href={href} target={target} title={title}>
                {linkLabel}
              </Link>
            </div>
          )}
          {button && (
            <div className="rhc-card-search__button" data-testid="rhc-card-search__button">
              {button}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

CardSearch.displayName = 'DefaultCardSearch';
