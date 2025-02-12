import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { BreadcrumbNavSeparator, BreadcrumbNavSeparatorProps } from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';

export type BreadcrumbNavSeparatorWebComponentAttributes = BreadcrumbNavSeparatorProps;

export class BreadcrumbNavSeparatorWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-breadcrumb-nav-separator';

  constructor() {
    const style = stylesheet + ``;
    super(style);
  }

  render(): void {
    if (!this.root) return;

    render(
      <BreadcrumbNavSeparator {...this.props}>
        <slot />
      </BreadcrumbNavSeparator>,
      this.root,
    );
  }
}
