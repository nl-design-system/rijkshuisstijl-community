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
  children,
  ...restProps
}: PropsWithChildren<CardSearchProps>) => {
  return (
    <div className={clsx('rhc-card-search', 'rhc-card-search--default', className)} ref={ref} {...restProps}>
      <div className="rhc-card-search__content">
        <div className="rhc-card-earch__heading">{heading}</div>
        <div className="rhc-card-search__subheading">{subheading}</div>
        <div className="rhc-card-search__description">{description}</div>
        {/* <div className="rhc-card-search__icon">{icon}</div> */}
        {/* <div className="rhc-card-search__metadata">{metadata}</div> */}
      </div>
      {children}
      <div className="rhc-card-search__footer">
        <div className="rhc-card-search__link rhc-card__anchor">
          <Link aria-label={title} href={href} title={title}></Link>
        </div>
        {/* {button && <div className="rhc-card-search__button">{button}</div>} */}
      </div>
    </div>
  );
};

CardSearch.displayName = 'DefaultCardSearch';
