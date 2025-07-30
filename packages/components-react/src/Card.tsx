import clsx from 'clsx';
import React from 'react';
import { forwardRef, type HTMLAttributes, JSX, type ReactNode } from 'react';
import { Link } from './Link';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
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

export const Card = forwardRef<HTMLDivElement, CardProps>(
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
      <div className={clsx('rhc-card', 'rhc-card--default', className)} ref={ref} {...rest}>
        {image && <div className="rhc-card__image">{image}</div>}

        <div className="rhc-card__content">
          <HTMLHeading className="rhc-card__heading" level={headingLevel}>
            {href ? (
              <Link className="rhc-card__link" href={href} target={target}>
                {heading}
              </Link>
            ) : (
              heading
            )}
          </HTMLHeading>

          {subheading && <p className="rhc-card__subheading">{subheading}</p>}

          {description && <p className="rhc-card__description">{description}</p>}

          {metadata && <p className="rhc-card__metadata">{metadata}</p>}

          {children}
        </div>

        {linkLabel && (
          <div className="rhc-card__footer">
            <div className="rhc-card__link" data-testid="rhc-card__link">
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

Card.displayName = 'Card';
