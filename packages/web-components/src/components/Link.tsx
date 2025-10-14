import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { Link, LinkProps } from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';

export type LinkWebComponentAttributes = LinkProps;

export class LinkWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-link';

  constructor() {
    super(stylesheet);
  }

  render(): void {
    if (!this.shadowRoot) return;
    render(
      <Link {...(this.props as LinkWebComponentAttributes)}>
        <slot />
      </Link>,
      this.shadowRoot,
    );
  }
}
