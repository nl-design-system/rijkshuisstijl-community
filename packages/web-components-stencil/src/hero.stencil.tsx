import { Component, h, JSX, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'rhc-hero',
  styleUrl: 'hero.scss',
  shadow: true,
})
export class Hero {
  @Prop() aspectRatio?: '16-9' | '1-1' | '4-3' = '16-9';
  @Prop() textAlign?: 'start' | 'center' | 'end' = 'start';
  @Prop() borderRadiusCorner?: 'start-start' | 'start-end' | 'end-start' | 'end-end';
  @Prop() imageSrc?: string;
  @Prop() imageAlt?: string;
  @Prop() heading?: string;
  @Prop() headingLevel?: 1 | 2 | 3 | 4 | 5 = 3;
  @Prop() subHeading?: string;
  @Prop() heroMessage?: boolean;
  @Prop() customName?: string;

  render() {
    const {
      aspectRatio,
      textAlign,
      borderRadiusCorner,
      imageSrc,
      imageAlt,
      heading,
      subHeading,
      heroMessage,
      customName,
      headingLevel,
    } = this;

    return (
      <div class="rhc-hero">
        <div
          class={clsx(
            'rhc-hero',
            heroMessage && `rhc-hero--text-align-${textAlign}`,
            heroMessage &&
              borderRadiusCorner &&
              `rhc-hero--custom-border-radius-corner rhc-hero--border-radius-corner-${borderRadiusCorner}`,
            `rhc-hero--aspect-ratio-${aspectRatio?.replace(' / ', '-')}`,
            customName,
          )}
        >
          <img class="rhc-hero__image" src={imageSrc} alt={imageAlt} />
          {heroMessage && (
            <div class="rhc-hero__message">
              <div>
                {(() => {
                  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;
                  return (
                    <HeadingTag
                      class={clsx(`rhc-hero__heading`, {
                        [`utrecht-heading-${headingLevel}`]: headingLevel,
                      })}
                    >
                      {heading}
                    </HeadingTag>
                  );
                })()}
                <p class="rhc-hero__sub-heading utrecht-paragraph">{subHeading}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
