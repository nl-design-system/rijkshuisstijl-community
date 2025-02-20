import { render } from 'preact';

export abstract class BaseWebComponent extends HTMLElement {
  public override shadowRoot: ShadowRoot;
  protected props: { [key: string]: any } = {};
  private readonly _observer: MutationObserver;

  static get tagName(): string {
    throw new Error('tagName must be defined in the derived class');
  }

  constructor(stylesheet: string) {
    super();

    this.shadowRoot = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = stylesheet;
    this.shadowRoot.appendChild(style);

    this._observer = new MutationObserver((mutations) => mutations.forEach(this.attributeChangedCallback.bind(this)));
  }

  setupProps(): void {
    this.getAttributeNames().forEach((attributeName) => {
      this.props[attributeName] = this.getAttribute(attributeName);
      this.removeAttribute(attributeName);
    });
  }

  connectedCallback(): void {
    this._observer.observe(this, { attributes: true });

    this.setupProps();
    this.render();
  }

  attributeChangedCallback(): void {
    this.setupProps();
    this.render();
  }

  disconnectedCallback(): void {
    render(null, this.shadowRoot);
  }

  protected abstract render(): void;

  static define(): void {
    if (!customElements.get(this.tagName)) {
      customElements.define(this.tagName, this as unknown as CustomElementConstructor);
    }
  }
}
