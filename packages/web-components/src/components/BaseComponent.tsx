import parse from 'html-react-parser';
import { createRoot, Root } from 'react-dom/client';

export const Slot = ({ children }: { children: string }) => {
  // This is done to recreate <slot /> logic without a shadow DOM.
  return <>{parse(children)}</>;
};

export abstract class BaseWebComponent extends HTMLElement {
  protected root: Root;
  protected restProps: { [key: string]: any } = {};

  static get tagName(): string {
    throw new Error('tagName must be defined in the derived class');
  }

  static observedAttributes: string[];

  constructor(stylesheet: string) {
    super();
    this.root = createRoot(this);

    const style = document.createElement('style');
    style.textContent = stylesheet;
    document.head.appendChild(style);
  }

  setupRestProps(): void {
    throw new Error('setupRestProps() must be defined in the derived class');
  }

  connectedCallback(): void {
    this.setupRestProps();
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
