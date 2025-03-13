import clsx from 'clsx';
import { PropsWithChildren, ReactNode, Ref } from 'react';
import { Link } from './Link';

interface CardSearchProps {
  href: string;
  title?: string;
  className?: string;
  heading: ReactNode;
  subheading?: ReactNode;
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
      <div className="rhc-card-search__footer"></div>
      {/* {button && <div className="rhc-card__button">{button}</div>} */}
      {/* <Link aria-label={title} href={href} title={title}></Link> */}
    </div>
  );
};

CardSearch.displayName = 'DefaultCardSearch';
