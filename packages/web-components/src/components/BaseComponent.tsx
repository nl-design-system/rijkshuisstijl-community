export abstract class BaseWebComponent extends HTMLElement {
  protected root: HTMLElement | undefined;
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
    this.getAttributeNames().forEach((attributeName) => (this.props[attributeName] = this.getAttribute(attributeName)));
  }

  connectedCallback(): void {
    this._observer.observe(this, { attributes: true });

    this.root = document.createElement('span');
    this.root.style.height = '100% !important';
    this.shadowRoot.appendChild(this.root);

    this.setupProps();
    this.render();
  }

  attributeChangedCallback(): void {
    this.setupProps();
    this.render();
  }

  disconnectedCallback(): void {
    if (!this.root) return;
    this.root.remove();
  }

  protected abstract render(): void;

  static define(): void {
    if (!customElements.get(this.tagName)) {
      customElements.define(this.tagName, this as unknown as CustomElementConstructor);
    }
  }
}
