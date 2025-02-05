import parse from 'html-react-parser';

export const Slot = ({ children }: { children: any }) => {
  // This is done to recreate <slot /> logic without a shadow DOM.
  return <>{parse(children)}</>;
};

export abstract class BaseWebComponent extends HTMLElement {
  protected root: HTMLElement | undefined;
  protected restProps: { [key: string]: any } = {};

  static get tagName(): string {
    throw new Error('tagName must be defined in the derived class');
  }

  static observedAttributes: string[];

  constructor(stylesheet: string) {
    super();

    const style = document.createElement('style');
    style.textContent = stylesheet;
    document.head.appendChild(style);
  }

  setupRestProps(): void {
    throw new Error('setupRestProps() must be defined in the derived class');
  }

  connectedCallback(): void {
    this.root = document.createElement('span');
    this.appendChild(this.root);

    this.setupRestProps();
    this.render();

    if (!(this.parentNode instanceof Element)) return;

    Array.from(this.childNodes).forEach((node) => {
      if (node !== this.root) node.remove();
    });
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
