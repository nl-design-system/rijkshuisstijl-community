import parse from 'html-react-parser';
import { JSX } from 'react';

// This is done to recreate <slot /> logic without a shadow DOM.
export const Slot = ({ children }: { children: string }) => {
  const parsedChildren: string | JSX.Element | JSX.Element[] = parse(children);
  if (!Array.isArray(parsedChildren)) return parsedChildren;

  const filteredChildren = parsedChildren.filter((el) => el.props?.id !== 'root');
  return <>{filteredChildren}</>;
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
    this.root.id = 'root';
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
