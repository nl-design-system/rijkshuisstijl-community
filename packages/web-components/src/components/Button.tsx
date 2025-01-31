import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { Button, ButtonProps } from '@rijkshuisstijl-community/components-react';
import { BaseWebComponent } from './BaseComponent';

export type ButtonWebComponentAttributes = ButtonProps;

export class ButtonWebComponent extends BaseWebComponent {
  static override tagName: string = 'rhc-button';
  static override observedAttributes: string[] = ['appearance', 'disabled'];

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
    this.root.render(
      <Button
        suppressHydrationWarning
        appearance={(this.getAttribute('appearance') as ButtonProps['appearance']) ?? undefined}
        disabled={Boolean(this.getAttribute('disabled')) as ButtonProps['disabled']}
        {...this.restProps}
      >
        {this.innerHTML && <span dangerouslySetInnerHTML={{ __html: this.innerHTML }} />}
      </Button>,
    );
  }
}
