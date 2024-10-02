import clsx from 'clsx';
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';
import { Image } from './Image';
import { Link } from './Link';

interface CardPropsBase extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  title: string;
  className?: string;
  heading: ReactNode;
}

interface DefaultCard extends CardPropsBase {
  appearance: 'default';
  button?: ReactNode;
  icon?: ReactNode;
  imageSrc?: string;
  description?: ReactNode;
  metadata?: ReactNode;
  linkLabel?: string;
}

interface BackgroundImageCard extends CardPropsBase {
  appearance: 'full-bleed';
  imageSrc: string;
  description?: ReactNode;
  metadata?: ReactNode;
}

interface HorizontalImageCard extends CardPropsBase {
  appearance: 'horizontal';
  imageSrc: string;
  imageAlt: string;
}

export type CardProps = DefaultCard | BackgroundImageCard | HorizontalImageCard;

export const Card = forwardRef(
  (
    { heading, appearance, className, imageSrc, href, title, children, ...restProps }: PropsWithChildren<CardProps>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    return (
      <a
        href={href}
        ref={ref}
        title={title}
        className={clsx(
          'rhc-card',
          {
            'rhc-card--default': appearance === 'default',
            'rhc-card--full-bleed': appearance === 'full-bleed',
            'rhc-card--horizontal': appearance === 'horizontal',
          },
          className,
        )}
      >
        {appearance === 'full-bleed' && imageSrc && <Image className="rhc-card__image" src={imageSrc} />}
        <div className="rhc-card__content">
          <div className="rhc-card__image-container">
            {appearance !== 'full-bleed' && imageSrc && <Image className="rhc-card__image" src={imageSrc} />}
          </div>
          <div className="rhc-card__icon">{(restProps as DefaultCard).icon}</div>
          <div className="rhc-card__heading">{heading}</div>
          <div className="rhc-card__description">{(restProps as DefaultCard | BackgroundImageCard).description}</div>
          <div className="rhc-card__metadata">{(restProps as DefaultCard | BackgroundImageCard).metadata}</div>
          {children}
        </div>
        <div className="rhc-card__footer">
          {(restProps as DefaultCard).linkLabel && (
            <div className="rhc-card__link">
              <Link>{(restProps as DefaultCard).linkLabel}</Link>
            </div>
          )}
          {(restProps as DefaultCard).button && (
            <div className="rhc-card__button">{(restProps as DefaultCard).button}</div>
          )}
        </div>
      </a>
    );
  },
);

Card.displayName = 'Card';
