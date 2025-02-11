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

  override setupProps(): void {
    for (const attributeName of this.getAttributeNames()) {
      this.props[attributeName] = this.getAttribute(attributeName);
    }
  }

  render(): void {
    if (!this.root) return;

    console.log('this.props', this.props);
    const {
      aspectRatio,
      borderRadiusCorner,
      heading,
      imageAlt,
      subHeading,
      textAlign,
      headingLevel,
      imageSrc,
      ...restProps
    } = this.props;
    render(
      <Hero
        aspectRatio={(aspectRatio as HeroProps['aspectRatio']) ?? undefined}
        borderRadiusCorner={borderRadiusCorner as HeroProps['borderRadiusCorner']}
        heading={heading ?? 'default heading'}
        headingLevel={(headingLevel && Number(headingLevel)) as HeroProps['headingLevel']}
        imageAlt={imageAlt ?? 'image alt'}
        subHeading={subHeading ?? 'sub heading'}
        textAlign={textAlign as HeroProps['textAlign']}
        imageSrc={
          imageSrc ??
          'https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/main/proprietary/assets/src/placeholder.jpg'
        }
        {...restProps}
      >
        <slot />
      </Hero>,
      this.root,
    );
  }
}
