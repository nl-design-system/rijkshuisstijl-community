import clsx from 'clsx';
import { PropsWithChildren, ReactNode, Ref } from 'react';
import { Image } from './Image';
import { Link } from './Link';

interface CardAsLinkPropsBase {
  href: string;
  target?: string;
  title?: string;
  className?: string;
  heading: ReactNode;
  ref?: Ref<HTMLDivElement>;
}

export interface HorizontalImageCardAsLinkProps extends CardAsLinkPropsBase {
  appearance?: 'horizontal';
  imageSrc: string;
  imageAlt?: string;
  imagePresentation?: boolean;
}

export interface FullBleedCardAsLinkProps extends Omit<HorizontalImageCardAsLinkProps, 'appearance'> {
  appearance?: 'full-bleed';
  description?: ReactNode;
  metadata?: ReactNode;
}

export interface BaseCardAsLinkProps extends Partial<Omit<FullBleedCardAsLinkProps, 'appearance'>> {
  appearance?: 'default';
  button?: ReactNode;
  icon?: ReactNode;
  linkLabel?: string;
}

export type CardAsLinkProps =
  | (BaseCardAsLinkProps & { imageSrc?: undefined; imageAlt?: undefined })
  | (BaseCardAsLinkProps & { imageSrc: string; imageAlt: string });

export const CardAsLink = (
  props: PropsWithChildren<CardAsLinkProps | FullBleedCardAsLinkProps | HorizontalImageCardAsLinkProps>,
) => {
  const { appearance, ref, ...cardProps } = props;
  switch (appearance) {
    case 'full-bleed':
      return <FullBleedCardAsLink {...(cardProps as FullBleedCardAsLinkProps)} ref={ref} />;
    case 'horizontal':
      return <HorizontalImageCardAsLink {...(cardProps as HorizontalImageCardAsLinkProps)} ref={ref} />;
    default:
      return <DefaultCardAsLink {...(cardProps as CardAsLinkProps)} ref={ref} />;
  }
};

CardAsLink.displayName = 'CardAsLink';

const DefaultCardAsLink = ({
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
}: PropsWithChildren<CardAsLinkProps>) => {
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

DefaultCardAsLink.displayName = 'DefaultCardAsLink';

export const FullBleedCardAsLink = ({
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
}: PropsWithChildren<FullBleedCardAsLinkProps>) => (
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

FullBleedCardAsLink.displayName = 'FullBleedCardAsLink';

export const HorizontalImageCardAsLink = ({
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
}: PropsWithChildren<HorizontalImageCardAsLinkProps>) => (
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

HorizontalImageCardAsLink.displayName = 'HorizontalImageCardAsLink';
