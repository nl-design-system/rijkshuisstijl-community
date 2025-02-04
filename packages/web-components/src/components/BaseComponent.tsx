import parse from 'html-react-parser';
import { render } from 'preact';

export const Slot = ({ children }: { children: any }) => {
  console.log('parse(children)', parse(children));
  console.log('children', children);
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
    console.log('basecomponent - constructor');
    super();
    // this.root = this;

    const style = document.createElement('style');
    style.textContent = stylesheet;
    document.head.appendChild(style);
  }

  setupRestProps(): void {
    throw new Error('setupRestProps() must be defined in the derived class');
  }

  connectedCallback(): void {
    console.log('basecomponent - connectedCallback');
    this.root = document.createElement('span');
    this.appendChild(this.root);

    // this.initialContent = this.innerHTML
    // this.innerHTML = '';

    this.setupRestProps();
    this.render();
  }

  attributeChangedCallback(): void {
    console.log('basecomponent - attributeChangedCallback');
    this.render();
  }

  disconnectedCallback(): void {
    // Clean up when the element is removed
    if (this.root) {
      render(null, this.root); // Unmount Preact component
      this.root.remove(); // Remove from DOM
    }
  }

  protected abstract render(): void;

  static define(): void {
    if (!customElements.get(this.tagName)) {
      customElements.define(this.tagName, this as unknown as CustomElementConstructor);
    }
  }
}
