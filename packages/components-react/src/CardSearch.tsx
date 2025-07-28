import clsx from 'clsx';
import React from 'react';
import { forwardRef, type HTMLAttributes, JSX, type ReactNode } from 'react';
import { Link } from './Link';

export interface CardSearchProps extends HTMLAttributes<HTMLDivElement> {
  heading: ReactNode;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  subheading?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  metadata?: string;
  image?: ReactNode;
  href?: string;
  target?: string;
  linkLabel?: string;
}

const HTMLHeading = ({
  level = 2,
  children,
  ...rest
}: { level: number; children: ReactNode } & HTMLAttributes<HTMLHeadingElement>) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return React.createElement(Tag, rest, children);
};

export const CardSearch = forwardRef<HTMLDivElement, CardSearchProps>(
  (
    {
      heading,
      headingLevel = 2,
      subheading,
      description,
      metadata,
      image,
      href,
      target,
      linkLabel,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className={clsx('rhc-card-search', 'rhc-card-search--default', className)} ref={ref} {...rest}>
        {image && <div className="rhc-card-search__image">{image}</div>}

        <div className="rhc-card-search__content">
          <HTMLHeading className="rhc-card-search__heading" level={headingLevel}>
            {href ? (
              <Link className="rhc-card-search__link" href={href} target={target}>
                {heading}
              </Link>
            ) : (
              heading
            )}
          </HTMLHeading>

          {subheading && <div className="rhc-card-search__subheading">{subheading}</div>}
          {description && <div className="rhc-card-search__description">{description}</div>}
          {metadata && <div className="rhc-card-search__metadata">{metadata}</div>}
          {children}
        </div>

        {linkLabel && (
          <div className="rhc-card-search__footer">
            <div className="rhc-card-search__link" data-testid="rhc-card-search__link">
              <Link href={href} target={target}>
                {linkLabel}
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  },
);

CardSearch.displayName = 'CardSearch';
