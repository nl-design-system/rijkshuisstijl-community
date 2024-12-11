import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { Hero } from '@rijkshuisstijl-community/components-react';
import ReactDOM from 'react-dom/client';

class HeroWebComponent extends HTMLElement {
  private root: ReactDOM.Root;

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    this.root = ReactDOM.createRoot(shadowRoot);

    const style: CSSStyleSheet = new CSSStyleSheet();
    style.replaceSync(stylesheet);
    shadowRoot.adoptedStyleSheets = [style];
  }

  connectedCallback() {
    this.root.render(
      <Hero
        heading={'heading'}
        heroMessage={true}
        imageAlt={'imageAlt'}
        subHeading={'sub heading'}
        imageSrc={
          'https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/main/proprietary/assets/src/placeholder.jpg'
        }
      />,
    );
  }

  disconnectedCallback() {
    this.root.unmount();
  }
}

customElements.define('rhc-hero', HeroWebComponent);
