import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { Alert, AlertProps } from '@rijkshuisstijl-community/components-react';
import { BaseWebComponent, Slot } from './BaseComponent';

export type AlertWebComponentAttributes = AlertProps;

export class AlertWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-alert';
  static override readonly observedAttributes: string[] = ['type', 'heading', 'headinglevel', 'messagetext'];

  constructor() {
    super(stylesheet);
  }

  override setupRestProps(): void {
    for (const attributeName of this.getAttributeNames()) {
      if (AlertWebComponent.observedAttributes.includes(attributeName)) continue;
      this.restProps[attributeName] = this.getAttribute(attributeName);
    }
  }

  render(): void {
    this.root.render(
      <Alert
        heading={(this.getAttribute('heading') as AlertProps['heading']) ?? 'default heading'}
        type={(this.getAttribute('type') as AlertProps['type']) ?? 'info'}
        headingLevel={
          (this.getAttribute('headingLevel') && Number(this.getAttribute('headingLevel'))) as AlertProps['headingLevel']
        }
        textContent={
          (this.getAttribute('messageText') as AlertProps['textContent']) ?? 'This is a default alert message.'
        }
        {...this.restProps}
      >
        <Slot>{this.innerHTML}</Slot>
      </Alert>,
    );
  }
}
