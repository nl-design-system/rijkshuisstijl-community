import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { Alert, AlertProps } from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';

export type AlertWebComponentAttributes = AlertProps;

export class AlertWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-alert';

  constructor() {
    super(stylesheet);
  }

  render(): void {
    if (!this.shadowRoot) return;

    render(
      <Alert {...this.props}>
        <slot />
      </Alert>,
      this.shadowRoot,
    );
  }
}
