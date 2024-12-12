import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { Hero } from '@rijkshuisstijl-community/components-react';
import ReactDOM from 'react-dom/client';

export class HeroWebComponent extends HTMLElement {
  private root: ReactDOM.Root;
  static observedAttributes = [
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
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    this.root = ReactDOM.createRoot(shadowRoot);

    const style: CSSStyleSheet = new CSSStyleSheet();
    style.replaceSync(stylesheet);
    shadowRoot.adoptedStyleSheets = [style];
  }

  attributeChangedCallback(): void {
    this.render();
  }

  connectedCallback(): void {
    this.render();
  }

  render(): void {
    this.root.render(
      <Hero
        aspectRatio={(this.getAttribute('aspectRatio') as '16 / 9' | '1 / 1' | '4 / 3') || undefined}
        heading={this.getAttribute('heading') ?? 'default heading'}
        heroMessage={this.getAttribute('heroMessage') === 'true'}
        imageAlt={this.getAttribute('imageAlt') ?? 'image alt'}
        subHeading={this.getAttribute('subHeading') ?? 'sub heading'}
        textAlign={(this.getAttribute('textAlign') as 'start' | 'end') || undefined}
        borderRadiusCorner={
          (this.getAttribute('borderRadiusCorner') as 'start-start' | 'start-end' | 'end-start' | 'end-end') ||
          undefined
        }
        headingLevel={
          ((this.getAttribute('headingLevel') && Number(this.getAttribute('headingLevel'))) as 1 | 2 | 3 | 4 | 5) ||
          undefined
        }
        imageSrc={
          this.getAttribute('imageSrc') ??
          'https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/main/proprietary/assets/src/placeholder.jpg'
        }
      />,
    );
  }

  disconnectedCallback(): void {
    this.root.unmount();
  }

  static define(): void {
    if (!customElements.get('rhc-hero')) {
      customElements.define('rhc-hero', this);
    }
  }
}
