import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { CheckboxGroup, CheckboxGroupProps } from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';

export type CheckboxGroupWebComponentAttributes = CheckboxGroupProps;

export class CheckboxGroupWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-checkbox-group';

  constructor() {
    super(stylesheet);
  }

  render(): void {
    if (!this.shadowRoot) return;

    const { classname, ...restProps } = this.props;

    render(
      <CheckboxGroup
        className={(classname as CheckboxGroupWebComponentAttributes['className']) ?? undefined}
        {...restProps}
      >
        <slot />
      </CheckboxGroup>,
      this.shadowRoot,
    );
  }
}
