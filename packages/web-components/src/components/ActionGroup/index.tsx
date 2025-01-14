import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { ActionGroup, ActionGroupProps } from '@rijkshuisstijl-community/components-react';
import { BaseWebComponent } from '../BaseComponent';

export type ActionGroupWebComponentAttributes = ActionGroupProps;

export class ActionGroupWebComponent extends BaseWebComponent {
  static override tagName: string = 'rhc-action-group';
  static override observedAttributes: string[] = ['direction'];

  constructor() {
    super(stylesheet);
  }

  render(): void {
    this.root.render(
      <ActionGroup direction={(this.getAttribute('direction') as ActionGroupProps['direction']) ?? undefined}>
        <slot />
      </ActionGroup>,
    );
  }
}
