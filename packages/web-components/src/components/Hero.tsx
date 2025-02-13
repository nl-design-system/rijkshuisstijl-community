import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { Hero, HeroProps } from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';

export type HeroWebComponentAttributes = HeroProps;

export class HeroWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-hero';

  constructor() {
    super(stylesheet);
  }

  render(): void {
    if (!this.shadowRoot) return;

    const {
      aspectratio,
      borderradiuscorner,
      heading,
      imagealt,
      subheading,
      textalign,
      headinglevel,
      imagesrc,
      ...restProps
    } = this.props;

    render(
      <Hero
        aspectRatio={(aspectratio as HeroWebComponentAttributes['aspectRatio']) ?? undefined}
        borderRadiusCorner={borderradiuscorner as HeroWebComponentAttributes['borderRadiusCorner']}
        heading={heading ?? 'default heading'}
        headingLevel={(headinglevel && Number(headinglevel)) as HeroWebComponentAttributes['headingLevel']}
        imageAlt={imagealt ?? 'image alt'}
        subHeading={subheading ?? 'sub heading'}
        textAlign={textalign as HeroWebComponentAttributes['textAlign']}
        imageSrc={
          imagesrc ??
          'https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/main/proprietary/assets/src/placeholder.jpg'
        }
        {...restProps}
      >
        <slot />
      </Hero>,
      this.shadowRoot,
    );
  }
}
