export abstract class BaseWebComponent extends HTMLElement {
  protected root: HTMLElement | undefined;
  public override shadowRoot: ShadowRoot;
  protected restProps: { [key: string]: any } = {};

  static get tagName(): string {
    throw new Error('tagName must be defined in the derived class');
  }

  static observedAttributes: string[];

  constructor(stylesheet: string) {
    super();

    this.shadowRoot = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = stylesheet;
    this.shadowRoot.appendChild(style);
  }

  setupRestProps(): void {
    throw new Error('setupRestProps() must be defined in the derived class');
  }

  connectedCallback(): void {
    this.root = document.createElement('span');
    this.root.id = 'root';
    this.shadowRoot.appendChild(this.root);

    this.setupRestProps();
    this.render();
  }

  attributeChangedCallback(): void {
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
