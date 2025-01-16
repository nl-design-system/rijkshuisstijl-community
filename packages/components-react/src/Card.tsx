import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';
import { Image } from './Image';
import { Link } from './Link';

interface CardPropsBase {
  href: string;
  title?: string;
  className?: string;
  heading: ReactNode;
}

export interface CardProps extends CardPropsBase {
  appearance?: 'default';
  button?: ReactNode;
  icon?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  description?: ReactNode;
  metadata?: ReactNode;
  linkLabel?: string;
}

export interface FullBleedCardProps extends CardPropsBase {
  appearance?: 'full-bleed';
  imageSrc: string;
  description?: ReactNode;
  metadata?: ReactNode;
  imageAlt?: string;
}

export interface HorizontalImageCardProps extends CardPropsBase {
  appearance?: 'horizontal';
  imageSrc: string;
  imageAlt?: string;
}

export const Card = forwardRef(
  (
    props: PropsWithChildren<CardProps | FullBleedCardProps | HorizontalImageCardProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { appearance, ...cardProps } = props;
    switch (appearance) {
      case 'full-bleed':
        return <FullBleedCard {...(cardProps as FullBleedCardProps)} ref={ref} />;
      case 'horizontal':
        return <HorizontalImageCard {...(cardProps as HorizontalImageCardProps)} ref={ref} />;
      default:
        return <DefaultCard {...(cardProps as CardProps)} ref={ref} />;
    }
  },
);

Card.displayName = 'Card';

const DefaultCard = forwardRef(
  (
    {
      heading,
      className,
      imageSrc,
      icon,
      description,
      imageAlt,
      metadata,
      linkLabel,
      button,
      href,
      title,
      children,
      ...restProps
    }: PropsWithChildren<CardProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div className={clsx('rhc-card', 'rhc-card--default', className)} ref={ref} {...restProps}>
        <div className="rhc-card__content">
          <div className="rhc-card__image-container">
            {<Image alt={imageAlt} className="rhc-card__image" src={imageSrc} />}
          </div>
          <div className="rhc-card__icon">{icon}</div>
          <div className="rhc-card__heading">{heading}</div>
          <div className="rhc-card__description">{description}</div>
          <div className="rhc-card__metadata">{metadata}</div>
          {children}
        </div>
        <div className="rhc-card__footer">
          <div className="rhc-card__link rhc-card__anchor">
            <Link href={href} title={title}>
              {linkLabel}
            </Link>
          </div>
          <div className="rhc-card__button">{button}</div>
        </div>
      </div>
    );
  },
);

DefaultCard.displayName = 'DefaultCard';

export const FullBleedCard = forwardRef(
  (
    {
      href,
      title,
      imageSrc,
      heading,
      children,
      description,
      metadata,
      className,
      imageAlt,
      ...restProps
    }: PropsWithChildren<FullBleedCardProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div className={clsx('rhc-card', 'rhc-card--full-bleed', className)} ref={ref} {...restProps}>
      <span className="rhc-card__anchor">
        <a aria-label={title} href={href} title={title}></a>
      </span>
      {<Image alt={imageAlt} className="rhc-card__image" src={imageSrc} />}
      <div className="rhc-card__content">
        <div className="rhc-card__heading">{heading}</div>
        <div className="rhc-card__description">{description}</div>
        <div className="rhc-card__metadata">{metadata}</div>
        {children}
      </div>
    </div>
  ),
);

FullBleedCard.displayName = 'FullBleedCard';

export const HorizontalImageCard = forwardRef(
  (
    {
      href,
      title,
      imageSrc,
      imageAlt,
      heading,
      children,
      className,
      ...restProps
    }: PropsWithChildren<HorizontalImageCardProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div className={clsx('rhc-card', 'rhc-card--horizontal', className)} ref={ref} {...restProps}>
      <span className="rhc-card__anchor">
        <a aria-label={title} href={href} title={title}></a>
      </span>
      <div className="rhc-card__image-container">
        <Image alt={imageAlt} className="rhc-card__image" src={imageSrc} />
      </div>
      <div className="rhc-card__content">
        <div className="rhc-card__heading">{heading}</div>
        {children}
      </div>
    </div>
  ),
);

HorizontalImageCard.displayName = 'HorizontalImageCard';
