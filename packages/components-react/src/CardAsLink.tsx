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
export interface CardAsLinkProps extends BaseCardAsLinkProps {
  imageSrc?: string;
  imageAlt?: string;
}
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
    <div className={clsx('rhc-card-as-link', 'rhc-card-as-link--default', className)} ref={ref} {...restProps}>
      <div className="rhc-card-as-link__content">
        <div className="rhc-card-as-link__heading">{heading}</div>
        {imageSrc && (
          <div className="rhc-card-as-link__image-container" data-testid="rhc-card-as-link__image-container">
            {
              <Image
                alt={imageAlt}
                className="rhc-card-as-link__image"
                presentation={imagePresentation}
                src={imageSrc}
              />
            }
          </div>
        )}
        <div className="rhc-card-as-link__icon">{icon}</div>
        <div className="rhc-card-as-link__description">{description}</div>
        <div className="rhc-card-as-link__metadata">{metadata}</div>
        {children}
      </div>
      {(linkLabel || button) && (
        <div className="rhc-card-as-link__footer">
          {linkLabel && (
            <div className="rhc-card-as-link__link rhc-card-as-link__anchor" data-testid="rhc-card-as-link__link">
              <Link aria-label={title} href={href} target={target} title={title}>
                {linkLabel}
              </Link>
            </div>
          )}
          {button && (
            <div className="rhc-card-as-link__button" data-testid="rhc-card-as-link__button">
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
  <div className={clsx('rhc-card-as-link', 'rhc-card-as-link--full-bleed', className)} ref={ref} {...restProps}>
    <span className="rhc-card-as-link__anchor">
      <a aria-label={title} href={href} target={target} title={title}></a>
    </span>
    <div className="rhc-card-as-link__content">
      <div className="rhc-card-as-link__heading">{heading}</div>
      <div className="rhc-card-as-link__description">{description}</div>
      <div className="rhc-card-as-link__metadata">{metadata}</div>
      {children}
    </div>
    {<Image alt={imageAlt} className="rhc-card-as-link__image" presentation={imagePresentation} src={imageSrc} />}
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
  <div className={clsx('rhc-card-as-link', 'rhc-card-as-link--horizontal', className)} ref={ref} {...restProps}>
    <span className="rhc-card-as-link__anchor">
      <a aria-label={title} href={href} target={target} title={title}></a>
    </span>
    <div className="rhc-card-as-link__content">
      <div className="rhc-card-as-link__heading">{heading}</div>
      {children}
    </div>
    <div className="rhc-card-as-link__image-container">
      <Image alt={imageAlt} className="rhc-card-as-link__image" presentation={imagePresentation} src={imageSrc} />
    </div>
  </div>
);

HorizontalImageCardAsLink.displayName = 'HorizontalImageCardAsLink';
