import clsx from 'clsx';
import { AnchorHTMLAttributes, PropsWithChildren, ReactNode, Ref } from 'react';
import { Image } from './Image';
import { Link } from './Link';

interface CardPropsBase extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  heading: ReactNode;
  ref?: Ref<HTMLAnchorElement>;
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

export const Card = (props: PropsWithChildren<CardProps | FullBleedCardProps | HorizontalImageCardProps>) => {
  const { appearance, ref, ...cardProps } = props;
  switch (appearance) {
    case 'full-bleed':
      return <FullBleedCard {...(cardProps as FullBleedCardProps)} ref={ref} />;
    case 'horizontal':
      return <HorizontalImageCard {...(cardProps as HorizontalImageCardProps)} ref={ref} />;
    default:
      return <DefaultCard {...(cardProps as CardProps)} ref={ref} />;
  }
};

Card.displayName = 'Card';

const DefaultCard = ({
  ref,
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
}: PropsWithChildren<CardProps>) => {
  return (
    <a className={clsx('rhc-card', 'rhc-card--default', className)} href={href} ref={ref} title={title} {...restProps}>
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
        <div className="rhc-card__link">
          <Link>{linkLabel}</Link>
        </div>
        <div className="rhc-card__button">{button}</div>
      </div>
    </a>
  );
};

DefaultCard.displayName = 'DefaultCard';

export const FullBleedCard = ({
  ref,
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
}: PropsWithChildren<FullBleedCardProps>) => (
  <a className={clsx('rhc-card', 'rhc-card--full-bleed', className)} href={href} ref={ref} title={title} {...restProps}>
    {<Image alt={imageAlt} className="rhc-card__image" src={imageSrc} />}
    <div className="rhc-card__content">
      <div className="rhc-card__heading">{heading}</div>
      <div className="rhc-card__description">{description}</div>
      <div className="rhc-card__metadata">{metadata}</div>
      {children}
    </div>
  </a>
);

FullBleedCard.displayName = 'FullBleedCard';

export const HorizontalImageCard = ({
  ref,
  href,
  title,
  imageSrc,
  imageAlt,
  heading,
  children,
  className,
  ...restProps
}: PropsWithChildren<HorizontalImageCardProps>) => (
  <a className={clsx('rhc-card', 'rhc-card--horizontal', className)} href={href} ref={ref} title={title} {...restProps}>
    <div className="rhc-card__image-container">
      <Image alt={imageAlt} className="rhc-card__image" src={imageSrc} />
    </div>
    <div className="rhc-card__content">
      <div className="rhc-card__heading">{heading}</div>
      {children}
    </div>
  </a>
);

HorizontalImageCard.displayName = 'HorizontalImageCard';
