import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { Button, ButtonProps } from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';

export type ButtonWebComponentAttributes = ButtonProps;

export class ButtonWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-button';

  constructor() {
    super(stylesheet);
  }

  render(): void {
    if (!this.shadowRoot) return;

    const { appearance, disabled, purpose, ...restProps } = this.props;

    // eslint-disable-next-line sonarjs/deprecation
    const normalizedAppearance = (appearance || undefined) as ButtonWebComponentAttributes['appearance'];
    const normalizedPurpose = (purpose || undefined) as ButtonWebComponentAttributes['purpose'];

    render(
      <Button
        disabled={(disabled === 'true') as ButtonWebComponentAttributes['disabled']}
        {...(normalizedAppearance ? { appearance: normalizedAppearance } : {})}
        {...(normalizedPurpose ? { purpose: normalizedPurpose } : {})}
        {...restProps}
      >
        <slot />
      </Button>,
      this.shadowRoot,
    );
  }
}
