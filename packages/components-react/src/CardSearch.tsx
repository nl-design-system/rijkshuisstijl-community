import { Link as DefaultLink } from '@utrecht/link-react';
import clsx from 'clsx';
import React from 'react';
import {
  ElementType,
  forwardRef,
  type HTMLAttributes,
  JSX,
  type KeyboardEvent,
  type ReactNode,
  useId,
  useRef,
} from 'react';

export interface CardSearchProps extends HTMLAttributes<HTMLDivElement> {
  heading: ReactNode;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  subheading?: ReactNode;
  description?: ReactNode;
  metadata?: string;
  image?: ReactNode;
  href?: string;
  target?: string;
  linkLabel?: string;
  button?: ReactNode;
  LinkComponent?: ElementType;
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
      button,
      className,
      LinkComponent = DefaultLink,
      ...rest
    },
    ref,
  ) => {
    const cardLinkRef = useRef<HTMLAnchorElement>(null);
    const headingId = useId();

    const onClick = () => {
      if (href && cardLinkRef.current) {
        cardLinkRef.current.click();
      }
    };

    const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      if ((event.key === 'Enter' || event.key === ' ') && href && cardLinkRef.current) {
        event.preventDefault();
        cardLinkRef.current.click();
      }
    };

    return (
      <div
        aria-labelledby={href ? headingId : undefined}
        ref={ref}
        role={href ? 'link' : undefined}
        tabIndex={href ? 0 : undefined}
        className={clsx('rhc-card-search', 'rhc-card-search--default', className, {
          'rhc-card-search--clickable': href,
        })}
        onClick={href ? onClick : undefined}
        onKeyDown={href ? onKeyDown : undefined}
        {...rest}
      >
        {image && <div className="rhc-card-search__image">{image}</div>}

        <div className="rhc-card-search__content">
          <HTMLHeading className="rhc-card-search__heading" id={headingId} level={headingLevel}>
            {href ? (
              <LinkComponent className="rhc-card-search__link" href={href} ref={cardLinkRef} target={target}>
                {heading}
              </LinkComponent>
            ) : (
              heading
            )}
          </HTMLHeading>

          {subheading && <div className="rhc-card-search__subheading">{subheading}</div>}
          {description && <div className="rhc-card-search__description">{description}</div>}
          {metadata && <div className="rhc-card-search__metadata">{metadata}</div>}
        </div>

        {(linkLabel || button) && (
          <div className="rhc-card-search__footer">
            {linkLabel && href && (
              <div className="rhc-card-search__link" data-testid="rhc-card-search__link">
                <LinkComponent href={href} target={target}>
                  {linkLabel}
                </LinkComponent>
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
  },
);

CardSearch.displayName = 'CardSearch';
