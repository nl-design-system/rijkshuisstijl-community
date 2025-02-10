import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { Button, ButtonProps } from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';

export type ButtonWebComponentAttributes = ButtonProps;

export class ButtonWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-button';
  static override readonly observedAttributes: string[] = ['appearance', 'disabled'];

  constructor() {
    super(stylesheet);
  }

  override setupRestProps(): void {
    for (const attributeName of this.getAttributeNames()) {
      if (ButtonWebComponent.observedAttributes.includes(attributeName)) continue;
      this.restProps[attributeName] = this.getAttribute(attributeName);
    }
  }

  render(): void {
    if (!this.root) return;
    render(
      <Button
        appearance={(this.getAttribute('appearance') as ButtonProps['appearance']) ?? undefined}
        disabled={Boolean(this.getAttribute('disabled')) as ButtonProps['disabled']}
        {...this.restProps}
      >
        <slot />
      </Button>,
      this.root,
    );
  }
}
