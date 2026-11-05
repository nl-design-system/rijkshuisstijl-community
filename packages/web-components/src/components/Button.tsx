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

    const { disabled, ...restProps } = this.props;

    render(
      <Button disabled={(disabled === 'true') as ButtonWebComponentAttributes['disabled']} {...restProps}>
        <slot />
      </Button>,
      this.shadowRoot,
    );
  }
}
