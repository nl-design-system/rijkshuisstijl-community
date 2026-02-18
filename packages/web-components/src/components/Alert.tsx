/**
 * @license EUPL-1.2
 * Copyright (c) 2025 Community for NL Design System
 */
import { Alert, AlertProps } from '@rijkshuisstijl-community/alert-react';
import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
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
