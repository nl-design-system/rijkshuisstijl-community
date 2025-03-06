import clsx from 'clsx';
import { PropsWithChildren, ReactNode, Ref } from 'react';
import { Link } from './Link';

interface CardSearchProps {
  href: string;
  title?: string;
  className?: string;
  heading: ReactNode;
  subheading: ReactNode;
  description: ReactNode;
  metadata?: string;
  ref?: Ref<HTMLDivElement>;
}

export const CardSearch = ({
  ref,
  heading,
  subheading,
  className,
  description,
  href,
  title,
  metadata,
  children,
  ...restProps
}: PropsWithChildren<CardSearchProps>) => {
  return (
    <div className={clsx('rhc-card', 'rhc-card--default', className)} ref={ref} {...restProps}>
      <div className="rhc-card__content">
        <div className="rhc-card__heading">{heading}</div>
        <div className="rhc-card__subheading">{subheading}</div>
        <div className="rhc-card__description">{description}</div>
        <div className="rhc-card__metadata">{metadata}</div>
      </div>
      {children}
      <div className="rhc-card__footer">
        <div className="rhc-card__link rhc-card__anchor">
          <Link aria-label={title} href={href} title={title}></Link>
        </div>
        {/* {button && <div className="rhc-card__button">{button}</div>} */}
      </div>
    </div>
  );
};

CardSearch.displayName = 'DefaultCardSearch';
