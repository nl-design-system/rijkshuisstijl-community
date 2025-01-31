import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { Alert, AlertProps } from '@rijkshuisstijl-community/components-react';
import { BaseWebComponent } from './BaseComponent';

export type AlertWebComponentAttributes = AlertProps;

export class AlertWebComponent extends BaseWebComponent {
  static override tagName: string = 'rhc-alert';
  static override observedAttributes: string[] = ['type', 'heading', 'headinglevel', 'messagetext'];

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
        {this.innerHTML && <span dangerouslySetInnerHTML={{ __html: this.innerHTML }} />}
      </Alert>,
    );
  }
}
