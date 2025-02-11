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
    if (!this.root) return;

    const { appearance, disabled, ...restProps } = this.props;

    render(
      <Button
        appearance={(appearance as ButtonWebComponentAttributes['appearance']) ?? undefined}
        disabled={Boolean(disabled) as ButtonWebComponentAttributes['disabled']}
        {...restProps}
      >
        <slot />
      </Button>,
      this.root,
    );
  }
}
