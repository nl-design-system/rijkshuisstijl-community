import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { BreadcrumbNav, BreadcrumbNavProps } from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';

export type BreadcrumbNavWebComponentAttributes = BreadcrumbNavProps;

export class BreadcrumbNavWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-breadcrumb-nav';

  constructor() {
    const style =
      stylesheet +
      `
      ::slotted(*) {
        display: flex;
        align-items: center;
        line-height: 0;
      }
    `;
    super(style);
  }

  render(): void {
    if (!this.root) return;

    render(
      <BreadcrumbNav {...this.props}>
        <slot />
      </BreadcrumbNav>,
      this.root,
    );
  }
}
