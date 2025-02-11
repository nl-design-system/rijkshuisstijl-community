import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { ActionGroup, ActionGroupProps } from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';

export type ActionGroupWebComponentAttributes = ActionGroupProps;

export class ActionGroupWebComponent extends BaseWebComponent {
  static override tagName: string = 'rhc-action-group';

  constructor() {
    super(stylesheet);
  }

  render(): void {
    if (!this.root) return;

    const { direction, ...restProps } = this.props;

    render(
      <ActionGroup
        direction={(direction as ActionGroupWebComponentAttributes['direction']) ?? undefined}
        {...restProps}
      >
        <slot />
      </ActionGroup>,
      this.root,
    );
  }
}
