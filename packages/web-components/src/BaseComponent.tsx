import ReactDOM from 'react-dom/client';

export abstract class BaseWebComponent extends HTMLElement {
  protected root: ReactDOM.Root;
  static get tagName(): string {
    throw new Error('tagName must be defined in the derived class');
  }

  static observedAttributes: string[];

  constructor(stylesheet: string) {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    this.root = ReactDOM.createRoot(shadowRoot);

    const style: CSSStyleSheet = new CSSStyleSheet();
    style.replaceSync(stylesheet);
    shadowRoot.adoptedStyleSheets = [style];
  }

  connectedCallback(): void {
    this.render();
  }

  attributeChangedCallback(): void {
    this.render();
  }

  disconnectedCallback(): void {
    this.root.unmount();
  }

  protected abstract render(): void;

  static define(): void {
    if (!customElements.get(this.tagName)) {
      customElements.define(this.tagName, this as unknown as CustomElementConstructor);
    }
  }
}
