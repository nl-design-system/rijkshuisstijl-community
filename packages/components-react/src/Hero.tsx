import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { Heading } from './Heading';
import { HeadingGroup } from './HeadingGroup';
import { Image } from './Image';
import { Paragraph } from './Paragraph';

export interface HeroProps extends HTMLAttributes<HTMLDivElement> {
  textAlign?: 'start' | 'end';
  imageSrc: string;
  imageAlt: string;
  heading: ReactNode;
  headingLevel?: 1 | 2 | 3 | 4 | 5;
  subHeading: ReactNode;
  heroMessage?: boolean;
  aspectRatio?: '16 / 9' | '1 / 1' | '4 / 3';
  borderRadiusCorner?: 'start-start' | 'start-end' | 'end-start' | 'end-end';
}

export const Hero = forwardRef(
  (
    {
      textAlign = 'start',
      children,
      className,
      imageSrc,
      imageAlt,
      heading,
      subHeading,
      heroMessage,
      headingLevel = 3,
      borderRadiusCorner,
      aspectRatio = '16 / 9',
      ...restProps
    }: PropsWithChildren<HeroProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'rhc-hero',
          heroMessage && `rhc-hero--text-align-${textAlign}`,
          heroMessage &&
            borderRadiusCorner &&
            `rhc-hero--custom-border-radius-corner rhc-hero--border-radius-corner-${borderRadiusCorner}`,
          `rhc-hero--aspect-ratio-${aspectRatio.replace(' / ', '-')}`,
          className,
        )}
        {...restProps}
      >
        <Image alt={imageAlt} className="rhc-hero__image" src={imageSrc} />
        {heroMessage && (
          <div className={clsx('rhc-hero__message')}>
            <HeadingGroup>
              <Heading appearance="utrecht-heading-3" className="rhc-hero__heading" level={headingLevel}>
                {heading}
              </Heading>
              <Paragraph className="rhc-hero__sub-heading">{subHeading}</Paragraph>
            </HeadingGroup>
          </div>
        )}
        {children && <div className="rhc-hero__children">{children}</div>}
      </div>
    );
  },
);

Hero.displayName = 'Hero';
