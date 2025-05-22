import clsx from 'clsx';
import { PropsWithChildren, ReactNode, Ref } from 'react';
import { Image } from './Image';
import { Link } from './Link';

interface CardPropsBase {
  href: string;
  target?: string;
  title?: string;
  className?: string;
  heading: ReactNode;
  ref?: Ref<HTMLDivElement>;
}

export interface HorizontalImageCardProps extends CardPropsBase {
  appearance?: 'horizontal';
  imageSrc: string;
  imageAlt?: string;
  imagePresentation?: boolean;
}

export interface FullBleedCardProps extends Omit<HorizontalImageCardProps, 'appearance'> {
  appearance?: 'full-bleed';
  description?: ReactNode;
  metadata?: ReactNode;
}

export interface BaseCardProps extends Partial<Omit<FullBleedCardProps, 'appearance'>> {
  appearance?: 'default';
  button?: ReactNode;
  icon?: ReactNode;
  linkLabel?: string;
}

export type CardProps =
  | (BaseCardProps & { imageSrc?: undefined; imageAlt?: undefined })
  | (BaseCardProps & { imageSrc: string; imageAlt: string });

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
  imagePresentation,
  metadata,
  linkLabel,
  button,
  href,
  target,
  title,
  children,
  ...restProps
}: PropsWithChildren<CardProps>) => {
  return (
    <div className={clsx('rhc-card', 'rhc-card--default', className)} ref={ref} {...restProps}>
      <div className="rhc-card__content">
        <div className="rhc-card__heading">{heading}</div>
        {imageSrc && (
          <div className="rhc-card__image-container" data-testid="rhc-card__image-container">
            {<Image alt={imageAlt} className="rhc-card__image" presentation={imagePresentation} src={imageSrc} />}
          </div>
        )}
        <div className="rhc-card__icon">{icon}</div>
        <div className="rhc-card__description">{description}</div>
        <div className="rhc-card__metadata">{metadata}</div>
        {children}
      </div>
      {(linkLabel || button) && (
        <div className="rhc-card__footer">
          {linkLabel && (
            <div className="rhc-card__link rhc-card__anchor" data-testid="rhc-card__link">
              <Link aria-label={title} href={href} target={target} title={title}>
                {linkLabel}
              </Link>
            </div>
          )}
          {button && (
            <div className="rhc-card__button" data-testid="rhc-card__button">
              {button}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

DefaultCard.displayName = 'DefaultCard';

export const FullBleedCard = ({
  ref,
  href,
  target,
  title,
  imageSrc,
  imagePresentation,
  heading,
  children,
  description,
  metadata,
  className,
  imageAlt,
  ...restProps
}: PropsWithChildren<FullBleedCardProps>) => (
  <div className={clsx('rhc-card', 'rhc-card--full-bleed', className)} ref={ref} {...restProps}>
    <span className="rhc-card__anchor">
      <a aria-label={title} href={href} target={target} title={title}></a>
    </span>
    <div className="rhc-card__content">
      <div className="rhc-card__heading">{heading}</div>
      <div className="rhc-card__description">{description}</div>
      <div className="rhc-card__metadata">{metadata}</div>
      {children}
    </div>
    {<Image alt={imageAlt} className="rhc-card__image" presentation={imagePresentation} src={imageSrc} />}
  </div>
);

FullBleedCard.displayName = 'FullBleedCard';

export const HorizontalImageCard = ({
  ref,
  href,
  target,
  title,
  imageSrc,
  imageAlt,
  imagePresentation,
  heading,
  children,
  className,
  ...restProps
}: PropsWithChildren<HorizontalImageCardProps>) => (
  <div className={clsx('rhc-card', 'rhc-card--horizontal', className)} ref={ref} {...restProps}>
    <span className="rhc-card__anchor">
      <a aria-label={title} href={href} target={target} title={title}></a>
    </span>
    <div className="rhc-card__content">
      <div className="rhc-card__heading">{heading}</div>
      {children}
    </div>
    <div className="rhc-card__image-container">
      <Image alt={imageAlt} className="rhc-card__image" presentation={imagePresentation} src={imageSrc} />
    </div>
  </div>
);

HorizontalImageCard.displayName = 'HorizontalImageCard';
