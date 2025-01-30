import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { Heading } from './Heading';
import { HeadingGroup } from './HeadingGroup';
import { Image } from './Image';
import { Paragraph } from './Paragraph';

export interface HeroBaseProps extends HTMLAttributes<HTMLDivElement> {
  textAlign?: 'start' | 'end';
  imageSrc: string;
  imageAlt: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5;
  aspectRatio?: '16 / 9' | '1 / 1' | '4 / 3';
  borderRadiusCorner?: 'start-start' | 'start-end' | 'end-start' | 'end-end';
}

export interface HeroWithHeading extends HeroBaseProps {
  heading: ReactNode;
  subHeading?: ReactNode;
}

export interface HeroWithoutSubHeading extends HeroBaseProps {
  heading?: ReactNode;
  subHeading?: never;
}

export type HeroProps = HeroWithHeading | HeroWithoutSubHeading;

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
      headingLevel = 3,
      borderRadiusCorner,
      aspectRatio = '16 / 9',
      ...restProps
    }: PropsWithChildren<HeroProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <section
        ref={ref}
        className={clsx(
          'rhc-hero',
          heading && `rhc-hero--text-align-${textAlign}`,
          heading &&
            borderRadiusCorner &&
            `rhc-hero--custom-border-radius-corner rhc-hero--border-radius-corner-${borderRadiusCorner}`,
          `rhc-hero--aspect-ratio-${aspectRatio.replace(' / ', '-')}`,
          className,
        )}
        {...restProps}
      >
        <Image alt={imageAlt} className="rhc-hero__image" src={imageSrc} />
        {heading && (
          <div className={clsx('rhc-hero__message')}>
            <HeadingGroup>
              <Heading appearance="level-3" className="rhc-hero__heading" level={headingLevel}>
                {heading}
              </Heading>
              {subHeading && <Paragraph className="rhc-hero__sub-heading">{subHeading}</Paragraph>}
            </HeadingGroup>
          </div>
        )}
        {children && <div className="rhc-hero__children">{children}</div>}
      </section>
    );
  },
);

Hero.displayName = 'Hero';
