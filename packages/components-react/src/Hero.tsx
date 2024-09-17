import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { Heading } from './Heading';
import { Image } from './Image';
import { Paragraph } from './Paragraph';

export interface HeroProps extends HTMLAttributes<HTMLDivElement> {
  alignment?: 'inline-start' | 'inline-end';
  imageSrc: string;
  imageAlt: string;
  heading: ReactNode;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  subtext: ReactNode;
  aspectRatio?: '16:9' | '1:1' | '4:3';
  roundedCornerLocation?: 'start-start' | 'start-end' | 'end-start' | 'end-end';
}

export const Hero = forwardRef(
  (
    {
      alignment = 'inline-start',
      children,
      className,
      imageSrc,
      imageAlt,
      heading,
      subtext,
      headingLevel = 3,
      roundedCornerLocation,
      aspectRatio = '16:9',
      ...restProps
    }: PropsWithChildren<HeroProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'rhc-hero',
          `rhc-hero--align-${alignment}`,
          roundedCornerLocation && `rhc-hero--rounded-border-custom rhc-hero--rounded-border-${roundedCornerLocation}`,
          `rhc-hero--aspect-ratio-${aspectRatio.replace(':', '-')}`,
          className,
        )}
        {...restProps}
      >
        <Image alt={imageAlt} className="rhc-hero__image" src={imageSrc} />
        <div className="rhc-hero__message">
          <Heading appearance="utrecht-heading-3" className="rhc-hero__heading" level={headingLevel}>
            {heading}
          </Heading>
          <Paragraph className="rhc-hero__subtext">{subtext}</Paragraph>
          {children}
        </div>
      </div>
    );
  },
);

Hero.displayName = 'Hero';
