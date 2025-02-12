import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { BreadcrumbNavLink, BreadcrumbNavLinkProps } from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';

export type BreadcrumbNavLinkWebComponentAttributes = BreadcrumbNavLinkProps;

export class BreadcrumbNavLinkWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-breadcrumb-nav-link';

  constructor() {
    const style = stylesheet + ``;
    super(style);
  }

  render(): void {
    if (!this.root) return;

    const { active, classname, href, current, ...restProps } = this.props;

    render(
      <BreadcrumbNavLink
        active={Boolean(active as BreadcrumbNavLinkWebComponentAttributes['active']) ?? undefined}
        className={(classname as BreadcrumbNavLinkWebComponentAttributes['className']) ?? undefined}
        current={Boolean(current) as BreadcrumbNavLinkWebComponentAttributes['current']}
        href={(href as BreadcrumbNavLinkWebComponentAttributes['href']) ?? undefined}
        {...restProps}
      >
        <slot />
      </BreadcrumbNavLink>,
      this.root,
    );
  }
}
