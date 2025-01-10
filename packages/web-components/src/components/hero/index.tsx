import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { Hero, HeroProps } from '@rijkshuisstijl-community/components-react';
import { BaseWebComponent } from '../BaseComponent';

export type HeroWebComponentAttributes = HeroProps;

export class HeroWebComponent extends BaseWebComponent {
  static override tagName: string = 'rhc-hero';
  static override observedAttributes: string[] = [
    'aspectratio',
    'heading',
    'heromessage',
    'imagealt',
    'subheading',
    'textalign',
    'borderradiuscorner',
    'headinglevel',
    'imagesrc',
  ];

  constructor() {
    super(stylesheet);
  }

  render(): void {
    this.root.render(
      <Hero
        aspectRatio={(this.getAttribute('aspectRatio') as HeroProps['aspectRatio']) ?? undefined}
        borderRadiusCorner={(this.getAttribute('borderRadiusCorner') as HeroProps['borderRadiusCorner']) ?? undefined}
        heading={this.getAttribute('heading') ?? 'default heading'}
        imageAlt={this.getAttribute('imageAlt') ?? 'image alt'}
        subHeading={this.getAttribute('subHeading') ?? 'sub heading'}
        textAlign={(this.getAttribute('textAlign') as HeroProps['textAlign']) ?? undefined}
        headingLevel={
          ((this.getAttribute('headingLevel') &&
            Number(this.getAttribute('headingLevel'))) as HeroProps['headingLevel']) ?? undefined
        }
        imageSrc={
          this.getAttribute('imageSrc') ??
          'https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/main/proprietary/assets/src/placeholder.jpg'
        }
      >
        <slot />
      </Hero>,
    );
  }
}
