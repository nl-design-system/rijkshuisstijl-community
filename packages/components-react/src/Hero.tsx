import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren, ReactNode, Ref } from 'react';
import { Heading, HeadingLevel } from './Heading';
import { HeadingGroup } from './HeadingGroup';
import { Image } from './Image';
import { Paragraph } from './Paragraph';

export interface HeroBaseProps extends HTMLAttributes<HTMLDivElement> {
  textAlign?: 'start' | 'end';
  imageSrc: string;
  imageAlt?: string;
  imagePresentation?: boolean;
  headingLevel?: HeadingLevel;
  headingAppearanceLevel?: HeadingLevel;
  aspectRatio?: '16 / 9' | '1 / 1' | '4 / 3';
  borderRadiusCorner?: 'start-start' | 'start-end' | 'end-start' | 'end-end';
  ref?: Ref<HTMLDivElement>;
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

export const Hero = ({
  ref,
  textAlign = 'start',
  children,
  className,
  imageSrc,
  imageAlt,
  imagePresentation,
  heading,
  subHeading,
  headingLevel = 3,
  headingAppearanceLevel = headingLevel,
  borderRadiusCorner,
  aspectRatio = '16 / 9',
  ...restProps
}: PropsWithChildren<HeroProps>) => {
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
      <Image alt={imageAlt} className="rhc-hero__image" presentation={imagePresentation} src={imageSrc} />
      {heading && (
        <div className={clsx('rhc-hero__message')}>
          <HeadingGroup>
            <Heading appearanceLevel={headingAppearanceLevel} className="rhc-hero__heading" level={headingLevel}>
              {heading}
            </Heading>
            {subHeading && <Paragraph className="rhc-hero__sub-heading">{subHeading}</Paragraph>}
          </HeadingGroup>
        </div>
      )}
      {children && <div className="rhc-hero__children">{children}</div>}
    </section>
  );
};

Hero.displayName = 'Hero';
