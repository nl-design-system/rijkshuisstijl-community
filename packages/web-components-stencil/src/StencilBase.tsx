import { Element, Prop } from '@stencil/core';
import ReactDOM from 'react-dom/client';

export class StencilBase {
  @Prop() props: Record<string, any> = {};
  @Element() host!: HTMLElement;
  protected reactRoot?: ReactDOM.Root;

  private kebabToCamelCase(kebab: string): string {
    return kebab.replace(/-([a-z])/g, (match) => match[1].toUpperCase());
  }

  componentWillLoad() {
    const props: Record<string, any> = {};

    Array.from(this.host.attributes).forEach((attr) => {
      const key = this.kebabToCamelCase(attr.name);
      props[key] = attr.value;
    });

    this.props = { ...props };
  }

  disconnectedCallback() {
    if (this.reactRoot) {
      this.reactRoot.unmount();
      this.reactRoot = undefined;
    }
  }

  render() {
    return null;
  }
}
