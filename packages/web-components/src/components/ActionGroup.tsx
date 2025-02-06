import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { ActionGroup, ActionGroupProps } from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent, Slot } from './BaseComponent';

export type ActionGroupWebComponentAttributes = ActionGroupProps;

export class ActionGroupWebComponent extends BaseWebComponent {
  static override tagName: string = 'rhc-action-group';
  static override observedAttributes: string[] = ['direction'];

  constructor() {
    super(stylesheet);
  }

  override setupRestProps(): void {
    for (const attributeName of this.getAttributeNames()) {
      if (ActionGroupWebComponent.observedAttributes.includes(attributeName)) continue;
      this.restProps[attributeName] = this.getAttribute(attributeName);
    }
  }

  render(): void {
    if (!this.root) return;
    render(
      <ActionGroup
        direction={(this.getAttribute('direction') as ActionGroupProps['direction']) ?? undefined}
        {...this.restProps}
      >
        <Slot>{this.innerHTML}</Slot>
      </ActionGroup>,
      this.root,
    );
  }
}
