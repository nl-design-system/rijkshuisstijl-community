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

    const { classname, href, ...restProps } = this.props;

    render(
      <Link
        className={(classname as LinkWebComponentAttributes['className']) ?? undefined}
        href={href as LinkWebComponentAttributes['href']}
        {...restProps}
      >
        <slot />
      </Link>,
      this.shadowRoot,
    );
  }
}
