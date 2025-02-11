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
    if (!this.root) return;

    const { heading, type, headinglevel, messagetext, ...restProps } = this.props;

    render(
      <Alert
        heading={(heading as AlertProps['heading']) ?? 'default heading'}
        headingLevel={(headinglevel && Number(headinglevel)) as AlertProps['headingLevel']}
        textContent={(messagetext as AlertProps['textContent']) ?? 'This is a default alert message.'}
        type={(type as AlertProps['type']) ?? 'info'}
        {...restProps}
      >
        <slot />
      </Alert>,
      this.root,
    );
  }
}
