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

    const { heading, type, headinglevel, messagetext, ...restProps } = this.props;

    render(
      <Alert
        heading={(heading as AlertWebComponentAttributes['heading']) ?? 'default heading'}
        headingLevel={(headinglevel && Number(headinglevel)) as AlertWebComponentAttributes['headingLevel']}
        textContent={(messagetext as AlertWebComponentAttributes['textContent']) ?? 'This is a default alert message.'}
        type={(type as AlertWebComponentAttributes['type']) ?? 'info'}
        {...restProps}
      >
        <slot />
      </Alert>,
      this.shadowRoot,
    );
  }
}
